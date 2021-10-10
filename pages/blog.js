import TopNav from '../components/TopNav';
import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ContentPlaceholder from '../components/ContentPlaceholder';

export default function Blog() {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <TopNav />
      <NavigationBar />
      <Banner title="Blog" />
      <ContentPlaceholder pageName="Blog" />
      <Footer />
    </div>
  );
}
