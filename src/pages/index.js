import React from "react";
import Header from "../components/header";
import colorLogo from "../images/main-logo-color.svg"
import whiteLogo from "../images/main-logo-white.svg"
import colorHamburger from "../images/hamburger-menu-color.svg"
import whiteHamburger from "../images/hamburger-menu-white.svg"


export default function Index() {
  

  return (
    <div>
      <Header navigationColor="white-navigation" 
      mobileLogoColor={whiteLogo} 
      logoColor={whiteLogo} 
      hamburgerColor={whiteHamburger}/>
     <h1>Hello World</h1>
    </div>
  );
}

