import React, { useState } from 'react';
import styled from 'styled-components';
// import browserIcon from "../../assets/images/browser.png"
import htmlImgIcon from "../../assets/images/htmlss.svg" 
import cssImgIcon from "../../assets/images/css.png" 
import reactJsImgIcon from "../../assets/images/react.png" 

const ServicesWrapper = styled.div`
  padding: 60px 0;
  overflow: hidden;
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
  width: 10%;
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
  const [items, setItems] = useState([
    {
      id: 1,
      name:"Html 5",
      desc:"description test",
      img: htmlImgIcon
    },
    {
      id: 2,
      name:"Css 3",
      desc:"description test",
      img: cssImgIcon
    },
    {
      id: 3,
      name:"React Js",
      desc:"description test",
      img: reactJsImgIcon
    },
    {
      id: 4,
      name:"test4",
      desc:"description test",
      img: reactJsImgIcon
    },
    {
      id: 5,
      name:"test5",
      desc:"description test",
      img: reactJsImgIcon
    },
    {
      id: 6,
      name:"test6",
      desc:"description test",
      img: reactJsImgIcon
    },
  ])
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
              <p>{item.desc}</p>
            </ServicesBox>  
          )}
        </ServicesRow>
      </ServicesContainer>
    </ServicesWrapper>
  )
}

export default SectionServices