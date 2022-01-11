import React from "react";
import gray from '../img/background.png';
import block from '../img/imgBlock.png';
import tblock from '../img/tblock.png';
import sblock from '../img/sblock.png';
import ImgContent from "../general-componetnts/ImgBlocks";
import TextContent from "../general-componetnts/TextContent";


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
	{id: 1, link: "##", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 2, link: "https://www.youtube.com/", image: tblock, containerClass: "general_block", hoverClass: "hover_block thover_block", title: txtFullScreen.title, text: txtFullScreen.text},
	{id: 3, link: "##", image: sblock, containerClass: "general_block third_index_block", hoverClass: "hover_block shover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 4, link: "##", image: block, containerClass: "general_block fourth_index_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 5, link: "##", image: block, containerClass: "general_block fifth_index_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 6, link: "##", image: block, containerClass: "general_block sixth_index_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
]

function MainIndexContent(){
	return(
		<div className="main_indexContent">
			<TextContent title = {indexText.title} text = {indexText.text}/>
			<ImgContent imgContent = 'index_img_content' imgBList = {imgBlocksList}/>
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
			<section className="index_page general_page">
				<MainIndexContent/>
				<RightSideImg pic = {gray} alt = 'gray backgtound'/>
			</section>
		);
  }
}

export default Index;
