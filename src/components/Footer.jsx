import React from "react";
import '../App.css';

function Footer() {
    
    // Get current year
    const year =  new Date().getFullYear();
    
    return (
    <div className="dark-section">
        {/* <!-- Footer --> */}
        <footer class="page-footer blue dark-section">
        <p class="footer-copyright py-3 footer-text">© Copyright {year} Owen Pickard</p>

        {/* Icon Attributions */}
        <p><a className='attributions' href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a></p>
        <p><a className='attributions' href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by juicy_fish - Flaticon</a></p>
        <a href="https://www.flaticon.com/free-icons/analysis" title="analysis icons">Analysis icons created by RaftelDesign - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/automation" title="automation icons">Automation icons created by Becris - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/automation" title="automation icons">Automation icons created by Becris - Flaticon</a>
        {/* Bootstrap JS  */}
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            
        </footer>
    </div>
    );
}

export default Footer;