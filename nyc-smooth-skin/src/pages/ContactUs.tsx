import { PageName } from "../components/PageName";
import serviceData from '../../data/services.json'

type Service = {
    service: string
    name: string
    booking: string
    link: string
    linktoappt: string
    phonenum: string
}

export function ContactUs() {
    return (
        <div>
            <PageName title="Contact Us"/>
            <div className="contactUs">
                {serviceData.map((s : Service) =>
                    <div className="contactUsCard"> 
                        <h2>{s.service}</h2>
                        { s.booking === "Phone" ? (
                            <p>Call {s.name} at {s.phonenum} to schedule a visit</p>
                        ) : (
                            <p>Book online or call {s.name} at {s.phonenum} to schedule a visit</p>
                        )
                        }
                            
                    </div>
                )}
            </div>
        </div>
    )
}
