// import {Resend} from 'resend';
// import * as React from 'react';
// import { ContactUsEmail } from './emails/contact-us';
// import express from 'express';
// import cors from 'cors';

// const app = express();
// app.use(cors());

// const resend = new Resend(process.env.RESEND_API_KEY);


// app.post('/api/email')

// export async function POST(req: Request) {
//     const payload = await req.json();
    
//     try {
//         const {data, error} = await resend.emails.send({
//             from: 'intomealdc@gmail.com',
//             to: payload.email,
//             subject: 'Thank you for contacting us, ${payload.name}',
//             react: ContactUsEmail(payload),
//         });

//         if(error) {
//             return Response.json({error});
//         }

//         return Response.json({data});
//     } catch(error) {
//         return Response.json({error});
//     }
// }

// // export async function POST(req: Request) {
// //     const paylod = await req.json();
    
// //     try {
// //         const {data, error} = await resend.emails.send({
// //             from: 'intomealdc@gmail.com',
// //             to: paylod.email,
// //             subject: 'Thank you for contacting us, ${payload.name}',
// //             react: ContactUsEmail(paylod),
// //         });

// //         if(error) {
// //             return Response.json({error});
// //         }

// //         return Response.json({data});
// //     } catch(error) {
// //         return Response.json({error});
// //     }
// // }

// // const express = require('express');

// // const app = express();
// // const PORT = 3000;

// // app.use(express.json()); 

// // app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
