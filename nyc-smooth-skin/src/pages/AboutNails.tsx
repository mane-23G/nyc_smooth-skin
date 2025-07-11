import { PageName } from "../components/PageName.js";
import  {NailCarousel}  from "./NailComponents/NailCarousel.js";
import { NailPricing } from "./Pricing/NailsPricing.js";

export function AboutNails() {
    return (
        <div>
            <PageName title="Nails"/>
            <div className="nailsPage">
                <div className="nailsPageInfo">
                    <p>
                        Mariia is the service provider for Nails. She offer Manicures and Pedicures. She does Gel, Extensions, Regualar Polish, and Designs.
                        <br></br>
                        To make an Appointment with Natasha please call (917) 615-7678.
                        <br></br>

                        <div className="carousel">
                            <NailCarousel/>
                        </div>
                       
                        You can check out more of her work on <a style={{display: "inline-block"}} target = "_blank" rel = "noopener noreferrer" href="https://www.instagram.com/mariia_nails_nyc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instragram</a>. 
                    </p>
                </div>
                <NailPricing/>

            </div>

            
        </div>
    )
}