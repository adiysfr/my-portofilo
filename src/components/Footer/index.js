import React from 'react'
import styled from "styled-components"

const WrappFooter = styled.footer`
    left: 0px;
    bottom: 0px;
    width: 100%;
    background: #2f2e41;
    color: white;
    display: flex;
    justify-content: center;
`
const Footer = () => {
  return (
    <WrappFooter>
        <h3>Adi Yusuf Ramadhan | 2022</h3>
    </WrappFooter>
  )
}

export default Footer