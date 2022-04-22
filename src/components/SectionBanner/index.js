import React from "react";
import styled from 'styled-components';
import herobanner from "../../assets/images/hero-bg.png";
import imgBaner3 from "../../assets/images/image3.svg";


const HomeWrapper = styled.section`
	padding: 40px;
  height: 100vh;
  background: url(${herobanner}) top center no-repeat;
  background-size: cover;
	@media (max-width: 991px) {
    padding: 90px 40px 40px;
    height: auto;
	}
` 
const Container = styled.div`
  max-width: 1320px;
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
    }
    h2{
      color: #3862c1;
      font-size: 30px;
      margin-top: 0;
      margin-bottom: 0.5rem;
      white-space: nowrap;
      overflow: hidden;   
      animation: animated-text 3s steps(26,end) 0.2s 1 normal both, blink-caret .5s step-end infinite;
    }
		@media (max-width: 991px) {
      width: 100%;
		}
		img{
      width: 100%;
		}
	}
  /* text animation */
  @keyframes animated-text{
    from{width: 0;}
    to{width: 472px;}
  }

  /* cursor animations */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
  }
`

const SectionBanner = () => {
  return (
    <HomeWrapper>
      <Container>
        <div>
          <h1>Hello,</h1>
          <h2>Welcome to my personal website</h2>
        </div>
        <div>
          <img src={imgBaner3} alt="img banner" />
        </div>
      </Container>
    </HomeWrapper>
  );
};

export default SectionBanner;
