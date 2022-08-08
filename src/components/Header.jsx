import React, {useState} from "react";

function Header() {
    
    // State for hamburger menu
    const [openBurger, setOpenBurger] = useState(false)
    const handleBurgerClick = () => {
        setOpenBurger(prev => !prev)
    }

    
    return (
    <div>       
        {/* Styles  Bootstrap  */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
    
        {/* MDB Bootstrap and React imports */}
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />


        {/* My styles.css  */}
        <link rel="stylesheet" href="styles.css" />


            {/* Navbar  */}
            <nav class="navbar navbar-expand-lg dark-section">
            <div class="container-fluid">
                <a class="navbar-brand header-text" href="/home">Owen</a>
                {/* <button class="navbar-toggler header-text" type="button" onClick={handleBurgerClick} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon header-text"> */}
                {/* {openBurger ? "Close" : "Open"}
                </span>
                </button> */}
                <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto header-text">
                    <li class="nav-item">
                    <a class="nav-link header-text header-list-item" href="/card">Smaller Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link header-text header-list-item" href="/largerprojects">Larger Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link header-text header-list-item" href="/home#AboutMe">About Me</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link header-text header-list-item" href="/contact">Contact Me</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

     </div>
    );
}

export default Header;