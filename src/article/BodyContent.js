import React from "react";
import Container from "../general-componetnts/Container";
import Index from '../article/IndexPage'
import Projects from "../article/Projects";
import About from "../article/About";
import Contact from "../article/Contact";
import { Routes, Route } from "react-router-dom";

class Content extends React.Component{
  render(){
   
    return(
      <article className="article">
        <Container>
          <Routes>
            <Route exact path='/' element = {<Index/>}/>
            <Route path='/projects'  element= {<Projects/>}/>
            <Route path='/about'  element= {<About/>}/>
            <Route path='/contact'  element= {<Contact/>}/>
          </Routes>
        </Container>
      </article>
    );
  }
}

export default Content;