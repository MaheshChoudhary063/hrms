import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  inMemoryPersistence,
} from "@firebase/auth";
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "@firebase/firestore";
import { isEmpty } from "lodash";
import { auth, db, secondaryAuth, storage } from "./firebaseConfig";
import notify from "helper/notification";
import { FIREBASE_DOCS } from "./constants";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// Common Api
export const uploadImage = async (file, path) => {
  const storageRef = ref(storage, path + "/" + file.name);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return {
      success: true,
      data: downloadURL,
    };
  } catch (error) {
    console.error("Upload failed", error);
    return {
      success: false,
      message: "Upload failed",
    };
  }
};

// Auth Api
export const createUser = async (email, password, role, type = "form") => {
  try {
    // Create user with email and password
    await setPersistence(secondaryAuth, inMemoryPersistence);

    const userCredential = await createUserWithEmailAndPassword(
      secondaryAuth,
      email,
      password
    );
    const user = userCredential.user;

    // Assign role and additional data in Firestore
    const userData = {
      email: {
        primary: user.email,
      },
      role: [...role],
      createdAt: new Date(),
    };

    const userDocRef = doc(db, FIREBASE_DOCS.USERS, user.uid);
    await setDoc(userDocRef, userData);

    const profileDocRef = doc(db, FIREBASE_DOCS.PROFILES, user.uid);
    await setDoc(profileDocRef, {
      username: "",
      name: {
        first: "",
        last: "",
      },
      email: {
        primary: user.email,
      },
      phone: {
        primary: "",
      },
      avatar: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (role === "USER") {
      const accountDocRef = doc(db, FIREBASE_DOCS.ACCOUNTS_USER, user.uid);
      await setDoc(accountDocRef, {
        createdBy: type,
        days: 0,
        lastVisit: "",
        leaveReview: {
          status: false,
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } else {
      const accountDocRef = doc(db, FIREBASE_DOCS.ACCOUNTS, user.uid);
      await setDoc(accountDocRef, {
        createdBy: type,
        days: 0,
        lastVisit: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    if (type === "form") {
      // Send email verification
      await sendEmailVerification(user);
      notify.success(
        "Welcome! You have successfully signed up and a verification email has been sent to your address."
      );
    }

    await signOut(secondaryAuth);

    return { success: true, user };
  } catch (error) {
    let errorMessage = "An error occurred during sign up.";

    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "This email address is already in use.";
        break;
      case "auth/invalid-email":
        errorMessage = "The email address is not valid.";
        break;
      case "auth/operation-not-allowed":
        errorMessage = "Email/password accounts are not enabled.";
        break;
      case "auth/weak-password":
        errorMessage = "The password is too weak.";
        break;
      default:
        errorMessage = error.message;
    }

    notify.error(errorMessage);
    return { success: false, message: errorMessage };
  }
};

export const loginUser = async (email, password, rememberMe) => {
  try {
    if (!rememberMe) {
      await setPersistence(auth, browserSessionPersistence);
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (!user.emailVerified) {
      await signOut(auth);
      notify.error("Please verify your email before logging in.");
      return { success: false, message: "Email not verified" };
    }

    const userRole = await getDoc(doc(db, FIREBASE_DOCS.USERS, user.uid));
    const userProfile = await getDoc(doc(db, FIREBASE_DOCS.PROFILES, user.uid));

    notify.success("Login successful. Welcome back!");
    return {
      success: true,
      data: {
        user: userProfile.data(),
        role: userRole.data().role,
      },
    };
  } catch (error) {
    let errorMessage = "An error occurred during login.";

    switch (error.code) {
      case "auth/invalid-credential":
        errorMessage = "Invalid credentials.";
        break;
      default:
        errorMessage = error.message;
    }

    notify.error(errorMessage);
    return { success: false, message: errorMessage };
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    notify.success("Password reset email sent successfully.");
    return { success: true };
  } catch (error) {
    let errorMessage =
      "An error occurred while sending the password reset email.";

    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "No user found with this email.";
        break;
      case "auth/invalid-value-(email),-starting-an-object-on-a-scalar-field":
        errorMessage = "The email address is not valid.";
        break;
      default:
        errorMessage = error.message;
    }

    notify.error(errorMessage);
    return { success: false, message: errorMessage };
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    notify.success("Successfully logged out.");
    return { success: true };
  } catch (error) {
    notify.error("An error occurred while logging out.");
    return { success: false, message: error.message };
  }
};

// User Api
export const getAllUsers = async () => {
  const response = [];
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const currentUserId = user.uid;
        try {
          const querySnapshot = await getDocs(
            collection(db, FIREBASE_DOCS.USERS)
          );
          if (querySnapshot.size > 0) {
            querySnapshot.forEach((item) => {
              // Exclude the logged-in user from the response
              if (item.id !== currentUserId) {
                response.push({ id: item.id, ...item.data() });
              }
            });
          }
          resolve(response);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(response); // No user is logged in, return an empty array
      }
    });
  });
};

export const getUserByID = async (id) => {
  const response = await getDoc(doc(db, FIREBASE_DOCS.USERS, id));
  return response.exists() ? { id: response.id, ...response.data() } : {};
};

// Profile Api
export const getAllProfiles = async () => {
  const response = [];
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const currentUserId = user.uid;
        try {
          const querySnapshot = await getDocs(
            collection(db, FIREBASE_DOCS.PROFILES)
          );
          if (querySnapshot.size > 0) {
            querySnapshot.forEach((item) => {
              // Exclude the logged-in user from the response
              if (item.id !== currentUserId) {
                response.push({ id: item.id, ...item.data() });
              }
            });
          }
          resolve(response);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(response); // No user is logged in, return an empty array
      }
    });
  });
};

