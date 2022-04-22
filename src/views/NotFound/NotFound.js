import React from 'react'
import MainLayout from "../../layouts/MainLayout"
import styled from "styled-components"
import notfoundimg from "../../assets/images/notfound.svg"

const NotFoundWrapp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  img{
    max-width: 50%;
  }
`

const NotFound = () => {
  return (
    <MainLayout>
      <NotFoundWrapp>
        <img src={notfoundimg} alt="not found"/>
      </NotFoundWrapp>
    </MainLayout>
  )
}

export default NotFound