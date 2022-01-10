import React from 'react';
import Navigation from './Navigation';
import Content from './BodyContent';
import Footer from './Footer';

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