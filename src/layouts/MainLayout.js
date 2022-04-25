import React from "react";
import FloatingIcon from "../components/FloatingIcon";
import FloatingTop from "../components/FloatingTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <FloatingIcon />
      <Navbar />
        {props.children}
      <Footer />
      <FloatingTop/>
    </React.Fragment>
  );
};

export default MainLayout;
