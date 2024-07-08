import * as Yup from "yup";

const phoneRegExp = /^\+\d{1,3}\s?\d{1,14}(\s?\d{1,13})?$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

export const SignUpSchema = LoginSchema.shape({
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export const ForgotSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

export const ProfileSchema = Yup.object().shape({
  avatar: Yup.string().url("Avatar must be a valid URL").nullable(),
  username: Yup.string()
    .max(8, "Username must be at most 8 characters")
    .nullable(),
  fName: Yup.string()
    .max(20, "First name must be at most 20 characters")
    .nullable(),
  lName: Yup.string()
    .max(20, "Last name must be at most 20 characters")
    .nullable(),
  phone: Yup.string()
    .min(10, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .nullable(),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required")
    .nullable(),
});

export const EditProfileSchema = Yup.object().shape({
  avatar: Yup.string().url("Avatar must be a valid URL").nullable(),
  username: Yup.string()
    .max(8, "Username must be at most 8 characters")
    .nullable(),
  fName: Yup.string()
    .max(20, "First name must be at most 20 characters")
    .nullable(),
  lName: Yup.string()
    .max(20, "Last name must be at most 20 characters")
    .nullable(),
  phone: Yup.string()
    .min(10, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .nullable(),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .nullable(),
});

// export const PackageOnboardingStepZeroSchema = Yup.object().shape({
//   Package_Name: Yup.string()
//     .required("Package Name is required")
//     .max(100, "Package Name must be at most 100 characters"),
//   Destination: Yup.string()
//     .required("Destination is required")
//     .max(100, "Destination must be at most 100 characters"),
//   Duration: Yup.number()
//     .required("Duration is required")
//     .positive("Duration must be a positive number")
//     .integer("Duration must be an integer")
//     .min(1, "Duration must be at least 1 day")
//     .max(365, "Duration cannot be more than 365 days"),
//   Price: Yup.number()
//     .required("Price is required")
//     .positive("Price must be a positive number"),
//   Description: Yup.string()
//     .required("Description is required")
//     .max(1000, "Description must be at most 1000 characters"),
// });

// export const PackageOnboardingStepOneSchema = Yup.object().shape({
//   days: Yup.array().of(
//     Yup.object().shape({
//       activity: Yup.string().required("Activity is required"),
//       schedule: Yup.string().required("Schedule is required"),
//     })
//   ),
// });

// export const TourOnboardingStepZeroSchema = Yup.object().shape({
//   tourName: Yup.string()
//     .required("Package Name is required")
//     .max(100, "Package Name must be at most 100 characters"),
//   destination: Yup.string()
//     .required("Destination is required")
//     .max(100, "Destination must be at most 100 characters"),
//   duration: Yup.number()
//     .required("Duration is required")
//     .positive("Duration must be a positive number")
//     .integer("Duration must be an integer")
//     .min(1, "Duration must be at least 1 day")
//     .max(365, "Duration cannot be more than 365 days"),
//   price: Yup.number()
//     .required("Price is required")
//     .positive("Price must be a positive number"),
//   description: Yup.string()
//     .required("Description is required")
//     .max(1000, "Description must be at most 1000 characters"),
// });

// export const TourOnboardingStepOneSchema = Yup.object().shape({
//   days: Yup.array().of(
//     Yup.object().shape({
//       activity: Yup.string().required("Activity is required"),
//       schedule: Yup.string().required("Schedule is required"),
//     })
//   ),
// });

// export const HotelOnboardingStepZeroSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(3, "Password must be 3 characters at minimum")
//     .required("Password is required"),
//   username: Yup.string()
//     .max(15, "Username must be at most 15 characters")
//     .nullable(),
//   fName: Yup.string()
//     .max(20, "First name must be at most 20 characters")
//     .nullable(),
//   lName: Yup.string()
//     .max(20, "Last name must be at most 20 characters")
//     .nullable(),
// });

// export const HotelOnboardingStepTwoSchema = Yup.object().shape({
//   name: Yup.string().min(3, "Name must have atleast 3 characters"),
//   description: Yup.string()
//     .min(20, "Description must have atleast 20 characters")
//     .nullable(),
//   website: Yup.string().url("Website must be a valid URL").nullable(),
//   phone: Yup.string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .nullable(),
//   address: Yup.string().required("Address is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State is required"),
//   zipCode: Yup.string().required("Zip code is required"),
// });

// export const HotelOnboardingStepFourSchema = Yup.object().shape({
//   rooms: Yup.array()
//     .of(
//       Yup.object().shape({
//         roomType: Yup.string().required("Room type is required"),
//         roomAmenities: Yup.array()
//           .of(Yup.string())
//           .required("Please select at least one amenity"),
//         numberOfRooms: Yup.number()
//           .required("Number of rooms is required")
//           .positive("Number of rooms must be greater than zero")
//           .integer("Number of rooms must be an integer"),
//         price: Yup.number()
//           .required("Price of room is required")
//           .positive("Price room must be greater than zero")
//           .integer("Price room must be an integer"),
//         seasonal_price: Yup.number()
//           .required("Seasonal Price of room is required")
//           .positive("Seasonal Price room must be greater than zero")
//           .integer("Seasonal Price room must be an integer"),
//         festive_price: Yup.number()
//           .required("Festive Price of room is required")
//           .positive("Festive Price room must be greater than zero")
//           .integer("Festive Price room must be an integer"),
//         size: Yup.number()
//           .required("Size of room is required")
//           .positive("Size room must be greater than zero")
//           .integer("Size room must be an integer"),
//         roomName: Yup.string().required("Required"),
//         images: Yup.array()
//           .of(Yup.mixed())
//           .max(5, "You can only upload up to 5 images"),
//       })
//     )
//     .min(1, "At least one room must be added")
//     .required("At least one room must be added"),
// });

// export const HotelOnboardingStepEightSchema = Yup.object().shape({
//   roomName: Yup.string().required("Room name is required"),
//   images: Yup.array().max(5, "You can only upload up to 5 images"),
// });



// export const AccountSettingsSchema = Yup.object().shape({
//   fName: Yup.string().required("First name is required"),
//   lName: Yup.string().required("Last name is required"),
//   username: Yup.string().required("Username is required"),
//   // email: Yup.string().email("Invalid email").required("Email is required"),
//   phone: Yup.string().required("Phone number is required"),
//   description: Yup.string().required("Description is required"),
// });

// export const GSTSettingsSchema = Yup.object().shape({
//   gst_city: Yup.string().required("City is required"),
//   gst_number: Yup.string().required("GST Number is required"),
//   gst_email: Yup.string().email("Invalid email").required("Email is required"),
//   gst_phoneNumber: Yup.string().required("Phone number is required"),
//   gst_name: Yup.string().required("Name is required"),
// });

// export const AddressSettingsSchema = Yup.object().shape({
//   address: Yup.string().required("Address is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State is required"),
//   country: Yup.string().required("Country is required"),
//   pinCode: Yup.string().required("Pin Code is required"),
// });