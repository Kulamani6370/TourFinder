import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const PageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: " Not wasting money is the best way to save money.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Experience some extraordinary hiking ",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Enjoy the tour with fully comfortable ",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 25th, 2024",
    title: "Himalaya Adventure",
    info: " Explore the unseen: Himalayas Beckon",
    place: "Uttarakhand",
    duration: "6 days",
    amount: "Rs. 80000",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2024",
    title: "Best of Chennai",
    info: " Visit the city where the rhythm of life is set by the waves.",
    place: "Tamilnadu",
    duration: "11 days",
    amount: "Rs. 1Lakh",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2024",
    title: "Explore Mumbai",
    info: "welcome to the city of Stars",
    place: "Maharashtra",
    duration: "7 days",
    amount: "Rs. 1.5 LAKH",
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2024",
    title: "Kerala highlights",
    info: "Come to see the beauty of Nature where heaven touches the greenery.",
    place: "Kerala",
    duration: "9 days",
    amount: "Rs. 90000",
  },
];
