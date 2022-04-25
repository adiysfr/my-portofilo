import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Floating = styled.div`
  width: 70px;
  height: 70px;
  font-size: 26px;
  font-weight: 700;
  position: fixed;
  right: 20px;
  bottom: 20px;
  backdrop-filter: blur(10.8px);
  color: #3862c1;
  transition: 0.3s;
  border: 4px solid #3862c1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 30px rgb(45 56 112 / 83%);
  z-index: 9;
  &:hover{
    transform: scale(1.05);
  }
`;
const FloatingTop = () => {
  const [isFloating, setIsFloating]= useState(false)
  
  const handleTop = () =>{
    window.scrollTo(0, 0);
  }
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300 ? setIsFloating(true) : setIsFloating(false)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, [])
  
  if(isFloating){
    return (
      <Floating onClick={handleTop}>
        <span>Top</span>
      </Floating>
    )
  } else{
    return null
  }
};

export default FloatingTop;
