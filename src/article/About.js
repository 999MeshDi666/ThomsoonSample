import React from "react";
import ImgContent from "../general-componetnts/ImgBlocks";
import TextTitle from "../general-componetnts/TextTitle";
import TextContent from "../general-componetnts/TextContent";
import block from '../img/imgBlock.png';



//for text title
const aboutText = {
	title: "About Us",
	text: "Front-End Developer | UI/Web Designer | Video Producer"
}
const logoDesignText = {
	title: "Logo Design",
	text: "All project is clean and simplicity modern style."
}

//for text content
const aboutTxt = {
	text_first: `Hello, my name is Tomasz Mazurczak. I'm freelancer. I invite you to look at my work and thanks for liking the project. `,
	text_second: `Full corporate identity visual with various versions of the logo. The creative combination of letters of the company name: Bespoke Creative LTD. (B+C+L) gave the following effects work. We used soft nude shades colors which added prestige. Website done in HTML5 + CSS3 responsive version.`,
	text_third: `I encourage you to watch the presentation.`,
}



//for img content array
const txtSingle = {
	title: 'SINGLE',
	text: 'Branding',
}



const imgBlocksList = [
	{id: 1, link: "/single", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 2, link: "/single", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 3, link: "/single", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 4, link: "/single", image: block, containerClass: "general_block general_about_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 5, link: "/single", image: block, containerClass: "general_block general_about_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 6, link: "/single", image: block, containerClass: "general_block general_about_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
];

function AboutUs(){
	return(
		<section className="about_us">
			<TextTitle  class = "text_title about_text_title" title = {aboutText.title} text = {aboutText.text}/>
			<TextContent p = {3} text_first = {aboutTxt.text_first} text_second = {aboutTxt.text_second} text_third = {aboutTxt.text_third}/>
		</section>
  );
}

function LogoDesign(){
  return(
		<section className="logo_design">
			<TextTitle class="text_title" title = {logoDesignText.title} text = {logoDesignText.text}/>
			<ImgContent imgContent = "img_content" imgBList = {imgBlocksList}/>
		</section>
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
			<article className="about_page general_page">
				<AboutContent aboutUs = {<AboutUs/>} logoDesign = {<LogoDesign/>}/>
			</article>
		);
	}   
}

export default About;