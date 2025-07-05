import { PageName } from "../components/PageName.js";

export function Guide() {
    return(
        <div>
            <PageName title="Guide"/>

            <div className="guide">
                <h1>How to prepare and what to expect?</h1>
                
                <h3>Before your Appointment (1 Week Prior)</h3>
                <ul>
                    <li>
                        Make sure you shave the area that will be treated.
                    </li>
                    <li>
                        Avoid direct sun expousre, tanning beds, spray tans, and self-tanners.
                    </li>
                    <li>
                        Apply sunscreen daily and wear barrier protection. 
                    </li>
                    <li>
                        Avoid aesthetic treatments, topical irritants that can irritate the skin.
                    </li>
                    <li>
                        Show up with clean skin, meaning no makeup, lotion, deodorant, or suncreen.
                    </li>
                </ul>

                <h3>During the Appointment</h3>
                <ul>
                    <li>
                        You will be provided with a gown, if need, to wear during the treatment. You will also be given eye protection.
                    </li>
                    <li>
                        If you have unshaved hair, the hair will be shaved prior to beginning the laser treatment. It is storngly reccommenet to shave prior, since dry shaving can irritate the skin.
                    </li>
                    <li>
                        Anush will mark the areas that will be treated and will laser in sections. The laser machine has a cooling air component to help the pain levels (which vary for everyone).
                    </li>
                    <li>
                        After treating the area, aloe vera will be applied to skin to help calm and soothe the skin.
                    </li>
                    <li>
                        If suncreen is needed it can be provided after treatemnt is finsihed.
                    </li>
                </ul>
                
                <h3>After your Appointment (1 Week After)</h3>
                <ul>
                    <li>
                        Avoid direct sun expousre, tanning beds, spray tans, and self-tanners.
                    </li>
                    <li>
                        Avoid aesthetic treatments, topical irritants that can irritate the skin.
                    </li>
                    <li>
                        Apply aloe vera to treated area to help soothe the skin.
                    </li>
                </ul>
            </div>
        </div>
        
    )
}