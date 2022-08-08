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
          <h3 className="feature-title">I build things</h3>
          <p className="feature-p">Wether working in full-stack web development or creating programs in Python, I build stuff.</p>
        </div>

        <div class="col-lg-4 col-md-12 features-mini-section">
          <LanguageOutlinedIcon fontSize="large" className="feature-item"/>
          <h3 class="feature-title">Web Work</h3>
          <p className="feature-p">Whether you want to extract data from a website or automate your business's Instagram activity, I can do it!</p>
        </div>

        <div class="col-lg-4 col-md-12 features-mini-section">
          <DomainVerificationOutlinedIcon fontSize="large" className="feature-item"/>
          <h3 class="feature-title">To Ui or not to UI</h3>
          <p className="feature-p">Want a fancy UI to launch an application or just want the barebones to accomplish a task? Both are doable.</p>
        </div>
      </div>

    </div>

  </section>
    </div>
    );
}

export default Graphics;