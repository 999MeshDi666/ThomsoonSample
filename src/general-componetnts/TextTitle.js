import React from "react";

function TextTitle(prop){
	return(
		<div className= {prop.class}>
			<h1>{prop.title}</h1>
			<p>{prop.text}</p>
		</div>
	);
};

export default TextTitle;