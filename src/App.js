import React from 'react';
import Navigation from './navigation/Navigation';
import Content from './article/BodyContent';
import Footer from './footer/Footer';

import './index.css';



class App extends React.Component{
  
  render(){
    return(
      <div className='appContainer'>
        <Navigation/>
        <Content/> 
        <Footer/>
      </div>
    );
  }
}
export default App;