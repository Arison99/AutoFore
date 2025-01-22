import React from "react";
import "./Card.css";
import mobile from "../../img/mobile.png"
import automation from "../../img/automation.png"
import customization from "../../img/cust.png"
import globalsales from "../../img/multi-currency.png"
import collaboration from "../../img/collaboration.png"
export default function Card() {
    return (
    
      <div class="container">
      <div class="row">
          <div class="col-md-6">
                <h1 class="spotlight-heading">SPOTLIGHT</h1>
              <h2 class="spotlight-title">Engineered to Unlock Business Growth</h2>
          </div>
          <div class="col-md-6">
              <div class="row-gy-4">
                  <div class="col-12">
                      <div class="feature-card">
                          <h5>Accounting Across Devices</h5>
                          <p>Whether you’re on the web, smartphone, or desktop app, promptly send quotes right after meetings, track business expenses, log time, and view reports!</p>
                          <img src= {mobile} alt="" class="img-fluid feature-image"/>
                      </div>
                  </div>
                  <div class="col-12">
                      <div class="feature-card">
                          <h5>Customization</h5>
                          <p>Customize AutoFore Books to suit your business with custom templates and fields. Get custom reports, too!</p>
                          <img src={customization} alt="Customization" class="img-fluid feature-image"/>
                      </div>
                  </div>
                  <div class="col-12">
                      <div class="feature-card">
                          <h5>Sell globally</h5>
                          <p>Manage foreign transactions with our multi-currency feature. Apply exchange rates automatically or manually.</p>
                          <img src={globalsales} alt="Global Sales" class="img-fluid feature-image"/>
                      </div>
                  </div>
                  <div class="col-12">
                      <div class="feature-card">
                          <h5>Automation</h5>
                          <p>Trigger emails or notifications for reminders or alerts. Set recurring actions, schedules, and field updates.</p>
                          <img src={automation} alt="Automation" class="img-fluid feature-image"/>
                      </div>
                  </div>
                  <div class="col-12">
                      <div class="feature-card">
                          <h5>Collaboration</h5>
                          <p>Work as a team. Assign roles and permissions. Use customer and vendor portals for payment processing and negotiation.</p>
                          <img src={collaboration} alt="Collaboration" class="img-fluid feature-image"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
}