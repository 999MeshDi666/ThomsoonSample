import React from "react";
import TextContent from "../general-componetnts/TextContent";
import ImgContent from "../general-componetnts/ImgBlocks";
import block from '../img/imgBlock.png';
import tblock from '../img/tblock.png';
import sblock from '../img/sblock.png';

const projectTxt = {
	title: "Projects",
	text: "Please check my portfolio. All project is clean and simplicity modern style. You can download this template."
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
	{id: 3, link: "##", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 4, link: "##", image: sblock, containerClass: "general_block fourth_projects_block", hoverClass: "hover_block shover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 5, link: "##", image: block, containerClass: "general_block fifth_projects_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 6, link: "##", image: block, containerClass: "general_block sixth_projects_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
];

function ProjectContent(){
	return(
		<div className="project_content">
			<TextContent title = {projectTxt.title} text = {projectTxt.text} />
	    <ImgContent imgContent = "project_img_content" imgBList = {imgBlocksList}/>
		</div>
	);
};

class Projects extends React.Component{
	render(){
		return(
			<section className="projects_page general_page">
				<ProjectContent/>
			</section>
		);
	};
};

export default Projects;