import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  transition: 0.3s;
`
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
`

const Logo = styled.h3`
  display: flex;
`
const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 20px;
  align-self: center;
`
const MenuItem = styled.li`
  a{
    text-decoration: none;
  }
`

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(windowHeight)
      windowHeight > 80 ? setStickyClass('stickyActive') : setStickyClass('');
    }
  };
  return (
    <NavbarWrapper className={`${stickyClass}`}>
      <NavbarContainer>
        <Logo><Link style={styleLogo} to="/">Adi Yusuf Ramadhan</Link></Logo>
        <Menu>
          <MenuItem><Link style={styleButton} to="/">Home</Link></MenuItem>
          {/* <MenuItem><Link style={styleButton} to="/about">About</Link></MenuItem> */}
          <MenuItem><Link style={styleButton} to="/contact">Contact</Link></MenuItem>
          <MenuItem><Link style={styleButton} to="/project">Project</Link></MenuItem>
        </Menu>
      </NavbarContainer>
    </NavbarWrapper>
  )
}

export default Navbar

const styleLogo = {
  color: "#3862c1",
  textDecoration: "none"
}
  const styleButton = {
  textDecoration: "none",
  color: "#3862c1",
  border: "1px solid #3862c1",
  padding: "10px 20px",
  borderRadius: "4px",
}