import React from "react";
import styled from 'styled-components';
import herobanner from "../../assets/images/hero-bg.png";

const HomeWrapper = styled.section`
	padding: 40px;
  height: 100vh;
  background: url(${herobanner}) top center no-repeat;
  background-size: cover;
  overflow: hidden;
	@media (max-width: 991px) {
    padding: 90px 20px 40px;
    height: auto;
	}
` 
const Container = styled.div`
  max-width: 1400px;
  display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  div{
    width: 40%;
		padding: 20px;
		color: #fff;
    h1{
      color: #3862c1;
      font-size: 60px;
      margin-top: 0;
      margin-bottom: 0.5rem;
      @media (max-width: 991px) {
        font-size: 30px;
      }
    }
    h2{
      color: #3862c1;
      font-size: 30px;
      margin-top: 0;
      margin-bottom: 0.5rem;
      white-space: nowrap;
      overflow: hidden;   
      animation: animated-text 3s steps(26,end) 0.2s 1 normal both, blink-caret .5s step-end infinite;
      @media (max-width: 991px) {
        font-size: 20px;
        white-space: unset;
      }
    }
		@media (max-width: 991px) {
      width: 100%;
		}
		img{
      width: 100%;
		}
	}
  @media (min-width: 1400px) {
    max-width: 1600px;
  }
  @media (min-width: 992px) {
    /* text animation */
    @keyframes animated-text{
      from{width: 0;}
      to{width: 100%;}
    }

    /* cursor animations */
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: orange }
    }
  }
`

const SectionBanner = ({titleBaner, descriptionBaner, imgBaner}) => {
  return (
    <HomeWrapper>
      <Container>
        <div>
          <h1>{titleBaner}</h1>
          <h2>{descriptionBaner}</h2>
        </div>
        <div>
          <img src={imgBaner} alt="img banner" />
        </div>
      </Container>
    </HomeWrapper>
  );
};

export default SectionBanner;
