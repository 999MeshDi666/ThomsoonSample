import React from "react";

function Navigation(prop){
	return(
		<nav className="burger_menu" onClick={prop.navigationHandler}>
			{prop.clicked ?  <p className="nav_btn nav_close">+</p> : <p className="nav_btn nav_open">|||</p> }
		</nav>
	);
}


function Header(prop){
	return(
		<header className="header">
			<div className="header_wrapper">
				<p className="header_logo">THOMSOON</p>
				<Navigation clicked = {prop.clicked} navigationHandler = {prop.navHandler}/>
			</div>
		</header>
	);
}

export default Header