import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "./Container";

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Navbar />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
