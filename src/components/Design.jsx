import React from "react";


function Design() {
    return (
    <div className="nocolor home-page-section gray-section extra-margin">
        <h1 className="page-title">Welcome</h1>
        <img src='../../public/images/python.png' className='welcome-img python-icon' />
        <img src='..\public\images\programming.png' className='welcome-img comp-icon' />
        {/* https://cdn-icons-png.flaticon.com/512/5968/5968350.png */}
        <img src='../public/images/analysis.png' className='welcome-img data-icon' />
        <img src='..\..\public\images\html.png' className='welcome-img html-icon' />
        <img src='public\images\automation.png' className='welcome-img web-auto-icon' />
        <img src='public/images/engineering.png' className='welcome-img gear-icon' ></img>
        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png' className="welcome-img" alt="..."  />
        {/* <a href="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" title="python icons"></a> */}

     </div>
    );
}

export default Design;