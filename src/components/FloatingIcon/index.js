import React from 'react'
import styled from 'styled-components'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWrapper = styled.div`
    background: rgba(0,0,0,0.5);
    color: rgba(255,255,255,0.7);
    position: fixed;
    top: 43%;
    right: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    display: inline-block;
    z-index: 1;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transition: all 1s ease;
    cursor: pointer;
    &:hover{
      width: 260px;
      background: rgba(25, 245, 43, 0.582);
    }
`
const TextContact = styled.a`
  text-decoration: none;
  color: unset;
  span{
    color: #3862c1;
    font-size: 20px;
  }
`

const FloatingIcon = () => {
  return (
    <FloatingWrapper>
      <TextContact target="_blank" href="https://api.whatsapp.com/send?phone=6289525871648&text=Hai%20Adi%20">
        <WhatsAppIcon style={{position: "relative",top: "7px",left: "20px",paddingRight: "25px"}} /> <span>Click for contact me !</span>
      </TextContact>
    </FloatingWrapper>
  )
}

export default FloatingIcon