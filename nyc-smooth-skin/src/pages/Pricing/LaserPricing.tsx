import laserPrices from '../../../data/laser_price.json';
import { PageName } from '../../components/PageName.js';

type Price = {
    part: string
    singleCost: string
    prepayCost: string
}

export function LaserPricing() {
    return (
        <div>
            <PageName title="Laser Pricing"/>
            <div className="laserPricing">
                <div className="laserPart">
                    <p>Body Part</p>
                    {laserPrices.map((lp: Price) =>
                        <p>{lp.part}</p>
                    )}
                </div>
                <div className="singleCost">
                    <p>One Time</p>
                    {laserPrices.map((lp: Price) =>
                        <p>$ {lp.singleCost}</p>
                    )}
                </div>
                <div className="prepayCost">
                    <p>Prepay 6 Times</p>
                    {laserPrices.map((lp: Price) =>
                        <p>$ {lp.prepayCost}</p>
                    )}
                </div>
            </div>
        </div>
    )
}