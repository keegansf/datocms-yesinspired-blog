import React from "react";
import { Link } from "gatsby";
import "../styles/footer-styles.scss"

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-instagram">IG</div>
    <div className="footer-socials">Socials</div>
    <div className="footer-links">Links</div>
    <div className="footer-banner">
      <span className="footer-banner-link">
        YESInspired © {new Date().getFullYear()}
      </span>
      <Link className="footer-banner-link hide">Get in Touch</Link>
      <Link className="footer-banner-link">Legal</Link>
      <span className="footer-banner-link hide">Built with love</span>
      <span className="footer-banner-link">All Rights Reserved</span>
    </div>
    </footer>
  )
}
