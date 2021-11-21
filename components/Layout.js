import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import TopNav from './TopNav';
import Footer from './Footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Portsline Hotel and SPA | {title ? title : 'Home'}</title>
      </Head>
      <Container className="p-0" fluid>
        <TopNav />
        <NavigationBar />

        <main>{children}</main>

        <footer>
          <section>
            <Footer />
          </section>
        </footer>
      </Container>
    </>
  );
};

export default Layout;
