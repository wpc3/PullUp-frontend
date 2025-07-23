import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Component/HomePage/Home";
import Login from "./Component/LoginPage/LoginSignup";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/home" Component={<Home/ >}/>
        <Route path="/login" element={<Login/ >}/>
      </Routes>
    </Router>
  );
}

export default App;
