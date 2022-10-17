import React from "react";

// If you want to change how the cards look and use footers to make the data align:
// https://mdbootstrap.com/docs/react/components/cards/

function Card(props) {

    return (
    <div className="small-projects-section middle-gray-section">
            <div className="cardList middle-gray-section">
                        <div className="card middle-gray-section">
                            <a href={props.gitURL}>
                            <img src={props.img} className="card-img-top small-projects-imgs gray-section" alt="..."  />
                            </a>
                            <div class="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description}</p>
                            </div>
                            <ul class="list-group list-group-flush gray-section">
                                <li className="list-group-item card-list-item">{props.tagOne}</li>
                                <li className="list-group-item card-list-item">{props.tagTwo}</li>
                                <li className="list-group-item card-list-item">{props.tagThree}</li>
                            </ul>
                        </div>
                </div> 
    </div>
    );
}

export default Card;