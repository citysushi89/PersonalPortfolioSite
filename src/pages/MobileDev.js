import React from "react";

// If you want to change how the cards look and use footers to make the data align:
// https://mdbootstrap.com/docs/react/components/cards/

function MobileDev(props) {

    return (
        <div className="mobile-dev-section">
            <h1>Mobile Dev</h1>

            {/* TODO Create a summary title section here here */}
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Card link</a>
                </div>
            </div>
            {/* TODO ... may need to create a MobileDevCard to put here if the whole thing is not iterating? */}
        </div>
    );
}

export default MobileDev;