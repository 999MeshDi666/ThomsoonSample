import React from "react";
import Index from '../article/IndexPage'
import Projects from "../article/Projects";
import About from "../article/About";
import Contact from "../article/Contact";



function Container(prop){
	
	if(prop.show === 2){
		return(
			<div className="container">
				<Projects/>
			</div>
		);
	}
	else if(prop.show === 3){
		return(
			<div className="container">
				<About/>
			</div>
		);
		
	}
	else if(prop.show === 4){
		return(
			<div className="container">
				<Contact/>
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

