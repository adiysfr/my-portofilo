import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import htmlImgIcon from "../../assets/images/htmlss.svg" 
import cssImgIcon from "../../assets/images/css.png" 
import reactJsImgIcon from "../../assets/images/react.png" 
import javascriptIcon from "../../assets/images/javascript.png" 
import apiImageIcon from "../../assets/images/api.png" 
import responsiveImageIcon from "../../assets/images/responsive.png" 
import gitImageIcon from "../../assets/images/git.png" 
import styledcomponents from "../../assets/images/styledcomponents.png" 
import sassIcon from "../../assets/images/sass.png" 
import axiosLogo from "../../assets/images/axios.png" 

const ServicesWrapper = styled.div`
  padding: 60px 0;
  overflow: hidden;
  @media (max-width: 991px) {
   padding: 40px 0;
  }
`
const ServicesTitle = styled.div`
  text-align: center;
  h1{
    color: #3862c1;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  h3{
    color: #343434;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`
const ServicesContainer = styled.div`
  max-width: 1320px;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 40px;
  @media (max-width: 1399px) {
    max-width: 100%;
  }
`
const ServicesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`
const ServicesBox = styled.div`
  box-shadow: 0px 0 30px rgb(1 41 112 / 8%);
  height: 100%;
  padding: 20px;
  text-align: center;
  transition: 0.3s;
  border-radius: 8px;
  width: 20%;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  @media (max-width: 991px) {
    width: 20%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  h1{
    font-size: 20px;
  }
  h1, p{
    color: #606060;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  &:hover{
    border-bottom: 3px solid #2db6fa;
  }
  img{
    height: 70px;
  }
`

const SectionServices = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems([
      {
        id: 1,
        name:"Html 5",
        img: htmlImgIcon
      },
      {
        id: 2,
        name:"Css 3",
        img: cssImgIcon
      },
      {
        id: 3,
        name:"Javascript",
        img: javascriptIcon
      },
      {
        id: 4,
        name:"React Js",
        img: reactJsImgIcon
      },
      {
        id: 5,
        name:"Styled Components",
        img: styledcomponents
      },
      {
        id: 6,
        name:"Integration Rest Api",
        img: apiImageIcon
      },
      {
        id: 7,
        name:"Responsive Web Ui",
        img: responsiveImageIcon
      },
      {
        id: 8,
        name:"Git Flow",
        img: gitImageIcon
      },
      {
        id: 9,
        name:"Sass/Scss",
        img: sassIcon
      },
      {
        id: 10,
        name:"Axios",
        img: axiosLogo
      },
    ])
  }, [])
  
  return (
    <ServicesWrapper>
      <ServicesTitle>
        <h1>My Stack</h1>
        <h3>what is my stack?</h3>
      </ServicesTitle>
      <ServicesContainer>
        <ServicesRow>
          {items.map(item => 
            <ServicesBox key={item.id}>
              <div style={{height: "90px"}}>
                <img src={item.img} alt={item.name}/>
              </div>
              <h1>{item.name}</h1>
            </ServicesBox> 
          )}
        </ServicesRow>
      </ServicesContainer>
    </ServicesWrapper>
  )
}

export default SectionServices