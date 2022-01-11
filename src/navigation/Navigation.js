import React from "react";
import Header from './Header';


const navLists = [
	{id: 1, name: 'Home'},
	{id: 2, name: 'Projects'},
	{id: 3, name: 'About us'},
	{id: 4, name: 'Contact'},
];

function NavListBtns(prop){

	return(
		<li onClick={prop.hide}>{prop.title}</li>
	);
}

function NavWindows(prop){
	if(!prop.show){
		return(
			null
		)
	}
	else{
		const navList = prop.navigList
		return(
			<div className="navList_windows">
				<ul className="nav_list">
					{navList.map((nav)=> <NavListBtns key = {nav.id} title = {nav.name} hide = {prop.hide}/>)}
				</ul>
			</div>
		);
	}
};

class Navigation extends React.Component{

	constructor(prop){
		super(prop);
		this.state = {
			isClicked: false,

		};
		this.navigationHandler = this.navigationHandler.bind(this);
	};

	navigationHandler(){
		this.setState((prevState)=>({
			isClicked: !prevState.isClicked
		}));
	};

  render(){
    return(
      <div className='navigation'>
        <Header clicked = {this.state.isClicked} navHandler = {this.navigationHandler}/>
				<NavWindows show = {this.state.isClicked} hide = {this.navigationHandler} navigList = {navLists} />
      </div>
    );
  }
};
export default Navigation;