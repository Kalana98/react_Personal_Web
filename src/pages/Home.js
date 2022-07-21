import React from "react";
import TopicBox from "../components/TopicBox";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './home.css'

export default function () {
  return (
    <div>
      <Navbar />
      <br></br>
      <center>
        
        <h1>Home</h1>
        
      </center>
      <br></br>
      <Footer />
    </div>
  );
}
