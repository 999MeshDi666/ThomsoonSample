import React from "react";
import Container from "../general-componetnts/Container";
import Index from '../article/IndexPage'
import Projects from "../article/Projects";
import About from "../article/About";
import Contact from "../article/Contact";
import Single from "./single/Single";
import { Routes, Route } from "react-router-dom";

class Content extends React.Component{
  render(){
   
    return(
      <main className="main_content">
        <Container>
          <Routes>
            <Route exact path='/home' element = {<Index/>}/>
            <Route path='/projects'  element= {<Projects/>}/>
            <Route path='/about'  element= {<About/>}/>
            <Route path='/contact'  element= {<Contact/>}/>
            <Route path='/single'  element= {<Single/>}/>
          </Routes>
        </Container>
      </main>
    );
  }
}

export default Content;