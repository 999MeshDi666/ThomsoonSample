import React from "react";
import Header from './Header';
import { Link } from "react-router-dom";

const links = [
	{id: 1, link: '/home', name: 'Home'},
	{id: 2, link: '/projects', name: 'Projects'},
	{id: 3, link: '/about', name: 'About'},
	{id: 4, link: '/contact', name: 'Contact'},
];

function NavLinks(prop){
	return(
		<li onClick={prop.hideNav}><Link to={prop.link}>{prop.name}</Link></li>
	);
}

function NavWindows(prop){
	if(!prop.show){
		return(
			null
		)
	}
	else{
		const links = prop.linkLists
		return(
			<div className="navList_windows">
				<ul className="nav_list">
					{links.map((nav)=> <NavLinks key = {nav.id} link = {nav.link} name = {nav.name} hideNav = {prop.hideNav}/>)}
				</ul>
			</div>
		);
	}
};


class Navigation extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isClicked: false,
		};
		this.navigationHandler = this.navigationHandler.bind(this);
	
	};

	navigationHandler(){
		this.setState((prevState)=>({
			isClicked: !prevState.isClicked,
		}));
	};

  render(){
    return(
      <div className='navigation'>
        <Header clicked = {this.state.isClicked} navHandler = {this.navigationHandler}/>
				<NavWindows show = {this.state.isClicked} hideNav = {this.navigationHandler} linkLists = {links}/>
      </div>
    );
  }
};
export default Navigation;