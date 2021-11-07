import Layout from "../components/Layout";
import ShowCase from "../components/ShowCase";
import WelcomeNote from "../components/WelcomeNote";
import FeaturedRooms from "../components/FeaturedRooms";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import SpaceDiv from "../components/SpaceDiv";
import { getAllRoomTypes, getAllTestimonials } from "./api/api";

export default function Home({ testimonials, room_types }) {
  // console.log("props => ", testimonials);
  // console.log("Room-Types => ", room_types);
  // const { testimonials, room_types } = props;
  return (
    <Layout title="Home">
      <ShowCase />
      <WelcomeNote />
      <FeaturedRooms room_types={room_types} />
      <Services />
      <Testimonial testimonials={testimonials} />
      <SpaceDiv />
    </Layout>
  );
}

export async function getStaticProps() {
  let testimonials = [];
  let room_types = ["one1", "two1", "three1"];
  // let room_types = [];
  try {
    testimonials = await getAllTestimonials();
    // room_types = await getAllRoomTypes();
  } catch (error) {
    console.log({ "Error => ": error });
  }

  return {
    props: {
      testimonials: testimonials,
      room_types: room_types,
    },
  };
}