export const getProfileByID = async (id) => {
  const response = await getDoc(doc(db, FIREBASE_DOCS.PROFILES, id));
  return response.exists() ? { id: response.id, ...response.data() } : {};
};

export const addUpdateProfile = async (id, data, admin = false) => {
  const { role, ...rest } = data;

  try {
    if (isEmpty(id)) {
      if (admin) {
        const response = await createUser(
          rest.email.primary,
          rest.password,
          role,
          "manual"
        );

        if (response.success) {
          await updateDoc(doc(db, FIREBASE_DOCS.PROFILES, response.user.uid), {
            ...rest,
            updatedAt: new Date(),
          });
          notify.success("Created Successfully!");
          return { success: true, message: "Created Successfully!" };
        }
      }
    } else {
      if (admin) {
        await updateDoc(doc(db, FIREBASE_DOCS.USERS, id), {
          role: [...role],
        });
      }

      await updateDoc(doc(db, FIREBASE_DOCS.PROFILES, id), {
        ...rest,
        updatedAt: new Date(),
      });
      notify.success("Updated Successfully!");
      return { success: true, message: "Updated Successfully!" };
    }
  } catch (error) {
    notify.error("Something went wrong!");
    return { success: false, message: "Something went wrong" };
  }
};

// // Hotel Api
// export const getAllHotels = async () => {
//   const response = [];
//   return new Promise((resolve, reject) => {
//     onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const currentUserId = user.uid;
//         try {
//           const querySnapshot = await getDocs(
//             collection(db, FIREBASE_DOCS.HOTELS)
//           );
//           if (querySnapshot.size > 0) {
//             querySnapshot.forEach((item) => {
//               // Exclude the logged-in user from the response
//               if (item.user === currentUserId) {
//                 response.push({ id: item.id, ...item.data() });
//               }
//             });
//           }
//           resolve(response);
//         } catch (error) {
//           reject(error);
//         }
//       } else {
//         resolve(response); // No user is logged in, return an empty array
//       }
//     });
//   });
// };

// export const getHotelByID = async (id) => {
//   const response = await getDoc(doc(db, FIREBASE_DOCS.HOTELS, id));
//   return response.exists() ? { id: response.id, ...response.data() } : {};
// };

// export const addUpdateHotel = async (id, data) => {
//   const { password, process, ...rest } = data;

//   try {
//     if (isEmpty(id)) {
//       const response = await createUser(
//         rest.email.primary,
//         password,
//         ["HOTEL"],
//         "manual"
//       );

//       if (response.success) {
//         const hotelDocRef = collection(db, FIREBASE_DOCS.HOTELS);
//         const hotel = await addDoc(hotelDocRef, {
//           user: response.user.uid,
//           status: process ? "progress" : "pending",
//           createdAt: new Date(),
//         });

//         await updateDoc(doc(db, FIREBASE_DOCS.PROFILES, response.user.uid), {
//           ...rest,
//           updatedAt: new Date(),
//         });
//         notify.success("Hotel Added Successfully!");
//         return { success: true, data: hotel };
//       } else {
//         return { success: false, message: response.message };
//       }
//     } else {
//       const existingHotel = await getHotelByID(id);
//       if (!existingHotel.id) {
//         return { success: false, message: "Hotel not found" };
//       }

//       await updateDoc(doc(db, FIREBASE_DOCS.HOTELS, existingHotel.id), {
//         ...rest,
//         updatedAt: new Date(),
//       });
//       notify.success("Hotel Updated Successfully!");
//       return { success: true, message: "Hotel Updated Successfully!" };
//     }
//   } catch (error) {
//     notify.error("Something went wrong!");
//     return { success: false, message: error.message };
//   }
// };

// // Package Api
// export const getAllPackages = async () => {};
// export const getPackageByID = async (id) => {};
// export const addUpdatePackage = async () => {};

// // Tour Api
// export const getAllTours = async () => {};
// export const getTourByID = async (id) => {};
// export const addUpdateTour = async () => {};
