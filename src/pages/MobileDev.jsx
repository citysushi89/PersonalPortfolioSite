import React from "react";

// If you want to change how the cards look and use footers to make the data align:
// https://mdbootstrap.com/docs/react/components/cards/

function MobileDev(props) {
    return (

    <div className="small-projects-section">   
        <div className="card-deck">
            <div className="cardList">
                <div className="card mobile-card">
                    {/* <div className="card-body"> */}
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    {/* </div> */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item card-list-item">{props.tagOne}</li>
                        <li className="list-group-item card-list-item">{props.tagTwo}</li>
                        <li className="list-group-item card-list-item">{props.tagThree}</li>
                    </ul>
                    <div className="card-body">
                        <a href={props.gitURL} className="card-link">Github</a>
                        <a href={props.vidURL} className="card-link">Usage</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>      
    
    );
}

export default MobileDev;