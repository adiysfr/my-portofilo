import React, {Component} from 'react';
import MainLayout from "../../layouts/MainLayout"
import SectionAbout from '../../components/SectionAbout';
import SectionBanner from '../../components/SectionBanner';
import SectionServices from '../../components/SectionServices';
	
class Home extends Component {
  render() {
    return (
      <MainLayout>
        <SectionBanner/>
        <SectionAbout/>
        <SectionServices />
      </MainLayout>
    );
  }
}

export default Home;