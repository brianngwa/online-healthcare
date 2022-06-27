import React from 'react'
import styled from 'styled-components'

const FOOTER = styled.div `
display: fixed; 
bottom: 0;
  font-weight: 500;
  color: #3c84a0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 20vh; */
  `

function Footer() {
    return (
        <FOOTER>
          Online healthcare management system 2021. All rights reserved.  
        </FOOTER>
    )
}

export default Footer
