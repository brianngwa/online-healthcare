import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'



const BUTTON = styled.button `
    color: white;
    cursor: pointer;
    margin: 10px 50px 0px 0px; 
    border: none;
    background-color: #3c84a0;
    border-radius: 20px;
    padding: 2px;
    min-width: 120px;
    max-width: 100px;
    min-height: 40px;
    max-height: 60px;
    transition: 0.3s ease transform;
    &:hover {
        transform: scale(1.3);
    }
`

const ButtonDiv = styled.div `
  display: flex;
  /* padding: 10px; */
  align-items: center;
  /* justify-content: center; */
  height: 20vh;
  `

  const ButtonStyle = styled.div`
    display: flex;
  `


function Buttons(user) {
    return (
        <ButtonDiv>
            {user.user?
            <ButtonStyle>
           <Link to='/hospitals'>
               <BUTTON type= "button" onClick={()=>console.log(user.user)}>Search Hospital</BUTTON> 
           </Link>
           <Link to ='/doctors'>
              <BUTTON type= "button">Search Doctor</BUTTON> 
              </Link>
              </ButtonStyle>
              :
              <ButtonStyle>
                  <BUTTON type = "button" onClick = {()=> alert("Sorry Login required")}>Search Hospital</BUTTON>
                  <BUTTON type = "button" onClick = {()=> alert("Sorry Login required")}>Search Doctor</BUTTON>
                  </ButtonStyle>}
        </ButtonDiv>
    )
}

export default Buttons
