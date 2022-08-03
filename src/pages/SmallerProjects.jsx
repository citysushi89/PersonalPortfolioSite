import React from "react";

function Card(props) {

    return (
    <div className="">
        <div className="cardList">
            <div className="card">
                <a href={props.gitURL}>
                <img src={props.img} className="card-img-top small-projects-imgs" alt="..."  />
                </a>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{props.tagOne}</li>
                    <li class="list-group-item">{props.tagTwo}</li>
                    <li class="list-group-item">{props.tagThree}</li>
                </ul>
           </div> 
        </div>
    </div>
    );
}

export default Card;