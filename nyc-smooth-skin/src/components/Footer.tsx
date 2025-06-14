export function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <p>Follow Us</p>
                <a href=''>Instagram</a><br></br>
                <a href=''>Facebook</a>
            </div>
            <div className='contactus'>
                <p><a href="/ContactUs">Contact us</a></p>
                <a href=''>(347) 888-8888</a><br></br>
                <a href=''>nycsmoothskin@gmail.com</a>
            </div>
            <div className='location'>
                <p>Location</p>
                <a style={{display: "table-cell"}} href = "https://maps.app.goo.gl/Rc4M7SnfXdxzqUcPA" target = "_blank" rel = "noopener noreferrer">12 Avenue O<br></br>
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


