import React from "react";
import TextTitle from "../general-componetnts/TextTitle";
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


const imgBlocksList = [
	{id: 1, link: "/single", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 2, link: "/single", image: tblock, containerClass: "general_block", hoverClass: "hover_block thover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 3, link: "/single", image: block, containerClass: "general_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 4, link: "/single", image: sblock, containerClass: "general_block fourth_projects_block", hoverClass: "hover_block shover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 5, link: "/single", image: block, containerClass: "general_block fifth_projects_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
	{id: 6, link: "/single", image: block, containerClass: "general_block sixth_projects_block", hoverClass: "hover_block", title: txtSingle.title, text: txtSingle.text},
];

function ProjectContent(){
	return(
		<div className="project_content">
				<TextTitle class = "text_title" title = {projectTxt.title} text = {projectTxt.text} />
	    	<ImgContent imgContent = "img_content" imgBList = {imgBlocksList}/>
		</div>
	);
};

class Projects extends React.Component{
	render(){
		return(
			<article className="projects_page general_page">
				<ProjectContent/>
			</article>
		);
	};
};

export default Projects;