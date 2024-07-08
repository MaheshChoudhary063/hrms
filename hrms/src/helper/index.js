import { FaHotel } from "react-icons/fa";
import { BiHotel } from "react-icons/bi";
import { RiHome6Fill } from "react-icons/ri";
import { BsFillHouseFill } from "react-icons/bs";

export const ROLES = ["HOTEL", "AGENT", "ADMIN", "USER"];

// export const HOTEL_TYPE = [
//   {
//     id: 1,
//     title: "Hotel",
//     icon: (value) => (
//       <FaHotel
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100 dark:text-white"
//         }`}
//       />
//     ),
//     description:
//       "Offers accommodation with restaurants, meeting rooms, and guest services.",
//   },
//   {
//     id: 2,
//     title: "Homestay",
//     icon: (value) => (
//       <RiHome6Fill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description:
//       "Guest has a private room, shared facilities with host onsite.",
//   },
//   {
//     id: 3,
//     title: "Guest House",
//     icon: (value) => (
//       <BiHotel
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description:
//       "Private home with separate living facilities for host and guest.",
//   },
//   {
//     id: 4,
//     title: "Hostel",
//     icon: (value) => (
//       <BsFillHouseFill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description:
//       "Budget accommodation with dorm-style beds and social atmosphere.",
//   },
//   {
//     id: 5,
//     title: "Bed and Breakfast",
//     icon: (value) => (
//       <BsFillHouseFill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description: "Private home offering overnight stays with breakfast.",
//   },
//   {
//     id: 6,
//     title: "Aparthotel",
//     icon: (value) => (
//       <BsFillHouseFill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description:
//       "Self-catering apartment with some hotel facilities like reception.",
//   },
//   {
//     id: 7,
//     title: "Love hotel",
//     icon: (value) => (
//       <BsFillHouseFill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description: "Adult-only accommodation rented per hour or night.",
//   },
//   {
//     id: 8,
//     title: "Motel",
//     icon: (value) => (
//       <BsFillHouseFill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description:
//       "Roadside hotel for motorists, direct access to parking, few amenities.",
//   },
//   {
//     id: 9,
//     title: "Resort",
//     icon: (value) => (
//       <BsFillHouseFill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description:
//       "Relaxation spot with restaurants, activities, and a luxury feel.",
//   },
//   {
//     id: 10,
//     title: "Lodge",
//     icon: (value) => (
//       <BsFillHouseFill
//         className={`m-auto h-5 w-5 transition-all duration-500 ease-in-out ${
//           value ? "text-brand-900" : "text-brand-100"
//         }`}
//       />
//     ),
//     description:
//       "Private home accommodation surrounded by nature like mountains or forests.",
//   },
// ];

// export const HOTEL_AMENITIES = [
//   "Front Desk Services",
//   "Housekeeping",
//   "Fitness Center",
//   "Swimming Pool",
//   "Business Center",
//   "Restaurant/Bar",
//   "Breakfast",
//   "Parking",
//   "Laundry Services",
//   "Shuttle Service",
//   "Spa/Wellness Center",
//   "Pet-Friendly",
//   "Accessibility Features",
//   "Conference/Meeting Rooms",
//   "Luggage Storage",
//   "ATM",
//   "Gift Shop",
//   "Library/Reading Area",
//   "Garden/Terrace",
//   "Kids' Club",
//   "Butler Service",
//   "Valet Parking",
//   "Personal Shopper",
//   "Chauffeur Services",
//   "Private Dining",
//   "Helipad",
//   "Wine Cellar",
//   "Designer Toiletries",
//   "In-room Jacuzzi/Hot Tub",
//   "Bespoke Services",
// ];

// export const ROOM_AMENITIES = [
//   "Wi-Fi",
//   "Television",
//   "Air Conditioning/Heating",
//   "Mini-bar",
//   "Room Service",
//   "Coffee/Tea Maker",
//   "Safe",
//   "Telephone",
//   "Iron and Ironing Board",
//   "Hairdryer",
//   "Toiletries",
//   "Bathrobe and Slippers",
//   "Work Desk",
//   "Alarm Clock",
//   "Refrigerator",
//   "Closet",
//   "Blackout Curtains",
//   "Balcony/Patio",
// ];

// export const HOTEL_ROOM_TYPES = [
//   "Standard Room",
//   "Suite",
//   "Deluxe Room",
//   "Executive Room",
//   "Junior Suite",
//   "Presidential Suite",
//   "Family Room",
//   "Connecting Rooms",
//   "Accessible Room",
//   "Adjoining Rooms",
//   "Pet-Friendly Room",
//   "Smoking Room/Non-Smoking Room",
//   "Penthouse Suite",
// ];

// export const INCLUSIONS = [
//   "Meals",
//   "Accommodation",
//   "Transportation",
//   "Tours",
//   "Tickets",
//   "Services",
//   "Wellness",
//   "Extras",
// ];

// export const EXCLUSIONS = [
//   "Airfare",
//   "Personal Expenses",
//   "Visa Fees",
//   "Travel Insurance",
//   "Optional Activities",
//   "Alcoholic Beverages",
//   "Gratuities",
//   "Telephone Calls",
// ];

export const grantAdminPermission = (email) => {
  // Check if the email contains the "+admin" substring
  if (email.includes("+admin")) {
    return true;
  } else {
    return false;
  }
};

export const filterRoutesByRole = (routes, userRoles) => {
  const lowerCaseUserRoles = userRoles.map((role) => role.toUpperCase());

  return routes.filter((route) =>
    route.type.some((role) => lowerCaseUserRoles.includes(role.toUpperCase()))
  );
};

export const checkAdmin = (Role, targetRole) => {
  return Role.map((role) => role.toUpperCase()).some((role) =>
    targetRole.includes(role)
  );
};
