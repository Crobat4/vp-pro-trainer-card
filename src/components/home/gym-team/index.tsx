import React from 'preact/compat';
import GymSlot from 'components/home/gym-team/GymSlot';
import TeamTitle from 'components/shared/TeamTitle';
import { Sparkle } from 'modules/Constants';

function GymTeam() {
    const gymLeaderTitleSparkle = <div className="gym-leader-title-sparkle d-none d-md-block">
        {new Array(4).fill(<img className="white-icon" src={Sparkle} />)}
    </div>;
    const titleContent = <>
        {gymLeaderTitleSparkle}
        <span className="gym-leader-title" style={{letterSpacing: 6}}>GYM LEADER TEAM</span>
        {gymLeaderTitleSparkle}
    </>;
    return (
        <div className="row">
            <div className="col-12">
                <TeamTitle content={titleContent}/>
            </div>
            <div className="col-md-5 col-12">
                <GymSlot badges={0} slotQty={2} />
                <GymSlot badges={1} slotQty={3} />
                <GymSlot badges={2} slotQty={3} />
                <GymSlot badges={3} slotQty={3} />
            </div>
            <div className="col-md-7 col-12">
                <GymSlot badges={4} slotQty={4} />
                <GymSlot badges={5} slotQty={4} />
                <GymSlot badges={6} slotQty={4} />
                <GymSlot badges={7} slotQty={5} />
            </div>
        </div>
    );
}

export default GymTeam;
