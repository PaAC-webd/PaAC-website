import cosmic_voyage from "../assets/Events/cosmic_voyage.webp";
import stargazing from "../assets/Events/stargazing.webp";
import gl from "../assets/Events/gl.webp";
import student_lec from "../assets/Events/student_lec.webp";
import int_bee from "../assets/Events/int_bee.webp";
import jc from "../assets/Events/jc.webp";
import astro from "../assets/Events/astro.webp";

const Recent = [
  {
    id: 1,
    title: "Integration Bee",
    date: "October 20-22, 2023",
    location: "LHC, IIT Roorkee",
    details:
      "PaAC brings you IITR’s own Integration Bee this year! Deriving inspiration from MIT’s Integration Bee, the tournament will be conducted by integrating the same spirit with our fun and quirky elements.",
    image: int_bee,
  },
  {
    id: 2,
    title: "Journal Club",
    date: "September 6, 2023",
    location: "PaAC Room, SAC",
    details: "Journal Club is a platform for students to discuss and analyze recent scientific papers in the field of physics. It provides an opportunity to delve deeper into various research topics and gain insights from peers.",
    image: jc,
  },
  {
    id: 3,
    title: "Guest Lectures",
    date: "March 21 2023",
    location: "Football Ground, IIT Roorkee",
    details: "These lectures cover a wide range of topics and aim to inspire and educate students. They offer an opportunity to learn from experienced professionals and gain a deeper understanding of various subjects.",
    image: gl,
  },
  {
    id: 4,
    title: "Student Lectures",
    date: "October 2023",
    location: "PaAC Room, SAC",
    details:
      "These lectures are conducted by students intended for fellow students. The topics are fundamental that are commonly challenging or difficult to understand.",
    image: student_lec,
  },
  {
    id: 5,
    title: "Astrophotog workshops",
    date: "March 15 2023",
    location: "LHC, IIT Roorkee",
    details: "An artistic approach to photographing the night sky. You’ll get to learn how to capture fancy images like these and process them, here!",
    image: astro,
  },
  {
    id: 6,
    title: "Stargazing sessions",
    date: "Frequently recurring event",
    location: "Football Ground, IIT Roorkee",
    details:
      "We host stargazing sessions where we observe the night sky through our telescopes. We also provide a brief introduction to the night sky and the constellations visible that night.",
    image: stargazing,
  },
  {
    id: 7,
    title: "Cosmic voyage",
    date: "October 2023",
    location: "LHC, IIT Roorkee",
    details:
      "Our flagship event! It is a week long fest featuring a variety of activities and competitions. Many sub events like guest lectures, astrophotography and telescope handling workshops, movie screenings and the main highlight of the event- Nerdigram are conducted. ",
    image: cosmic_voyage,
  },
];
export { Recent };
