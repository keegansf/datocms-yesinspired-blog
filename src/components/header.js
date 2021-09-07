import React from "react";
import { Link } from 'gatsby'
import "../styles/header-styles.scss"


export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      close: true,
    }
  }

  navToggle = () => {
    this.setState({
      close: !this.state.close,
    })
  }

  render() {
    const { close } = this.state
    return (
      <header>
      {/*DESKTOP NAVIGATION*/}
      <nav className={`${this.props.navigationColor} navigation-link-container`}> 
        <Link className="navigation-link">About</Link>
        <Link className="navigation-link">Services</Link>
        <Link className="navigation-link">Gallery</Link>
        <Link className="navigation-link navigation-logo">
          <img src={this.props.logoColor} alt="YESInspired Logo" />
        </Link>
        <Link className="navigation-link">Blog</Link>
        <Link className="navigation-link">Vendors</Link>
        <Link className="navigation-link">Contact</Link>
      </nav>

      {/*MOBILE NAVIGATION*/}
      <nav className="mobile-navigation-container">
      <Link className="mobile-navigation-logo">
          <img src={this.props.mobileLogoColor} alt="YESInspired Logo" />
        </Link>
        <button onClick={() => this.navToggle()}>
        <img src={this.props.hamburgerColor} alt="YESInspired Logo" />
        </button>
      </nav>

      <div className={close ? "closed mobile-navigation-wrapper" : "open mobile-navigation-wrapper"}>
      <div className="mobile-navigation-banner">test</div>
      <div className="mobile-navigation-links">
      <nav className="mobile-navigation-link-container"> 
        <Link className="mobile-navigation-link">About</Link>
        <Link className="mobile-navigation-link">Services</Link>
        <Link className="mobile-navigation-link">Gallery</Link>
        <Link className="mobile-navigation-link">
          <img src="" alt="YESInspired Logo" />
        </Link>
        <Link className="mobile-navigation-link">Blog</Link>
        <Link className="mobile-navigation-link">Vendors</Link>
        <Link className="mobile-navigation-link">Contact</Link>
      </nav>
      </div>
      <button onClick={()=> this.navToggle()} className="close-button">X</button>
      </div>
      </header>
    )
  }
  
}
