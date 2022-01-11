import React from "react";

function TextContent(prop){
	return(
		<div className="text_content">
			<h1>{prop.title}</h1>
			<p>{prop.text}</p>
		</div>
	);
};

export default TextContent;