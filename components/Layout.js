import React from 'react';
import Head from 'next/head';
import NavigationBar from './NavigationBar';
import TopNav from './TopNav';
import Footer from './Footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Portsline Hotel and SPA | {title ? title : 'Home'}</title>
      </Head>

      <header>
        <TopNav />
        <NavigationBar />
      </header>

      <main>{children}</main>

      <footer>
        <section>
          <Footer />
        </section>
      </footer>
    </>
  );
};

export default Layout;
