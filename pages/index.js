import FeaturedRooms from '../components/FeaturedRooms';
import Services from '../components/Services';
import ShowCase from '../components/ShowCase';
import Testimonial from '../components/Testimonial';
import WelcomeNote from '../components/WelcomeNote';
import TopNav from '../components/TopNav';
import NavigationBar from '../components/NavigationBar';
import Layout from '../components/Layout';
import { Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      <TopNav />
      <NavigationBar />
      <ShowCase />
      <WelcomeNote />
      <FeaturedRooms />
      <Testimonial />
      <Services />
      <Footer />
    </div>
  );
}
