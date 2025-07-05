// 'use client';

import { PageName } from "../components/PageName.js";
import { TriangleAlert} from 'lucide-react';
// import React, {useState} from "react";
// import { Resend } from "resend";
// import { POST } from "../route";


// interface FormState {
//     firstname: string;
//     lastname: string;
//     email: string;
//     subject: string;
//     msg: string;
// }

export function ContactUs() {
    // const [formState, setFormState] = useState<FormState>({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     subject: '',
    //     msg: '',
    // });

    // const [isSubmitting, setIsSubmitting] = useState(false);


    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     setFormState({...formState, [e.target.name]: e.target.value});
    // };

    // const handleSubmit = async(e: React.FormEvent) => {
    //     e.preventDefault();

    //     try {
    //         setIsSubmitting(true);
    //         console.log("in the handle submit function");
    //         await fetch('/api/email', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formState),
    //             // from: 'intomealdc@gmail.com',
    //             // to: "bobfisherman30@gmail.com",
    //             // subject: 'Thank you for contacting us, ${payload.name}',
    //             // html: '<strong>It works!</strong>',
    //         });
    //         setFormState({firstname: '', lastname: '', email: '', subject: '', msg: ''});
    //     } catch(error) {
    //         console.log(error);
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    return (
        <div>
            <PageName title="Contact Us"/>

            <div className="alertbox">
                <TriangleAlert color="#eb8585" size={64} className="trianglealert"/>
                <p style={{display: "inline"}}>Contact Us is currently underconstruction, please call directly to <a>(347) 598-7193</a> or email at <a>nycsmoothskin1@gmail.com</a>.</p>
            </div>
            <div className="contactUs">
            {/* <form className="ContactUs"> */}
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
                {/* <button disabled={isSubmitting} type="submit" className="submit" onClick={handleSubmit}> */}
                <button type="submit" className="submit">

                    {/* {isSubmitting ? 'Submitting...' : 'Submit'} */}
                    Submit
                </button>

                <p>
                    Please expect a response within 1-3 days.
                </p>
             
            {/* </form> */}
                
            </div>

            <div className="contactus-bottom">
                <p>If you have any questions regrarding Laser Services please contact Anush at (347) 598-7193.</p>

                <p>If you have any questions regrarding Nail Services please contact Mariia at (917) 615-7678.</p>  
            </div>

              
        </div>
    )
}
