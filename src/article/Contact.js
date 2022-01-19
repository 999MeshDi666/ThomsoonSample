import React from "react";
import TextTitle from "../general-componetnts/TextTitle";

const contactText = {
  title: "Contact",
  text: "To contact us please use the contact form visible. When sending files, please use the following e-mail",
}

  
function FormInput(prop){
  return(
    <div className="form_input">
      <label htmlFor={prop.forId}>{prop.lname} {prop.value}</label>
      <input type={prop.type} name={prop.name} id = {prop.id} value = {prop.value} onChange={prop.inputHandler}   required/>
    </div>
  );
}

function Form(prop){
  
  return(
    <form className="form" method="Post" action="##" onSubmit={prop.submitHandler}> 
      <div className="input_wrapper">
        <FormInput forId = '#Username' lname = 'Username:' type = 'text' id = '#Username' value = {prop.name} inputHandler = {prop.nameHandler}/>
        <FormInput forId = '#Email' lname = 'E-mail:' type = 'email' id = '#Email' value = {prop.email} inputHandler = {prop.emailHandler}/>
        <FormInput forId = '#Mes' lname = 'Message:' type = 'text' id = '#Mes' value = {prop.mes} inputHandler = {prop.mesHandler}  />
      </div>
      <input className="form_btn" type="submit" value="submit"/>
    </form>
  );
}

class ContactForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      mes: '',
    }
    this.nameHandler = this.nameHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.mesHandler = this.mesHandler.bind(this);
  }

  nameHandler(event){
    this.setState({name: event.target.value})
  };
  emailHandler(event){
    this.setState({email: event.target.value});
  };
  mesHandler(event){
    this.setState({mes: event.target.value});  
  };
  onSubmitHandler(event){
    event.preventDefault();
  }
  render(){
    return(
      <div className="contact_form">
        <Form  name = {this.state.name} email = {this.state.email} mes = {this.state.mes} nameHandler = {this.nameHandler} emailHandler = {this.emailHandler}  mesHandler = {this.mesHandler} submitHandler = {this.onSubmitHandler}/>
      </div>
    );
  }
}

function ContactContent(){
  return(
    <div className="contact_content">
      <TextTitle class = "text_title" title = {contactText.title} text = {contactText.text}/>
      <ContactForm/>
    </div>
  );
}

class Contact extends React.Component{
  render(){
    return(
      <article className="contact_page general_page">
        <ContactContent/>
      </article>

    );
  } 
}

export default Contact;