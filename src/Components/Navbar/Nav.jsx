import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faQuoteRight, faFileInvoice, faClipboardList, faFileAlt, faShoppingCart, faProjectDiagram, faUniversity, faBoxes, faMoneyBillWave, faFile, faChartBar, faCreditCard, faCalculator, faMobileAlt, faNetworkWired, faUsers, faRobot } from '@fortawesome/free-solid-svg-icons';
import "./Nav.css";
import logo from "../../img/logo.jpeg"; // Adjust the path as necessary

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-list">
        <li>
          Features
          <ul className="dropdown">
            <li>
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: "8px" }} />
              Core Features
            </li>
            <li>
              <FontAwesomeIcon icon={faQuoteRight} style={{ marginRight: "8px" }} />
              Quotes
            </li>
            <li>
              <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: "8px" }} />
              Invoicing
            </li>
            <li>
              <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: "8px" }} />
              Sales orders
            </li>
            <li>
              <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: "8px" }} />
              Bills
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "8px" }} />
              Purchase orders
            </li>
            <li>
              <FontAwesomeIcon icon={faProjectDiagram} style={{ marginRight: "8px" }} />
              Projects
            </li>
            <li>
              <FontAwesomeIcon icon={faUniversity} style={{ marginRight: "8px" }} />
              Banking
            </li>
            <li>
              <FontAwesomeIcon icon={faBoxes} style={{ marginRight: "8px" }} />
              Inventory
            </li>
            <li>
              <FontAwesomeIcon icon={faMoneyBillWave} style={{ marginRight: "8px" }} />
              Expenses
            </li>
            <li>
              <FontAwesomeIcon icon={faFile} style={{ marginRight: "8px" }} />
              Documents
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} style={{ marginRight: "8px" }} />
              Reporting
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "8px" }} />
              Online Payments
            </li>
            <li>
              <FontAwesomeIcon icon={faCalculator} style={{ marginRight: "8px" }} />
              Effortless Accounting
            </li>
            <li>
              <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: "8px" }} />
              Mobile Accounting
            </li>
            <li>
              <FontAwesomeIcon icon={faNetworkWired} style={{ marginRight: "8px" }} />
              AutoFore Ecosystem
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: "8px" }} />
              Collaboration & Portal Management
            </li>
            <li>
              <FontAwesomeIcon icon={faRobot} style={{ marginRight: "8px" }} />
              Smart Automations
            </li>
          </ul>
        </li>
        <li>Pricing</li>
        <li>
          Solution
          <ul className="dropdown">
            <li>
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: "8px" }} />
              By Size
            </li>
            <li>
              <FontAwesomeIcon icon={faQuoteRight} style={{ marginRight: "8px" }} />
              Start Up
            </li>
            <li>
              <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: "8px" }} />
              Small Business
            </li>
            <li>
              <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: "8px" }} />
              Non Profit
            </li>
            <li>
              <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: "8px" }} />
              Accountant
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "8px" }} />
              By Device
            </li>
            <li>
              <FontAwesomeIcon icon={faProjectDiagram} style={{ marginRight: "8px" }} />
              Mobile
            </li>
            <li>
              <FontAwesomeIcon icon={faUniversity} style={{ marginRight: "8px" }} />
              Windows
            </li>
          </ul>
        </li>
        <li>Customers</li>
        <li>Partner with us</li>
        <li>
          Resources
          <ul className="dropdown">
            <li>
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: "8px" }} />
              Help and Support
            </li>
            <li>
              <FontAwesomeIcon icon={faQuoteRight} style={{ marginRight: "8px" }} />
              Help Document
            </li>
            <li>
              <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: "8px" }} />
              FAQ
            </li>
            <li>
              <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: "8px" }} />
              Product Videos
            </li>
            <li>
              <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: "8px" }} />
              Migration Doc
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "8px" }} />
              API Documentation
            </li>
            <li>
              <FontAwesomeIcon icon={faProjectDiagram} style={{ marginRight: "8px" }} />
              Forum
            </li>
            <li>
              <FontAwesomeIcon icon={faUniversity} style={{ marginRight: "8px" }} />
              Product Blogs
            </li>
            <li>
              <FontAwesomeIcon icon={faBoxes} style={{ marginRight: "8px" }} />
              What’s new
            </li>
            <li>
              <FontAwesomeIcon icon={faMoneyBillWave} style={{ marginRight: "8px" }} />
              Upcoming Webinar
            </li>
            <li>
              <FontAwesomeIcon icon={faFile} style={{ marginRight: "8px" }} />
              Request a demo
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} style={{ marginRight: "8px" }} />
              Contact us
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "8px" }} />
              Partners / Accountant
            </li>
            <li>
              <FontAwesomeIcon icon={faCalculator} style={{ marginRight: "8px" }} />
              Mobile Apps
            </li>
            <li>
              <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: "8px" }} />
              Desktop App
            </li>
            <li>
              <FontAwesomeIcon icon={faNetworkWired} style={{ marginRight: "8px" }} />
              See all Resources
            </li>
          </ul>
        </li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
}

export default Nav;