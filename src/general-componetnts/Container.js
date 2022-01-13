import React from "react";
import Index from '../article/IndexPage'
import Projects from "../article/Projects";
import About from "../article/About";

function Container(prop){

	if(prop.contentId == 2){
		return(
			<div className="container">
				<Projects/>
			</div>
		);
	}
	else if(prop.contentId == 3){
		return(
			<div className="container">
				<About/>
			</div>
		);
	}
	return(
		<div className="container">
			<Index/>
		</div>
	);

}

export default Container;