import TopNav from '../components/TopNav';
import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ContentPlaceholder from '../components/ContentPlaceholder';

export default function OurServices() {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <TopNav />
      <NavigationBar />
      <Banner title="Our Services" />
      <ContentPlaceholder pageName="Services" />
      <Footer />
    </div>
  );
}
