import React, { useState, useEffect } from "react"
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ViewCategory from './components/ViewCategory';
import links from "./utils/urls";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserContext from "./components/UserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(
    () => {
      const options = {
        method: "get",
        headers: {
          "content-type": "application/json",
        }
      }
      fetch(links.localhost, options)
        .then(response => response.json())
        .then(data => console.log(data));

    }
    , [])

  const stateValues =
  {
    isLoggedIn,
    setIsLoggedIn,
    showLogoutModal,
    setShowLogoutModal,
    showErrorModal,
    setShowErrorModal
  }

  return (
    <Router>
      <UserContext.Provider value={stateValues}>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path='/' element={< Home isLoggedIn={isLoggedIn} logoutUser={() => setIsLoggedIn(false)} />}></Route>
          <Route exact path='/viewcategory/:name' element={< ViewCategory />}></Route>
          <Route exact path="/login" element={<Login loginUser={() => setIsLoggedIn(true)} />}></Route>
          <Route exact path="/signup" element={<SignUp loginUser={() => setIsLoggedIn(true)} />}></Route>
        </Routes>
      </UserContext.Provider>

    </Router>
  );
}

export default App;
