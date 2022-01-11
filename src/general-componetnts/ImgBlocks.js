import React from "react";


function HoverBlock(prop){
	return(
		<a href={prop.link} target="_blank" className= {prop.hoverClass}>
			<div className = 'hover_block_wrapper'>
				<h2>{prop.title}</h2>
				<p>{prop.text}</p>
			</div>
		</a>
	);
};

function ImgBlocks(prop){
	return(
		<div className={prop.imgContainer}>
			<img  src={prop.img}/>
			<HoverBlock link = {prop.link} hoverClass = {prop.hoverClass} title = {prop.title} text = {prop.text}/>
		</div>
	);
};

function ImgContent(prop){
	const imgBlockList = prop.imgBList;
	const showImgBlocks = imgBlockList.map((list)=> <ImgBlocks key = {list.id} link = {list.link} img = {list.image} imgContainer = {list.containerClass} hoverClass = {list.hoverClass} title = {list.title} text = {list.text}/>)
	return(
		<div className={prop.imgContent}>
			{showImgBlocks}
		</div>
	);
};

export default ImgContent;
