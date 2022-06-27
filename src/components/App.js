import React, {useState, useEffect } from 'react'

// COMPONENTS
// import Nav from './Nav'
import Welcome from './Welcome'
import About from './About'

import { auth } from '../firebase'


import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


// STYLED COMPONENTS
import styled from 'styled-components'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
  
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: 700,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const MainWrapper = styled.section `
    margin: 0;
    padding: 0;
`

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  // const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false); 
  const [openSignIn, setOpenSignIn] = useState(false)
  const [username, setUsername] = React.useState('');  
  const [password, setPassword] = React.useState('');  
  const [email, setEmail] = React.useState('');  
  const [user, setUser] = useState(null);

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if (authUser) {
        //user has logged in ..
        console.log(authUser);
        setUser(authUser);
      } else {
        // ser has logged out ...
        setUser(null);
      } 
    })

    return () => {
      // perform some cleanup actions
      unsubscribe();
    }

  }, [user, username])

  const signUp = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=> {
      return authUser.user.updateProfile({
        displayName: username,
      })
    })
    .catch((error) => alert(error.message));

    setOpen(false);
}

const signIn = (event) => {
 event.preventDefault();

 auth
 .signInWithEmailAndPassword(email, password)
 .catch((error) => {
   alert(error.message)})

 setOpenSignIn(false);
//  alert("Login Successful!")
}




  return (
  // <Router>
    <MainWrapper>
       <Modal
        open={open}
        onClose={() => setOpen(false)} >
         <div style={modalStyle} className={classes.paper}>
          <form className = "app__signup">
         <center>
           <h1>Online Healthcare management</h1>
            {/* <img 
            className= "app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
            alt="" /> */}
         </center>
      <Input
              style ={{width:'100%'}}
              placeholder = "username"
              type = "text"
              value = {username}
              onChange = {(e) => setUsername(e.target.value)}
      />
      <Input
              style ={{width:'100%'}}
              placeholder = "email"
              type = "text"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
      />
       <Input
              style ={{width:'100%'}}
              placeholder = "password"
              type = "password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
      />
      <Button type="submit" onClick = {signUp}>Sign Up</Button>
      </form>
        
    </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)} >
         <div style={modalStyle} className={classes.paper}>
          <form className = "app__signup">
         <center>
           <h1>Online Healthcare management</h1>
            {/* <img 
            className= "app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
            alt=""/> */}
         </center>
      
      <Input
              style ={{width:'100%'}}
              placeholder = "email"
              type = "text"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
      />
       <Input
              style ={{width:'100%'}}
              placeholder = "password"
              type = "password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
      />
      <Button type="submit" onClick = {signIn}>Sign In</Button>
      </form>
        
    </div>
      </Modal>
      {user ? (
      <Button onClick = {() =>auth.signOut()}>Log Out</Button>
      ): ( 
        <div className="app__loginContainer">
         < Button onClick = {() => setOpenSignIn(true)}>Sign In </Button>
         < Button onClick = {() => setOpen(true)}>Sign Up </Button>
        </div>
      )}


     {/* <Nav /> */}
     <Welcome userPresent = {user} />
     <About />

   </MainWrapper>
  //  </Router> 
  );
}

export default App;
