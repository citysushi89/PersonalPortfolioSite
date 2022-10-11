import React from "react";
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';


function Graphics() {

    return (
    <div className="color light-section home-page-section">
    <section id="Graphics">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-12 features-mini-section">
          <HandymanOutlinedIcon fontSize="large" className="feature-item" />
          <h3 className="feature-title">I like to build things</h3>
          <p className="feature-p">I primarily work in Python, but also work in web development including HTML, CSS and Javascript to put it all together.</p>
        </div>

        <div class="col-lg-4 col-md-12 features-mini-section">
          <LanguageOutlinedIcon fontSize="large" className="feature-item"/>
          <h3 class="feature-title">Web Work</h3>
          <p className="feature-p">From extracting and analyzing data, to automating online activity, to building sites like this one, I can do it!</p>
        </div>

        <div class="col-lg-4 col-md-12 features-mini-section">
          <DomainVerificationOutlinedIcon fontSize="large" className="feature-item"/>
          <h3 class="feature-title">To Ui or not to UI</h3>
          <p className="feature-p">The smaller projects page contains mostly text-based one-off projects designed to accomplish a task or build a particular tool. While the larger projects page contains groups of smaller projects or projects designed for external use.</p>
        </div>
      </div>

    </div>

  </section>
    </div>
    );
}

export default Graphics;