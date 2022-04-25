import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  width: 100%;
`
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
  flex-wrap: wrap;
  transition: 0.3s;
  align-items: center;
  @media (max-width: 992px) {
    padding: 20px;
  }
`

const Logo = styled.div`
  display: flex;
  position: relative;
  z-index: 5;
`

const MenuWrapp = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`
const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 20px;
  align-self: center;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center; 
  }
`
const MenuItem = styled.li`
  @media (max-width: 991px) {
    width: 100%;
    display: contents;
  }
  a{
    text-decoration: none;
  }
`
const ToggleMenu = styled.div`
  position: relative;
  z-index: 9;
  @media (min-width: 992px) {
    display: none;
  }
  `
const MobileMenu = styled.div`
  width: 100%;
  position: absolute;
  background: rgb(56 98 193 / 65%);
  transition: 0.5s;
  top: 103px;
  backdrop-filter: blur(10.8px);
  padding: 30px 0;
  @media (min-width: 992px) {
    display: none;
  }
  ${({ isToggle }) => isToggle ? `
    left: 0;
    height: 100vh;
  ` : `
    left: -100%;
    height: 0;
  `}
`
const LinkRedirect = styled(Link)`
  text-decoration: none;
  color: #3862c1;
  border: 1px solid #3862c1;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  @media (max-width: 992px) {
    display: inline-block;
    color: #ffffff;
    border: 1px solid #ffffff; 
    width: 80%;
  }
`

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');
  const [isToggle, setIsToggle] = useState("");

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setStickyClass('stickyActive') : setStickyClass('');
    }
  };
  return (
    <NavbarWrapper>
      <NavbarContainer className={`${stickyClass}`}>
        <Logo><h3><Link style={styleLogo} to="/">Adi Yusuf Ramadhan</Link></h3></Logo>
        <MenuWrapp>
          <Menu>
            <MenuItem><LinkRedirect to="/">Home</LinkRedirect></MenuItem>
            <MenuItem><LinkRedirect to="/contact">Contact</LinkRedirect></MenuItem>
            <MenuItem><LinkRedirect to="/project">Project</LinkRedirect></MenuItem>
          </Menu>
        </MenuWrapp>
        <ToggleMenu>
          <button onClick={()=> setIsToggle(!isToggle)} className={`hamburger ${isToggle ? 'active' : ''}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          {/* <button >Tgl</button> */}
        </ToggleMenu>
      </NavbarContainer>
      <MobileMenu isToggle={isToggle} className={isToggle ? "activeMobile" : null}>
        <Menu>
          <MenuItem><LinkRedirect to="/">Home</LinkRedirect></MenuItem>
          <MenuItem><LinkRedirect to="/contact">Contact</LinkRedirect></MenuItem>
          <MenuItem><LinkRedirect to="/project">Project</LinkRedirect></MenuItem>
        </Menu>
      </MobileMenu>
    </NavbarWrapper>
  )
}

export default Navbar

const styleLogo = {
  color: "#3862c1",
  textDecoration: "none"
}