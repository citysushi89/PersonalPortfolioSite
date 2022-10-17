import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    
    // NEW
    const [showNavExternal, setShowNavExternal] = useState(false);
    // END NEW
    
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
        {/* Favicon */}
        <link rel="favicon" href='public/favicon.ico?v=2'/>

        <Navbar collapseOnSelect expand="lg" className="dark-section header">
            <Container>

                {/* <Navbar.Brand href=""> */}
                {/* <Nav className="me-auto"> */}
                <Nav.Link href="/home" className="header-text header-text-name"><p className="header-text">Owen</p></Nav.Link>
                {/* </Nav> */}
                {/* </Navbar.Brand> */}

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-burger">
                {/* Below keeps Owen on the right */}
                <Nav className="me-auto">
                </Nav>

                <Nav className="header-text">
                    <Nav.Link href="/card" className="header-list-item"><p className="header-text">Smaller Projects</p></Nav.Link>
                    <Nav.Link href="/largerprojects" className="header-list-item"><p className="header-text">Larger Projects</p></Nav.Link>
                    <Nav.Link href="/home#AboutMe" className="header-list-item"><p className="header-text">About Me</p></Nav.Link>
                    <Nav.Link href="/contact" className="header-list-item"><p className="header-text">Contact Me</p></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

     </div>
    );
}

export default Header;