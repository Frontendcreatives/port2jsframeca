import React from "react";
import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";
import "../../sass/styles.scss";


function Contact() {
  return (
 <div className="padding">   
      <Heading content="CONTACT"/>
      <ContactForm/>
 </div>   
  );
}

export default Contact;



