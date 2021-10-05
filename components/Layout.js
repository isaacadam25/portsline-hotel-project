import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portsline Hotel and SPA | Home</title>
      </Head>
      {/* 
      <header>
        <h1>Header</h1>
      </header> */}

      <main>{children}</main>

      {/* <footer>
        <section>
          <h1>Footer</h1>
        </section>
      </footer> */}
    </>
  );
};

export default Layout;
