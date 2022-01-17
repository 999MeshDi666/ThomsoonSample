import React from "react";

function TextBlock(prop){
	if(prop.p === 1){
		return(
			<div className="text_block">
				<p className = "text_block_first">{prop.text_first}</p>
			</div>
		);
	}
	else if(prop.p === 2){
		return(
			<div className="text_block">
				<p className = "text_block_first">{prop.text_first}</p>
				<p className = "text_block_second">{prop.text_second}</p>
			</div>		
		);

	}
	else if(prop.p === 3){
		return(
			<div className="text_block">
				<p className = "text_block_first">{prop.text_first}</p>
				<p className = "text_block_second">{prop.text_second}</p>
				<p className = "text_block_third">{prop.text_third}</p>
			</div>	
		);
			
	}
    
}
export default TextBlock;