// 'use client';

import { PageName } from "../components/PageName.js";
import { TriangleAlert} from 'lucide-react';
// import { useState } from "react";
// import React from "react";
// import { Resend } from "resend";
// import { POST } from "../route";
// import { useEffect } from "react";
// import { Resend } from 'resend';
// import { error } from "console";
// import { text } from "stream/consumers";



export function ContactUs() {
    // interface formState {
    //     firstname: string,
    //     lastname: string,
    //     email: string,
    //     subject: string,
    //     msg: string,
    // }

    // const [formState, setFormState] = useState<formState>({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     subject: '',
    //     msg: '',
    // });

    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [popup, setPopup] = useState(false);
    // const [succuess, setSuccuess] = useState(false);
    // // const resend = new Resend('');
 
    // const styles = {
    //     display: popup ? 'block' : 'none'
    // };
    // const message = succuess ? "Your form was submitted successfully! Excpect a response in 1-3 days." : "There was an error processing your form! Please try again.";

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     setFormState({...formState, [e.target.name]: e.target.value});
    //     if(formState.email.length == 0 || formState.firstname.length == 0 || formState.lastname.length == 0 || formState.msg.length == 0 || formState.subject.length == 0) {
    //         setIsSubmitting(false);
    //     } else setIsSubmitting(true);
    // };
    

    // const [showPopUp, setShowPopUp] = useState(false);
    // const showPopupHandler = () => setShowPopUp(true);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //     setShowPopUp(false);
    //     }, 100000);
    // return () => clearTimeout(timer);
    // }, [showPopUp]);
    // if(showPopUp) {
    //     // popup = text ? <PopUp msg="Your form was submitted successfully! Excpect a response in 1-3 days."/> : <PopUp msg="There was an error processing your form! Please try again."/>;
    //     popup = <PopUp msg="It worked"/>
    // }

    // async function handleSubmit() {
    //     try {
    //         const data = await resend.emails.send({
    //         from: 'Acme <onboarding@resend.dev>',
    //         to: ['delivered@resend.dev'],
    //         subject: 'Hello World',
    //         html: '<strong>It works!</strong>'
    //         });

    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    /** 
    async function handleSubmit() {
        const { data, error } = await resend.emails.send({
            from: 'Acme <tester@gmail.com',
            to: ['bobfisherman30@gmail.com'],
            subject: 'Hello World',
            html: '<strong>It works!</strong>',
        });

        if (error) {
            return console.error({ error });
        }

        console.log({ data });
        /*** 
    
        try {
            setIsSubmitting(true);
            // console.log("email " + formState.email);
            // console.log("sub " + formState.subject);
            // console.log("fname " + formState.firstname);
            // console.log("msg " + formState.msg);

            const nameemail = formState.firstname + " " + formState.lastname + " " + formState.email
            resend.emails.send({
                from: formState.email,
                to: 'bobfisherman30@gmail.com',
                subject: formState.subject,
                html: formState.msg
            });
            setFormState({firstname: '', lastname: '', email: '', subject: '', msg: ''});
            setIsSubmitting(false);
            console.log(popup);
            setSuccuess(true);
            console.log("success");
            setPopup(true);
        } catch(error) {
            console.log(error);
            console.log(popup);
            setSuccuess(false);


            setPopup(true);


            console.log("failure");

        } 
        console.log(styles);
        // finally {
        //     const timer = setTimeout(() => {
        //         popup = true;
        //     }, 100000);
        //     return () => {
        //         clearTimeout(timer);
        //         popup = false;
        //     }
        // }
        */
    // }



    return (
        <div>
            <PageName title="Contact Us"/>

            <div className="alertbox">
                <TriangleAlert color="#eb8585" size={64} className="trianglealert"/>
                <p style={{display: "inline"}}>Contact Us is currently underconstruction, please call directly to <a>(347) 598-7193</a> or email at <a>nycsmoothskin1@gmail.com</a>.</p>
            </div>
            {/* <div style={styles} className="alertbox">
                <p>
                    {message}  
                </p>
            </div> */}
            {/* <PopUp msg="hello"/> */}
            <form className="ContactUsF">
            <div className="contactUs">
                {/* first and last name text field */}
                <div className="flname">
                    <div className="fname">

                        <label htmlFor="name">First Name</label>
                        {/* <input type="text" id="firstname" name="firstname" value={formState.firstname} onChange={handleChange} placeholder="Enter your first name" required></input> */}
                        <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required></input>


                  
                    </div>

                    <div className="lname">
        
                        <label htmlFor="name">Last Name</label>
                        {/* <input type="text" id="lastname" name="lastname" value={formState.lastname} onChange={handleChange} placeholder="Enter your last name" required></input> */}
                        <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required></input>

                    </div>

                </div>
                
                <br></br>
                <label htmlFor="name">Email</label>
                {/* <input className="email" type="email" id="email" name="email" value={formState.email} onChange={handleChange} placeholder="Enter your email" required></input> */}
                <input className="email" type="email" id="email" name="email" placeholder="Enter your email" required></input>


                <br></br>
                <label htmlFor="name">Subject</label>
                {/* <input className="subject" type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange}  placeholder="Subject of your message" required></input> */}
                <input className="subject" type="text" id="subject" name="subject" placeholder="Subject of your message" required></input>
                

                <br></br>
                <label htmlFor="name">Your Message</label>
                {/* <textarea className="msg" id="msg" name="msg" value={formState.msg} onChange={handleChange} placeholder="Enter your message..." rows={4} required></textarea> */}
                <textarea className="msg" id="msg" name="msg" placeholder="Enter your message..." rows={4} required></textarea>


                <br></br>
                {/* <button disabled={!isSubmitting} type="submit" className="submit" onClick={handleSubmit}> */}
                <button disabled={true} type="submit" className="submit">

                {/* <button type="submit" className="submit" onClick={handleSubmit}> */}

                    {/* {isSubmitting ? 'Submitting...' : 'Submit'} */}
                    Submit
                </button>

                <p>
                    Please expect a response within 1-3 days.
                </p>
            
            </div>

            </form>
                

            <div className="contactus-bottom">
                <p>If you have any questions regrarding Laser Services please contact Anush at (347) 598-7193.</p>

                <p>If you have any questions regrarding Nail Services please contact Mariia at (917) 615-7678.</p>  
            </div>

              
        </div>


    )




}
