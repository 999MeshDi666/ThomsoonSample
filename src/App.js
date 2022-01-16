import React from 'react';
import Navigation from './navigation/Navigation';
import Content from './article/BodyContent';
import Footer from './footer/Footer';
import './index.css';



class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = { id: 0};
    this.homeNavHandler = this.homeNavHandler.bind(this);
    this.propjectNavHandler = this.propjectNavHandler.bind(this);
    this.aboutNavHandler = this.aboutNavHandler.bind(this);
    this.contactNavHandler = this.contactNavHandler.bind(this);
  }
  homeNavHandler(){
    this.setState({id: this.state.id = 1})
  }
  propjectNavHandler(){
    this.setState({id: this.state.id = 2})
  }
  aboutNavHandler(){
    this.setState({id: this.state.id = 3})
  }
  contactNavHandler(){
    this.setState({id: this.state.id = 4})
  }
  render(){
    return(
      <div className='appContainer'>
        <Navigation homeHandler = {this.homeNavHandler} propjectHandler = {this.propjectNavHandler} aboutHandler = {this.aboutNavHandler} contactHandler = {this.contactNavHandler}/>
        <Content id = {this.state.id}/> 
        <Footer/>
      </div>
    );
  }
}
export default App;