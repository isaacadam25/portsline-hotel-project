import FeaturedRooms from '../components/FeaturedRooms';
import NavigationBar from '../components/NavigationBar';
import Services from '../components/Services';
import ShowCase from '../components/ShowCase';
import Testimonial from '../components/Testimonial';
import TopNav from '../components/TopNav';
import WelcomeNote from '../components/WelcomeNote';
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
