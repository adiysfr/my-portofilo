import React, { useEffect,useState } from "react";
import GetInTouch from "../../components/GetInTouch";
import SectionBanner from "../../components/SectionBanner";
import MainLayout from "../../layouts/MainLayout";
import imgBaner1 from "../../assets/images/contact.svg";
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0)
    setData({
      titleBaner :"Get In Touch",
      descriptionBaner: "You can contact me at the information below.",
      imgBaner: imgBaner1
    })
  }, [])
  return (
    <MainLayout>
      <Fade left>
        <SectionBanner
          titleBaner={data.titleBaner} 
          descriptionBaner={data.descriptionBaner}
          imgBaner={data.imgBaner}/>
      </Fade>
      // <Fade bottom>
      //   <GetInTouch/>
      // </Fade>
    </MainLayout>
  );
};

export default Contact;
