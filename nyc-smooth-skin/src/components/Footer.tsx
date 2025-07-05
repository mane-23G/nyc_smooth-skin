export function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <p>Follow Us</p>
                <a style={{display: "inline-block"}} href='https://www.instagram.com/nycsmoothskin/?utm_source=qr' target='_blank' rel="noopener noreferrer" >Instagram</a><br></br>
                <a href=''>Facebook</a>
            </div>
            <div className='contactus'>
                <p><a href="/ContactUs">Contact us</a></p>
                <a href=''>(347) 598-7193</a><br></br>
                <a href=''>nycsmoothskin1@gmail.com</a>
            </div>
            <div className='location'>
                <p>Location</p>
                <a style={{display: "inline-block"}} href = "https://maps.app.goo.gl/Rc4M7SnfXdxzqUcPA" target = "_blank" rel = "noopener noreferrer">12 Avenue O<br></br>
                Brooklyn, NY 11204</a>
            </div>
            <div className='hours'>
                <p>Open Hours</p>
                Mon - Fri 9am-7pm<br></br>
                Sat & Sun 10am-6pm
            </div>
        </div>
    )
}


