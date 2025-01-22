import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import appStore from "../../img/apple-store.svg"
import playStore from "../../img/play-store.svg"
import DeskApp from "../../img/in-microsoft.png"
import twitter from "../../img/twiter.svg"
import youtube from "../../img/youtube.svg"
import instagram from "../../img/instagram.svg"
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row classname="row">
          <Col md={3}>
            <div className="footer-section">
              <h6>SELECT EDITION</h6>
              <div className="edition-select">
                <span className="global-icon">🌐</span> Global
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <h6>PRODUCT HELP & RESOURCES</h6>
              <ul className="footer-links">
                <li><a href="#">About AutoFore Books</a></li>
                <li><a href="#">All Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Accountant Program</a></li>
                <li><a href="#">Register as a Partner</a></li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <h6>HELPFUL RESOURCES</h6>
              <ul className="footer-links">
                <li><a href="#">Help Documentation</a></li>
                <li><a href="#">Developers API</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Product Videos</a></li>
                <li><a href="#">Webinars</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Forums</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Find an Accountant</a></li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <h6>LEARNING HUB</h6>
              <ul className="footer-links">
                <li><a href="#">Essential Business Guides</a></li>
                <li><a href="#">Accounting Dictionary</a></li>
                <li><a href="#">What is Accounting Software?</a></li>
              </ul>
              <h6>FREE TOOLS</h6>
              <ul className="footer-links">
                <li><a href="#">Invoice Generator</a></li>
                <li><a href="#">Quote Generator</a></li>
                <li><a href="#">Other Free Tools</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row classname="row">
          <Col md={3}>
            <div className="footer-section">
              <h6>CONTACT US ON</h6>
              <p>Mon - Fri (24/5)</p>
              <p>US - +18443165544</p>
              <p>UK - +44 8000856099</p>
              <p>Australia - +611800911076</p>
              <h6>Mail Us</h6>
              <p><a href="mailto:support@auteforebooks.com">support@autoforebooks.com</a></p>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <h6>AVAILABLE ON</h6>
              <div className="app-links">
                  {/* Replace with actual image tags or links */}
                <span className="app-icon">
                    <img src={appStore} alt=''/>
                </span>
                <span className="app-icon">
                    <img src={playStore} alt=''/>
                </span>
              </div>
              <h6>AVAILABLE ON DESKTOP APP</h6>
              <div className="app-links">
                <span className="app-icon">
                    <img className='desktop-icon' src={DeskApp} alt=''/>
                </span>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section featured-app">
              <h6>FEATURED APP</h6>
              <div>
                {/* Replace with actual component or image */}
                <p>AutoFore Commerce</p>
                <a href="#">LEARN MORE</a>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-section">
              <h6>CONNECT WITH US</h6>
              <div className="social-icons">
                {/* Replace with actual icon components or images */}
                <span>
                <img className='svg' src={twitter} alt=''/>
                </span>
                <span>
                <img className='svg' src={instagram} alt=''/>
                </span>
                <span>
                <img className='svg' src={youtube} alt=''/>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;