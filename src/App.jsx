import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import "./App.css";


import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import GalleryPage from './pages/GalleryPage/GalleryPage';
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
// ANY component that is rendered by a route, should be stored in the 
// pages folder. Every page is like an app component
import userService from "./utils/userService";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  // the userService.getUser() when the page loads it goes into localstorage and looks for a jwt
  // token, decodes and sets it in state
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    // we call this function after userService.login(), or userService.signup()
    // in order to get the token sent back from express and store the decoded token in the state
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout()
    setUser(null)
  

  useEffect (() => {

  },[user])
  }
  return (
    <Routes>
      <Route path='/discover' element={<DiscoverPage loggedUser={user} handleLogout={handleLogout}/>} />
      <Route path='/gallery' element={<GalleryPage loggedUser={user} handleLogout={handleLogout}/>} />
      <Route path="/" element={<HomePage loggedUser={user} handleLogout={handleLogout}/>} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} loggedUser={user}/>} />
      <Route path='/signup' element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} loggedUser={user}/>} />
 
    </Routes>
  );
}

export default App;
