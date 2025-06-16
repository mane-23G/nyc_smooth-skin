import { PageName } from "../components/PageName";
import { LaserHairRemoval } from "./LaserHairRemoval";
import { LaserTreatments } from "./LaserTreatments";

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
                    If you have any more questions check out our <a href="/Laser/FAQ">FAQ</a>
                </p>
                <p>
                    If you have an upcoming appointment or are curious about how to prepare and what to except check out our <a href="/Guide">Guide</a>.
                </p>
            </div>

        </div>
    )
}