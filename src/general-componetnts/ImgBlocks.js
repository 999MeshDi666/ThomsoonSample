import React from "react";
import { Link } from "react-router-dom";


function HoverBlock(prop){
	return(
		<Link to={prop.link} className= {prop.hoverClass}>
			<div className = 'hover_block_wrapper'>
				<h2>{prop.title}</h2>
				<p>{prop.text}</p>
			</div>
		</Link>
	);
};

function ImgBlocks(prop){
	return(
		<div className={prop.imgContainer}>
			<img  src={prop.img} alt = ""/>
			<HoverBlock link = {prop.link} hoverClass = {prop.hoverClass} title = {prop.title} text = {prop.text}/>
		</div>
	);
};

function ImgContent(prop){
	const imgBlockList = prop.imgBList;
	const showImgBlocks = imgBlockList.map((list)=> <ImgBlocks key = {list.id} link = {list.link} hoverClass = {list.hoverClass}  title = {list.title} text = {list.text} imgContainer = {list.containerClass} img = {list.image}/>)
	return(
		<div className={prop.imgContent}>
			{showImgBlocks}
		</div>
	);
};

export default ImgContent;
