import React from "react";
import Index from './IndexPage';
import Projects from "./Projects";
import Container from "../general-componetnts/Container";


class Content extends React.Component{

  render(){
    return(
      <article className="article">
        <Container>
          <Index/>
          <Projects/>
        </Container>
      </article>

    );
      
  }
}

export default Content;