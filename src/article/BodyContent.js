import React from "react";

import Container from "../general-componetnts/Container";


class Content extends React.Component{



  render(){
   
    return(
      <article className="article">
        <Container show = {this.props.id}/>
      </article>

    );
      
  }
}

export default Content;