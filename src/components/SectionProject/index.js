import React, { useState,useEffect } from 'react';
import styled from 'styled-components';

import qasirIcon from "../../assets/images/qasir.svg" 
import sangforIcon from "../../assets/images/sangfor.png" 
import nuproIcon from "../../assets/images/nupro.png" 
import nutriIcon from "../../assets/images/nutri.png" 

const ServicesWrapper = styled.div`
  padding: 60px 0;
  overflow: hidden;
  @media (max-width: 991px) {
   padding: 40px 20px;
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
  box-shadow: 2px 0px 14px rgb(1 41 112 / 23%);
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
  div{
    display: flex;
    height: 90px;
  }
  @media (max-width: 991px) {
    width: 20%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  h1{
    font-size: 20px;
    height: 55px;
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
    width: 100%;
    align-self: center;
    height: 70px;
  }
`

const SectionProject = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems([
      {
        id: 1,
        name:"Qasir Profile Company",
        img: qasirIcon
      },
      {
        id: 2,
        name:"Qasir Web App",
        img: qasirIcon
      },
      {
        id: 3,
        name:"Nutricia Professional",
        img: nuproIcon
      },
      {
        id: 4,
        name:"Nutriclub",
        img: nutriIcon
      },
      {
        id: 5,
        name:"Sangfor",
        img: sangforIcon
      }
    ])
  }, [])
  
  return (
    <ServicesWrapper>
      <ServicesTitle>
        <h1>My Projects</h1>
        <h3>Here are some projects I've worked on</h3>
      </ServicesTitle>
      <ServicesContainer>
        <ServicesRow>
          {items.map(item => 
            <ServicesBox key={item.id}>
              <div>
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

export default SectionProject