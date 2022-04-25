import React, { useState, useEffect } from 'react';
import MainLayout from "../../layouts/MainLayout";
import Fade from 'react-reveal/Fade';
import SectionBanner from '../../components/SectionBanner';
import imgBaner2 from "../../assets/images/image2.svg";
import SectionProject from '../../components/SectionProject';

const Project = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0)
    setData({
      titleBaner :"My Project",
      descriptionBaner: "Here are some projects I've worked on",
      imgBaner: imgBaner2
    })
  }, [])
  return (
    <MainLayout>
      <Fade right>
        <SectionBanner
          titleBaner={data.titleBaner} 
          descriptionBaner={data.descriptionBaner}
          imgBaner={data.imgBaner}/>
      </Fade>
      <Fade left>
        <SectionProject />
      </Fade>
    </MainLayout>
  );
}

export default Project;