import React from "react";
import MobileDevTopSection from "../components/MobileDevTopSection";

// If you want to change how the cards look and use footers to make the data align:
// https://mdbootstrap.com/docs/react/components/cards/

function MobileDev(props) {

    return (
        <div>   
            <MobileDevTopSection />

            <div class="mobile-card cardList">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.descriptions}.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{props.tagOne}</li>
                    <li class="list-group-item">{props.tagTwo}</li>
                    <li class="list-group-item">{props.tagThree}</li>
                </ul>
                <div class="card-body">
                    <a href={props.gitURL} class="card-link">Github</a>
                    <a href={props.vidURL} class="card-link">Usage</a>
                </div>
            </div>
        </div> 
    
    );
}

export default MobileDev;