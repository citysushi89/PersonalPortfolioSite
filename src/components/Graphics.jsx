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
          <p className="feature-p">I primarily work in Python, but also work in web development including HTML and CSS and the Javascript to put it all together.</p>
        </div>

        <div class="col-lg-4 col-md-12 features-mini-section">
          <LanguageOutlinedIcon fontSize="large" className="feature-item"/>
          <h3 class="feature-title">Web Work</h3>
          <p className="feature-p">From extracting and analyzing data online, to automating online activity, I can do it!</p>
        </div>

        <div class="col-lg-4 col-md-12 features-mini-section">
          <DomainVerificationOutlinedIcon fontSize="large" className="feature-item"/>
          <h3 class="feature-title">To Ui or not to UI</h3>
          <p className="feature-p">Many of the smaller projects on this site are text-based programs built to accomplish a task, while the larger projects are built with more UX ideas in mind.</p>
        </div>
      </div>

    </div>

  </section>
    </div>
    );
}

export default Graphics;