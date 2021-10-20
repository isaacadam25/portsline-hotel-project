import Layout from '../components/Layout';
import ShowCase from '../components/ShowCase';
import WelcomeNote from '../components/WelcomeNote';
import FeaturedRooms from '../components/FeaturedRooms';
import Testimonial from '../components/Testimonial';
import Services from '../components/Services';
<<<<<<< HEAD
=======
import InputWithIcon from '../components/InputWithIcon';
import SpaceDiv from '../components/SpaceDiv';
>>>>>>> 2f0fb797d8dc9f5364f2ac4de8d5d502f71df3f8

export default function Home() {
  return (
    <Layout title="Home">
      <ShowCase />
      <WelcomeNote />
      <FeaturedRooms />
      <Services />
      <Testimonial />
      <SpaceDiv />
    </Layout>
  );
}
