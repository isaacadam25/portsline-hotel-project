import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import BlogPost from '../../public/images/mishkaki.jpg';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import { getAllBlogPosts, getSingleBlogPost } from '../api/api';

const SingleBlog = ({post}) => {
  const router = useRouter();

  // console.log(router);

  // const blogId = router.query.blogId;

  return (
    <Layout>
      {/* <Banner title="Blog Post" /> */}
      <Container>
        <Row className="justify-content-center">
          <Col md={10} sm={12} style={{ padding: 16 }}>
            <Image
              src={post.post_image ? post.post_image : BlogPost}
              style={{ width: "100%" }}
              width={1000}
              height={300}
              alt="Post-Image"
            />
          </Col>
          <Col md={10} sm={12}>
            <h2 className="blog-heading">{post.post_title}</h2>
            <p className="blog-description">{post.description}</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await getAllBlogPosts();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { blogId: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const post = await getSingleBlogPost(params.blogId);
  // console.log(params.blogId)

  // Pass post data to the page via props
  return { props: { post } };
}