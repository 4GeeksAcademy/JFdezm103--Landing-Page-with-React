import React from "react";

const Card = (props) => {
   
    return (
		<div className="card h-100">
  			<img src= {props.dataCard.img} className="card-img-top" style= {{ objectFit: "cover"}}/>
  			<div className="card-body">
     			<h5 className="card-title">{props.dataCard.title}</h5>
     			<p className="card-text">{props.dataCard.text}</p>
			</div>
			<div class="card-footer">
				<button className="btn btn-primary">Find out more!</button>
   			</div>
			
		</div>

    );
};


export default Card;