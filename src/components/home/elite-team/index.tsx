import React from 'preact/compat';
import GymSlot from 'components/home/gym-team/GymSlot';
import TeamTitle from 'components/shared/TeamTitle';

function EliteTeam() {
    const eliteFourTitleContent = <span className="gym-leader-title" style={{letterSpacing: 4}}>
        ELITE 4 TEAM <small>(may include one Mega)</small>
    </span>;
    const championTitleContent = <span className="gym-leader-title" style={{letterSpacing: 2}}>
        FULL TEAM <small>(may include one minor Legendary)</small>
    </span>;
    return (
        <div className="row">
            <div className="col-xl-6 col-12">
                {/* Elite 4 */}
                <div className="col-12">
                    <TeamTitle content={eliteFourTitleContent}/>
                    <GymSlot badges={8} slotQty={5} totalSlots={9} />
                </div>
            </div>
            <div className="col-xl-6 col-12">
                {/* Champion */}
                <div className="col-12">
                    <TeamTitle content={championTitleContent}/>
                    <GymSlot badges={9} slotQty={6} totalSlots={9} />
                </div>
            </div>
        </div>
    );
}

export default EliteTeam;
