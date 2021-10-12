import FeaturedRooms from '../components/FeaturedRooms';
import Services from '../components/Services';
import ShowCase from '../components/ShowCase';
import Testimonial from '../components/Testimonial';
import WelcomeNote from '../components/WelcomeNote';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <ShowCase />
      <WelcomeNote />
      <FeaturedRooms />
      <Testimonial />
      <Services />
    </Layout>
  );
}
