import React from 'react';
import styled from 'styled-components'

import {Link} from 'react-router-dom'
const ListWrapper = styled.div `
    position: fixed;
    top: 0;
   width: 100%;
`
const UL = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content:flex-end;
`
const LI = styled.li `
    
    cursor: pointer;
    color: #ffffff; 
    padding: 10px 20px;
    font-weight: 900;
    font-size: 1.5rem;
    transition: 0.3s ease transform;
    &:hover {
        transform: scale(1.3);
    }
    `


function Nav() {
    return (
        <ListWrapper>
           <UL>
               <LI>Login</LI>
              <Link to='/about'>
                  <LI>About us</LI>
                  </Link>
               <LI>Contact</LI>
        </UL> 
        </ListWrapper>
    )
}

export default Nav
