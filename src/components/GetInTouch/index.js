import React from "react";
import styled from "styled-components";
import contactBg from "../../assets/images/contact-bg.jpg"
import ContactsIcon from '@mui/icons-material/Contacts';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PublicIcon from '@mui/icons-material/Public';

const GetInTouchWrapper = styled.div`
  background: linear-gradient(to right,rgb(44 44 44 / 10%),rgb(49 59 81)),url(${contactBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 513px;
  overflow: hidden;
`
const Container = styled.div`
  max-width: 1320px;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 40px;
  @media (max-width: 1399px) {
    max-width: 100%;
  }
`
const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`
const ContactItem = styled.div`
  box-shadow: 0px 0 30px rgb(1 41 112 / 8%);
  padding: 20px;
  text-align: center;
  transition: 0.3s;
  border-radius: 8px;
  width: 24%;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  background: rgb(255 255 255 / 14%);
  backdrop-filter: blur(5px);
  color: #fff;
  @media (max-width: 991px) {
    width: 20%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  &:hover{
    color: #7affb0;
    background: rgb(12 76 255 / 14%);
    transform: scale(0.98);
  }
`
const GetInTouch = () => {
  return (
    <GetInTouchWrapper>
      <Container>
        <Contact>
          <ContactItem>
            <ContactsIcon/>
            <div>
              <h2>Address</h2>
              <h3>Bekasi, Indonesia</h3>
            </div>
          </ContactItem>
          <ContactItem>
            <ContactMailIcon/>
            <div>
              <h2>Email</h2>
              <h3>adiyusuframadhan@gmail.com</h3>
            </div>
          </ContactItem>
        </Contact>
      </Container>
    </GetInTouchWrapper>
  );
};

export default GetInTouch;
