import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <title>PeriodicElements</title>
        <meta name="description" content="PeriodicElements" />
        <link ritem="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
