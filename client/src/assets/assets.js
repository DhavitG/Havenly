import logo from "./logo.svg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";
import regImage from "./regImage.png";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
  logo,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
};

export const cities = ["Dubai", "Singapore", "New York", "London"];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    priceOff: 25,
    expiryDate: "Aug 31",
    image: exclusiveOfferCardImg1,
  },
  {
    _id: 2,
    title: "Romantic Getaway",
    description: "Special couples package including spa treatment",
    priceOff: 20,
    expiryDate: "Sep 20",
    image: exclusiveOfferCardImg2,
  },
  {
    _id: 3,
    title: "Luxury Retreat",
    description:
      "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
    priceOff: 30,
    expiryDate: "Sep 25",
    image: exclusiveOfferCardImg3,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that Havenly provides.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "Havenly exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Amazing service! I always find the best luxury accommodations through Havenly. Their recommendations never disappoint!",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Dhavit Gandhi",
  email: "user.greatstack@gmail.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// Hotel Dummy Data
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Urbanza Suites",
  address: "Main Road  123 Street , 23 Colony",
  contact: "+0123456789",
  owner: userDummyData,
  city: "New York",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: hotelDummyData,
    roomType: "Double Bed",
    pricePerNight: 399,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: hotelDummyData,
    roomType: "Double Bed",
    pricePerNight: 299,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: hotelDummyData,
    roomType: "Double Bed",
    pricePerNight: 249,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: hotelDummyData,
    roomType: "Single Bed",
    pricePerNight: 199,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    room: roomsDummyData[3],
    hotel: hotelDummyData,
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

export const googleImage = {
  image1:
    "data:image/jpeg;base64,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",
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
