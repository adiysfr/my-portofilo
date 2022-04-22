import React, {Component} from 'react';
import MainLayout from "../../layouts/MainLayout"
import SectionAbout from '../../components/SectionAbout';
import SectionBanner from '../../components/SectionBanner';
import SectionServices from '../../components/SectionServices';
import Fade from 'react-reveal/Fade';

	
class Home extends Component {
  render() {
    return (
      <MainLayout>
        <Fade top>
          <SectionBanner/>
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
}

export default Home;