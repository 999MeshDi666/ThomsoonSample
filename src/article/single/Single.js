import React from "react";
import TextTitle from "../../general-componetnts/TextTitle";
import TextContent from "../../general-componetnts/TextContent";
import firstImg from "../../img/single_first.png";
import secondImg from "../../img/single_second.png";
import thirdImg from "../../img/single_third.png";
import fourthImg from "../../img/single_fourth.png";


const singleText = {
	title: 'SINGLE',
	text: 'Branding, Website',
};

const singleTxt = {
	text_first: 'Pixel Design is startup company. PD specializes in creating logos and branding. They have own stationery printed for clients.The logo has been created in combination of two letters P + D. It was created about 10 logos. Finally, we chose one of them by the end of the refinement. For the logo was created brandbook and complete visual identity.',
	text_second: 'Additionally I create simple landing page intro website. On the website is videos & images slider. Moreover is content of the services and contact. The plan is to create an online store.',
}
function SingleTxt(){
	return(
		<section className="single">
			<TextTitle  class = 'text_title single_text_title' title={singleText.title} text = {singleText.text}/>
			<TextContent p = {2} text_first = {singleTxt.text_first} text_second = {singleTxt.text_second}/>
		</section>
	);
}

function SliderImg(prop){
	if(prop.id === 1){
		return(
			<div className="slider_content">
				<img src= {firstImg} id={1} alt="gray block"/>
			</div>
		);
	}
	else if(prop.id === 2){
		return(
			<div className="slider_content">
				<img src= {secondImg} id={2} alt="gray block"/>
			</div>
		);
	}
	else if(prop.id === 3){
		return(
			<div className="slider_content">
				<img src= {thirdImg} id={3} alt="gray block"/>
			</div>
		);
	}
	else if(prop.id === 4){
		return(
			<div className="slider_content">
				<img src= {fourthImg} id={4} alt="gray block"/>
			</div>
		);
	}
	
};

function SliderBtns(prop){
	return(
		<div className="slider_buttons">
			<p className="slide_btn prev_btn" onClick={prop.prevClickHandler}>Preious work</p>
			<p className="slide_btn next_btn" onClick={prop.nextClickHandler}>Next work</p>
		</div>
	);
}

class Slider extends React.Component{

	constructor(props){
		super(props);
		this.state = {imgId: 1};
		this.nextClickHandler = this.nextClickHandler.bind(this);
		this.prevClickHandler = this.prevClickHandler.bind(this);
	}

	nextClickHandler(){
		this.setState({imgId: this.state.imgId + 1});
		if(this.state.imgId >= 4){
			this.setState({imgId: this.state.imgId = 1});
		}
	}
	prevClickHandler(){
		this.setState({imgId: this.state.imgId - 1});
		if(this.state.imgId <= 1){
			this.setState({imgId: this.state.imgId = 4});
		}
	}

	render(){
		return(
			<section className="slider">
				<SliderImg id = {this.state.imgId}/>
				<SliderBtns prevClickHandler = {this.prevClickHandler} nextClickHandler = {this.nextClickHandler}/>
			</section>
		);
	}

}

function SingleContent(prop){
	return(
		<div className="single_content">
			{prop.single}
			{prop.slider}
		</div>
	);
}

class Single extends React.Component{

  render(){
    return(
			<article className="single_page general_page">
			 	<SingleContent single = {<SingleTxt/>} slider = {<Slider/>}/>
			</article>
    );
  }
}
export default Single;