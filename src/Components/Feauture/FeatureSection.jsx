import React from "react";
import "./FeatureSection.css"; // Ensure the CSS file path is correct
import featureImage1 from "../../img/receivables.png";
import featureImage2 from "../../img/payables.png";
import featureImage3 from "../../img/items.png";
import featureImage4 from "../../img/projects.png";
import featureImage5 from "../../img/reports.png";

export default function FeatureSection() {
    return (
        <div className="container2">
            
            <h1 className="text">Do it all,
              <p>  and then some more!  </p>
                 </h1>
                 <p className="title"> USER FAVORITES </p>
            <div className="row g-4">
                {/* Receivables */}
                <div className="col-md-6 col-lg-4">
                    <div className="card1">
                        <h3 className="section-title">Receivables</h3>
                        <p className="para">
                            Raise professional invoices and quotes in no time. Offer multiple payment options, automate invoices and reminders, and send online payment links.
                        </p>
                        <img src={featureImage1} alt="Receivables" className="img-fluid" />
                    </div>
                </div>

                {/* Payables */}
                <div className="col-md-6 col-lg-4">
                    <div className="card2">
                        <h3 className="section-title">Payables</h3>
                        <p className="para">
                            Track vendor bills and other expenses easily, add recurring expenses, and include client expenses on invoices.
                        </p>
                        <img src={featureImage2} alt="Payables" className="img-fluid" />
                    </div>
                </div>

                {/* Inventory */}
                <div className="col-md-6 col-lg-4">
                    <div className="card4">
                        <h3 className="section-title">Inventory</h3>
                        <p className="para">
                            Track your inventory. Update stock automatically as you make purchases or sales. Set reorder points and reminders too!
                        </p>
                        <img src={featureImage3} alt="Inventory" className="img-fluid" />
                    </div>
                </div>

                {/* Projects */}
                <div className="col-md-6 col-lg-4">
                    <div className="card3">
                        <h3 className="section-title">Projects</h3>
                        <p className="para">
                            Send project quotes quickly, accommodate partial payments, and log time. Bill for resources, job completions, time spent, or expenses attached to a project, too.
                        </p>
                        <img src={featureImage4} alt="Projects" className="img-fluid" />
                    </div>
                </div>

                {/* Reports */}
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                        <h3 className="section-title">Reports</h3>
                        <p className="para">
                            Get actionable insights on your cash flow,  taxes, profit and loss,
                        </p>
                        <p className="para">
                            and sales on demand. Opt to get select reports periodically </p>
                        <p className="para"> sent to you and your team.</p>

                        <img src={featureImage5} alt="Reports" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-explore">Explore Features</button>
            </div>
        </div>
    );
}
