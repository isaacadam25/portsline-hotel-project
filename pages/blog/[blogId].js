import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import BlogPost from '../../public/images/mishkaki.jpg';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';

const SingleBlog = () => {
  const router = useRouter();

  console.log(router);

  const blogId = router.query.blogId;

  return (
    <Layout>
      <Banner title="Blog Post" />
      <Container>
        <Row className="justify-content-center">
          <Col md={10} sm={12} style={{ padding: 16 }}>
            <Image
              src={BlogPost}
              style={{ width: '100%' }}
              height={400}
              alt="Post-Image"
            />
          </Col>
          <Col md={10} sm={12}>
            <h2 className="blog-heading">Blog Post - {blogId}</h2>
            <p className="blog-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              laborum libero consequuntur porro temporibus id quasi, atque
              corporis iusto ipsum doloribus error at ut rerum molestiae nobis
              laudantium numquam maxime, hic quas. Incidunt nemo voluptatibus
              maiores! Nesciunt possimus veniam debitis illo voluptatibus,
              cumque cum optio tempore fuga neque in facilis soluta voluptas
              exercitationem magnam laborum labore! Nobis, natus itaque
              recusandae voluptatibus saepe repellendus quis dolores assumenda
              possimus quaerat? Eaque assumenda consectetur distinctio ut
              facilis dolorum quas quo expedita odio aspernatur atque asperiores
              natus ex quia molestiae tempore, rem corrupti dolorem ipsum nemo
              officiis. Molestiae, quos. Ducimus, totam quasi sunt numquam rem
              ipsa recusandae ut nihil amet, nostrum, voluptatem rerum vero
              explicabo ipsam asperiores laudantium! Ex incidunt, eligendi eaque
              voluptatum ullam praesentium nemo rem culpa, dolor inventore
              magni! Sequi debitis neque tempora numquam ab id, incidunt
              obcaecati, nisi eaque assumenda vel. Qui repellendus neque et
              libero perspiciatis, praesentium debitis quasi explicabo.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SingleBlog;
