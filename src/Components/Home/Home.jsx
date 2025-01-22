import React from "react";
import "./Home.css"; // Import the CSS file for styling
import logo from "../../img/new-year.png";
import bmg from "../../img/usd-db.webp";
import img from "../../img/sarah-paquette.webp";
import quote from "../../img/double-quotes.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className="home-container">
            <img src={logo} alt="Logo" className="home-logo" />
            <p className="home-content">Comprehensive accounting software for growing businesses</p>
            <p className="home-content-1">Manage your end-to-end accounting - right from invoicing to inventory & expenses with our cloud accounting software.</p>
            <div className="home-buttons">
                <button className="btn btn-primary">Start free trial</button>
                <button className="btn btn-secondary">Request a demo</button>
            </div>
            <img src={bmg} alt="Logo" className="home-bmg" />

            <div className="card">
                <div className="card-header">
                    <h2>Trusted by businesses and accountants worldwide</h2>
                </div>
                <div className="card-body">
                <img src={quote} alt="Logo" className="home-q" />
                    <p className="quote">
                        "I don't think you can find anything that beats the price line, the user-friendliness, the formats, and the way it connects to all of AutoFore's other products. I highly recommend AutoFore Books."
                    </p>
                    <div className="person-info">
                    <img src={img} alt="Logo" className="home-img" />
                        <p className="name"  >SARAH PAQUETTE</p>
                        <p className="title">SYSTEMS COORDINATOR, NATIONAL GRATING INC</p>
                    </div>
                    <button className="image-container">
                        <FontAwesomeIcon icon={faPlay} className="play-icon" />
                        Play
                    </button>
                </div>
                <div className="card-footer">
                    <p>Visit our wall of love <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></p>
                </div>
            </div>
        </div>
    );
}

export default Home;