import React from "react";
import facebook from './img/facebook.png';
import behance from './img/behance.png';


function SnIcon(prop){
	return(
		<div className="sn_icon">
			<a href="##" title={prop.title}><img src={prop.img} alt={prop.alt}/></a>
		</div>
	);
}


function SocialNet(){
	return(
		<div className="social_network">
			<SnIcon title = "facebook" img = {facebook}/>
			<SnIcon title = "behance" img = {behance}/>
		</div>
	); 
}

function CopyRight(){
	return(
		<p className="copy_right">© Copyright 2015 Thomsoon.com. All Rights Reserved.</p>
	)
}

class Footer extends React.Component{
	render(){
		return(
			<footer className="footer">
				<SocialNet/>
				<CopyRight/>
			</footer>
		);
	}
    
};

export default Footer;