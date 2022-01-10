import React from "react";
import gray from './img/background.png';
import block from './img/imgBlock.png';
import tblock from './img/tblock.png';
import sblock from './img/sblock.png';

const indexText = {
	title: 'my creative and simplicity modern projects',
	text: 'Please check my portfolio. All project is clean and simplicity modern style. You can download this template.',
}

const txtSingle = {
	title: 'SINGLE',
	text: 'Branding',

}
const txtFullScreen = {
	title: 'Full Screen',
	text: 'Branding',

}

const imgBlocksList = [
	{id: 1, image: "block", containerClass: "general_block", hoverClass: "hover_block", title: "txtSingle.title", text: "txtSingle.text"},
	{id: 2, image: "tblock", containerClass: "general_block", hoverClass: "hover_block thover_block", title: "txtSingle.title", text: "txtSingle.text"},
	{id: 3, image: "sblock", containerClass: "general_block third_img_block", hoverClass: "hover_block shover_block", title: "txtSingle.title", text: "txtSingle.text"},
	{id: 4, image: "block", containerClass: "general_block fourth_img_block", hoverClass: "hover_block", title: "txtSingle.title", text: "txtSingle.text"},
	{id: 5, image: "block", containerClass: "general_block fifth_img_block", hoverClass: "hover_block", title: "txtSingle.title", text: "txtSingle.text"},
	{id: 6, image: "block", containerClass: "general_block sixth_img_block", hoverClass: "hover_block", title: "txtSingle.title", text: "txtSingle.text"},
]

function TextContent(prop){
	return(
		<div className="text_content">
			<h1>{prop.title}</h1>
			<p>{prop.text}</p>
		</div>
	);
};

function HoverBlock(prop){
	return(
		<a href="##" className= {prop.hoverClass}>
			<div className = 'hover_block_wrapper'>
				<h2>{prop.title}</h2>
				<p>{prop.text}</p>
			</div>
		</a>

	);
}

function ImgBlocks(prop){
	return(
		<div className={prop.imgContainer}>
			<img  src={prop.img}/>
			<HoverBlock hoverClass = {prop.hoverClass} title = {prop.title} text = {prop.text}/>
		</div>
	);
}

function ImgContent(){
	return(
		<div className="img_content">
			<ImgBlocks img = {block} imgContainer = "general_block" hoverClass = "hover_block" title={txtSingle.title} text={txtSingle.text}/>
			<ImgBlocks img = {tblock} imgContainer = "general_block" hoverClass = "hover_block thover_block" title={txtFullScreen.title} text={txtFullScreen.text}/>
			<ImgBlocks img = {sblock} imgContainer = "general_block third_img_block" hoverClass = "hover_block shover_block" title={txtSingle.title} text={txtSingle.text}/>
			<ImgBlocks img = {block} imgContainer = "general_block fourth_img_block" hoverClass = "hover_block" title={txtSingle.title} text={txtSingle.text}/>
			<ImgBlocks img = {block} imgContainer = "general_block fifth_img_block" hoverClass = "hover_block" title={txtSingle.title} text={txtSingle.text}/>
			<ImgBlocks img = {block} imgContainer = "general_block sixth_img_block" hoverClass = "hover_block" title={txtSingle.title} text={txtSingle.text}/>
		</div>
	);
};

function MainIndexContent(){
	return(
		<div className="main_indexContent">
			<TextContent title = {indexText.title} text = {indexText.text}/>
			<ImgContent/>
		</div>
	);
};

function RightSideImg(prop){
	return(
		<img src={prop.pic} alt = {prop.alt} className="side_image"/>
	);
};

class Index extends React.Component{
  render(){
    return(
			<section className="index_page">
				<MainIndexContent/>
				<RightSideImg pic = {gray} alt = 'gray backgtound'/>
			</section>
		);
  }
}

export default Index;
