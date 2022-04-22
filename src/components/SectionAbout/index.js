import React from 'react';
import styled from 'styled-components';
import adi from "../../assets/images/adi.jpg"

const SectionAboutWrapper = styled.section`
  padding: 60px 0;
  overflow: hidden;
  @media (max-width: 991px) {
   padding: 40px 0;
  }
`
const SectionAboutContainer = styled.div`
  max-width: 1320px;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 40px;
  @media (max-width: 1399px) {
    max-width: 100%;
  }
`
const SectionAboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const AboutLeft = styled.div`
  width: 40%;
  align-self: center;
  background-color: #f6f9ff;
  padding: 40px 20px 40px 40px;
  border-radius: 10px;
  @media (max-width: 991px) {
    width: 100%;
  }
  h3{
    color: #3862c1;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  h1,p{
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #343434;
  }
  p{
    font-size: 16px;
  }
`
const AboutRight = styled.div`
  width: 40%;
  align-self: center;
  overflow: hidden;
  border-radius: 10px;
  @media (max-width: 991px) {
    width: 100%;
  }
  img{
    max-width: 100%;
    height: auto;
    transition: 0.3s;
    &:hover{
      transform: scale(1.05);
    }
  }
`

const SectionAbout = () => {
  return (
    <SectionAboutWrapper>
      <SectionAboutContainer>
        <SectionAboutRow>
          <AboutLeft>
            <h3>About Me</h3>
            <h1>Hello, That's me!</h1>
            <p>Hello, My name is Adi Yusuf Ramadan. I was born in Jakarta, February 16, 1996. I like to design the web. I am a intermediate in the frontend development. I am a partial color blind.</p>
          </AboutLeft>
          <AboutRight>
            <img src={adi} alt="adi"/>
          </AboutRight>
        </SectionAboutRow>
      </SectionAboutContainer>
    </SectionAboutWrapper>
  )
}

export default SectionAbout