import React from "react";
import ImgContent from "../general-componetnts/ImgBlocks";
import TextContent from "../general-componetnts/TextContent";
import TextBlock from "../general-componetnts/TextBlock";
import block from '../img/imgBlock.png';



//for text content
const aboutText = {
	title: "About Us",
	text: "Front-End Developer | UI/Web Designer | Video Producer"
}
const logoDesignText = {
	title: "Logo Design",
	text: "All project is clean and simplicity modern style."

}


//for text block
const aboutTxtFirst = {
	text: `Hello, my name is Tomasz Mazurczak. I'm freelancer. I invite you to look at my work and thanks for liking the project. `,
}
const aboutTxtSecond = {
	text: `Full corporate identity visual with various versions of the logo. The creative combination of letters of the company name: Bespoke Creative LTD. (B+C+L) gave the following effects work. We used soft nude shades colors which added prestige. Website done in HTML5 + CSS3 responsive version.`,
}
const aboutTxtThird = {
	text: `I encourage you to watch the presentation.`,
}

//for img content array
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
	{id: 2, link: "https://www.youtube.com/", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtFullScreen.title, text: txtFullScreen.text},
	{id: 3, link: "##", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 4, link: "##", image: block, containerClass: "general_block general_about_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 5, link: "##", image: block, containerClass: "general_block general_about_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 6, link: "##", image: block, containerClass: "general_block general_about_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
];

function AboutUs(){
	return(
		<div className="about_us">
			<TextContent  class = "text_content about_text_content" title = {aboutText.title} text = {aboutText.text}/>
			<TextBlock p = {3} text_first = {aboutTxtFirst.text} text_second = {aboutTxtSecond.text} text_third = {aboutTxtThird.text}/>
		</div>
  );
}

function LogoDesign(prop){
  return(
		<div className="logo_design">
			<TextContent class="text_content" title = {logoDesignText.title} text = {logoDesignText.text}/>
			<ImgContent imgContent = "img_content" imgBList = {imgBlocksList}/>
		</div>
  );
}

function AboutContent(prop){
	return(
		<div className="about_content">
			{prop.aboutUs}
			{prop.logoDesign}
		</div>

	);
    
}

class About extends React.Component{
	render(){
		return(
			<section className="about_page general_page">
				<AboutContent aboutUs = {<AboutUs/>} logoDesign = {<LogoDesign/>}/>
			</section>
		);
	}   
}

export default About;