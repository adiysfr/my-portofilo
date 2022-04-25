import React, {useState, useEffect} from 'react';
import MainLayout from "../../layouts/MainLayout"
import SectionAbout from '../../components/SectionAbout';
import SectionBanner from '../../components/SectionBanner';
import SectionServices from '../../components/SectionServices';
import imgBaner3 from "../../assets/images/image3.svg";
import Fade from 'react-reveal/Fade';

	
const Home = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0)
    setData({
      titleBaner :"Hello",
      descriptionBaner: "Welcome to my website",
      imgBaner: imgBaner3
    })
  }, [])
  
  return (
    <MainLayout>
      <Fade bottom>
        <SectionBanner 
          titleBaner={data.titleBaner} 
          descriptionBaner={data.descriptionBaner}
          imgBaner={data.imgBaner}/>
      </Fade>
      <Fade right>
        <SectionAbout/>
      </Fade>
      <Fade left>
        <SectionServices />
      </Fade>
    </MainLayout>
  );
}

export default Home;