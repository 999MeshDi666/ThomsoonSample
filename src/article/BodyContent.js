import React from "react";

import Container from "../general-componetnts/Container";


class Content extends React.Component{

  render(){
    return(
      <article className="article">
        <Container contentId = {4}/>
      </article>

    );
      
  }
}

export default Content;