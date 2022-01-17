import React from 'react';
import Navigation from './navigation/Navigation';
import Content from './article/BodyContent';
import Footer from './footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import './index.css';



class App extends React.Component{
  
  
  render(){
    return(
      <BrowserRouter>
        <div className='appContainer'>
          <Navigation/>
          <Content/> 
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;