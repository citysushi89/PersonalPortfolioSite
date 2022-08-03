import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Design from "../components/Design";
import Graphics from "../components/Graphics";
import AboutMe from "../components/AboutMe";

function Home() {
    return (
    <div>
        <Design />
        <Graphics />
        <AboutMe />
     </div>
    );
}

export default Home;