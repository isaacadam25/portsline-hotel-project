import TopNav from "../components/TopNav";
import NavigationBar from "../components/NavigationBar";
import Banner from "../components/Banner";
// import Services from "../components/Services";
import Footer from "../components/Footer";
import ContentPlaceholder from "../components/ContentPlaceholder";
import BlogPostCard from "../components/BlogPostCard";
import { Card, Row, Col } from "react-bootstrap";
import { Pagination } from "antd";
import SpaceDiv from "../components/SpaceDiv";
import { getAllBlogPosts } from "./api/api";

export default function Blog({ data }) {
  const posts = data;
  // console.log('posts => > > ', data);

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
        style={{
          width: "100%",
          backgroundColor: "",
          margin: 0,
          padding: "0 10%",
        }}
      >
        <Col
          md={{ span: 10, offset: 1 }}
          xs={12}
          sm={12}
          style={{ backgroundColor: "", paddingTop: "5%" }}
        >
          <Row style={{ backgroundColor: "", justifyContent: "center" }}>
            {posts.map((post) => (
              <BlogPostCard
                key={post.id}
                title={post.post_title}
                subTitle="Subtitle"
                description={post.description}
                postImage={post.post_image}
              />
            ))}
          </Row>
        </Col>
        <Row>
          <Col
            style={{ textAlign: "center", width: "100%", backgroundColor: "" }}
          >
            <Pagination total={30} itemRender={itemRender} />
          </Col>
        </Row>
        <SpaceDiv />
      </Row>

      {/* Blog Contents End */}

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  let data = [];
  try {
    data = await getAllBlogPosts();
  } catch (error) {
    console.log({ "Error => ": error });
  }

  return {
    props: {
      data,
    },
  };
}
