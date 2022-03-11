import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
// import Signin from './container/Post'
import Profile from "./container/Profile";
import Post from "./container/Post";
import Login from "./container/Login";

function App() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Post />;
  }

  return (
    <>
    {/* <h1></h1> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
