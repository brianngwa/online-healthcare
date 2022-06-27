import React from "react";
import Buttons from './Buttons'
import Footer from './Footer'


import styled from 'styled-components'
import pic from '../images/pic1.jpg'

const HERO = styled.section`
    padding-left: 20px;
    color: white;
    height: 100vh; 
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    font-size: 5rem;
    letter-spacing: 0.1rem;
    background-image: url(${pic});
    background-position: center;
    background-size: cover;
`
const CONTENT = styled.div `
    max-width: 28vw;
    `

function Welcome({userPresent}) {
  return (<HERO>
      <CONTENT>Welcome to the online healthcare management system
     <Buttons user = {userPresent}/>
      </CONTENT>
     <Footer />
  </HERO>);
}

export default Welcome;
