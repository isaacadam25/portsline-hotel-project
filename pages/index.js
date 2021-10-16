import Layout from '../components/Layout';
import ShowCase from '../components/ShowCase';
import WelcomeNote from '../components/WelcomeNote';
import FeaturedRooms from '../components/FeaturedRooms';
import Testimonial from '../components/Testimonial';
import Services from '../components/Services';
import InputWithIcon from '../components/InputWithIcon';
import SpaceDiv from '../components/SpaceDiv';

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
