import React from "react";


function TextContent(prop){
	if(prop.p === 1){
		return(
			<div className="text_content">
				<p className = "text_content_first">{prop.text_first}</p>
			</div>
		);
	}
	else if(prop.p === 2){
		return(
			<div className="text_content">
				<p className = "text_content_first">{prop.text_first}</p>
				<p className = "text_content_second">{prop.text_second}</p>
			</div>		
		);

	}
	else if(prop.p === 3){
		return(
			<div className="text_content">
				<p className = "text_content_first">{prop.text_first}</p>
				<p className = "text_content_second">{prop.text_second}</p>
				<p className = "text_content_third">{prop.text_third}</p>
			</div>	
		);
			
	}
    
};

export default TextContent;