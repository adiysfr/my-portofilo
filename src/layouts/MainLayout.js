import React from "react";
import FloatingIcon from "../components/FloatingIcon";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <FloatingIcon />
      <Navbar />
        {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
