
import Topbar from "./compopnets/topbar/Topbar";
import Register from "../src/pages/register/Register";
import Login from "../src/pages/login/Login";
import Settings from "../src/pages/settings/Settings";
import Single from "../src/pages/single/Single";
import Write from "../src/pages/write/Write";
import Home from "../src/pages/home/Home";

import React, { useContext } from 'react';
import { Context } from './context/Context';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const { user } = useContext(Context);
 
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/posts" element={<Home />} />
      <Route path="/register" element={user ? <Home/> :<Register />} />
      <Route path="/login" element={user ? <Home/> :<Login />} />
      <Route path="/settings" element={user ? <Settings/> :<Login />} />
      <Route path="/single" element={<Single />} />
      <Route path="/write" element={user ? <Write/> :<Login />} />
      <Route path="/Post/:postId" element={<Single />} />
      </Routes>

    </Router>
  )
}

export default App;
