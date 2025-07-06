import { PageName } from "../components/PageName.js";
import { LaserHairRemoval } from "./LaserHairRemoval.js";
import { LaserTreatments } from "./LaserTreatments.js";

export function AboutLaserProcedures() {
    return (
        <div>
            <PageName title="About Laser Procedures"/>
            <div className="aboutlaserprocedures">
                < LaserHairRemoval/>
                < LaserTreatments/>
            </div>
            <div className="aboutlaserextra">
                <p>
                    If you have any more questions check out our <a href="/Laser/FAQ">FAQ</a>.
                </p>
                <p>
                    If you have an upcoming appointment or are curious about how to prepare and what to except check out our <a href="/Laser/Guide">Guide</a>.
                </p>
            </div>

        </div>
    )
}