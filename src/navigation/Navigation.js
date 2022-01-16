import React from "react";
import Header from './Header';



function NavWindows(prop){
	if(!prop.show){
		return(
			null
		)
	}
	else{
		return(
			<div className="navList_windows">
				<ul className="nav_list">
					{prop.children}
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
				<NavWindows show = {this.state.isClicked}>
					<li onClick={this.navigationHandler} id="#home" onMouseDown={this.props.homeHandler}>Home</li> 
					<li onClick={this.navigationHandler} id="#project" onMouseDown={this.props.propjectHandler}>Projects</li> 
					<li onClick={this.navigationHandler} id="#about" onMouseDown={this.props.aboutHandler}>About us</li> 
					<li onClick={this.navigationHandler} id="#contact" onMouseDown={this.props.contactHandler}>Contact</li> 
				</NavWindows>
      </div>
    );
  }
};
export default Navigation;