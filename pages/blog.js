import TopNav from "../components/TopNav";
import NavigationBar from "../components/NavigationBar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ContentPlaceholder from "../components/ContentPlaceholder";
import BlogPostCard from "../components/BlogPostCard";
import { Card, Row, Col } from "react-bootstrap";
import { Pagination } from "antd";

export default function Blog() {
  const posts = [];

  for (let i = 1; i < 7; i++) {
    posts.push(
      <BlogPostCard
        title="Menu"
        subTitle="Awesome Food"
        description="Check out our new menu with the 
            special dessert ,free delivery 
            is now available."
      />
    );
  }

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <button>Previous</button>;
    }
    if (type === "next") {
      return <button>Next</button>;
    }
    return originalElement;
  }

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <TopNav />
      <NavigationBar />
      <Banner title="Blog" />

      {/* Blog Contents Start */}

      <Row
        className="contents-parent"
        style={{ width: "100%", backgroundColor: "", margin: 0 }}
      >
        {posts}
        <Row>
          <Col
            style={{ textAlign: "center", width: "100%", backgroundColor: "" }}
          >
            <Pagination total={30} itemRender={itemRender} />
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 0, offset: 0 }}
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
          >
            <div style={{ backgroundColor: "", height: "70px" }}></div>
          </Col>
        </Row>
      </Row>

      {/* Blog Contents End */}

      <Footer />
    </div>
  );
}
