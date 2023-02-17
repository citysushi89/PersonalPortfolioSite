import React from "react";

// If you want to change how the cards look and use footers to make the data align:
// https://mdbootstrap.com/docs/react/components/cards/

function MobileDev(props) {

    return (
        <div className="mobile-dev-section">
            <h1>Mobile Dev</h1>

            {/* TODO Create a summary title section here here */}
            <div class="mobile-card">
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
            {/* TODO ... may need to create a MobileDevCard to put here if the whole thing is not iterating? */}
        </div>
    );
}

export default MobileDev;