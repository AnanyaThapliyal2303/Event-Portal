import React, { useState } from "react";
import "./css/header.css";
import Searchbar from "./Searchbar";

function search_bar() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
  
    if(document.getElementById("conversation")!=null)
    {
    let x = document.getElementsByClassName("conversation");
  
  
    for (var i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
      }
    }
  }
  }

function Header() {
    
    return (
        <div className="header-grid" id="header-grid">
          <div className="heading">
             <p>
             MIT<br></br>Event<br></br>Portal
             </p>
          </div>
          <div style={{ width: "10vw" }}>
            <Searchbar />
          </div>
         
        </div>
    );
  }
  
  export default Header;