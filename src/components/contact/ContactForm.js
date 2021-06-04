import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const formInput = Yup.object().shape({
    fname: Yup.string()
            .min(2, 'First name must be minimum 2 characters')
            .required("First name is required"),
    lname: Yup.string()
            .min(2, 'Last name must be minimum 2 characters')
            .required("Last name is required"),
    
    email: Yup
            .string()
            .email("Email not valid, try again")
            .required("Email is required"),
    
    message: Yup.string()
            .min(10, 'Message must be minimum 10 characters')
            .required('Message is required'),
      
       
});



function ContactForm() {
    const [notice, setNotice] = useState('');
    const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(formInput),
});
    
    function onSubmit(data, e) {
        e.preventDefault();
    setNotice(`Message sent!`);
    reset();
       
    }
    
    return ( 
        <>
        
       <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
            
                <Form.Label>First Name</Form.Label>
                <Form.Control name="fname" placeholder="Enter your first name" ref={register} />
                {errors.fname && <p className="err">{errors.fname.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lname" placeholder="Enter your last name" ref={register} />
                {errors.lname && <p className="err">{errors.lname.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email"  placeholder="Enter your email" ref={register} />
                {errors.email && <p className="err">{errors.email.message}</p>}
            </Form.Group>


            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message"  placeholder="Enter your message" ref={register} />
                {errors.message && <p className="err">{errors.message.message}</p>}
            </Form.Group>
            {<p>{notice}</p>} 
           <Button type="submit" className="cardbtn">Submit</Button>
                            
        </Form>
    
        </>
           );
    
}

export default ContactForm;
