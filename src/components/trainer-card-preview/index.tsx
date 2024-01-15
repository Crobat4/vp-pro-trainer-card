import 'styles/trainer-card-preview.scss';

import React from 'preact/compat';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from 'modules/Data';
import { Amelia, Sparkle, TypeColors } from 'modules/Constants';
import PokemonType from 'modules/emums/PokemonType';
import GeneratePokemonSlot from 'components/shared/GeneratePokemonSlot';
import PreviewGymSlots from 'components/trainer-card-preview/PreviewGymSlots';
import TeamTitle from 'components/shared/TeamTitle';
import { getMoveNameByID } from 'modules/Utils';

function TrainerCardPreview () {
    const gymLeaderTitleSparkle =
        <div className="gym-leader-title-sparkle">
            {new Array(4).fill(<img className="white-icon" src={Sparkle} />)}
        </div>;
    const signatureSize = 220;
    const gymTitleContent = <>
        {gymLeaderTitleSparkle}
        <span className="gym-leader-title" style={{fontSize: 32}}>GYM LEADER TEAM</span>
        {gymLeaderTitleSparkle}
    </>;
    const eliteFourTitleContent = <span className="gym-leader-title" style={{fontSize: 32, letterSpacing: 4}}>
        ELITE 4 TEAM <small>(may include one Mega)</small>
    </span>;
    const championTitleContent = <span className="gym-leader-title" style={{fontSize: 32, letterSpacing: 1}}>
        FULL TEAM <small>(may include one minor Legendary)</small>
    </span>;
    return (
        <>
            <div id="trainer-card-preview-pkmn" className="trainer-card-preview-bg text-center" style={{ backgroundColor: TypeColors[Data.type.value].base }}>
                {/* Trainer card title */}
                <div className="trainer-card-title fw-bold">{'/vp/\'s PRO TRAINER CARD'}</div>
                {/* Type specialist title */}
                <div className="d-flex align-items-center justify-content-center type-specialist-title" style={{height: 72, color: TypeColors[Data.type.value].darker }}>
                    {PokemonType[Data.type.value]?.toUpperCase()} TYPE SPECIALIST
                </div>
                {/* Theme title */}
                <div className="d-flex align-items-center justify-content-start theme-title" style={{height: 56, marginBottom: 8, color: TypeColors[Data.type.value].darker }}>
                    <div className={'d-inline-block me-2'}>Theme:</div>
                    <div className={'d-inline-block fw-bold'}>{Data.theme.value}</div>
                </div>
                {/* Gym Leader title*/}
                <TeamTitle content={gymTitleContent}/>

                <div className="info-badges-container">
                    <div>
                        <div className="signature-tm p-0 d-inline-block">
                            <div className="align-center fw-bold" style={{ marginTop: 6, marginBottom: 14, fontSize: 30, color: TypeColors[Data.type.value].darker }}>
                                Signature PKMN
                            </div>
                            <div className={'signature-img-container'}>
                                <GeneratePokemonSlot
                                    slot={Data.slotsPerBadge.signature?.slots[0]}
                                    baseSize={signatureSize}
                                    isTemplate={true}
                                />
                            </div>
                            <div className="d-flex align-items-center justify-content-start bg-white fw-bold" style={{ width: signatureSize, height: 56, fontSize: 20, margin: '16px auto', padding: '0 16px', color: TypeColors[Data.type.value].darker }}>
                            TM: {getMoveNameByID(Data.move.value)}
                            </div>
                        </div>
                        <div className="badge-stars-0-3 p-0 d-inline-block">
                            <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges0} />
                            <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges1} />
                            <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges2} />
                            <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges3} />
                        </div>
                    </div>
                    <div className={'d-flex'}>
                        <div className="badge-container p-0 d-flex position-relative align-items-center">
                            <div className="align-center fw-bold badge-title m-0"
                                style={{ margin: '8px 0', fontSize: 28, color: TypeColors[Data.type.value].darker }}>
                                    Badge
                            </div>
                            <div style="width: 116px; height: 116px; margin: 8px auto; background: white;">
                                <img className="trainer-card-preview-badge-image" style={{}} src={Data.badgeURL.value || Amelia} />
                            </div>
                        </div>
                        <div className="badge-stars-4-5 p-0 d-inline-block">
                            <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges4} />
                            <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges5} />
                        </div>
                    </div>

                    <div className="badge-stars-6 p-0 d-inline-block w-100">
                        <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges6} />
                    </div>
                    <div className="badge-stars-7 p-0 d-inline-block w-100">
                        <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges7} />
                    </div>
                    {/* Elite 4 */}
                    <div className="badge-stars-elite-4 p-0 d-inline-block w-100">
                        <TeamTitle content={eliteFourTitleContent}/>
                        <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges8} />
                    </div>
                    {/* Champion */}
                    <div className="badge-stars-champion p-0 d-inline-block w-100">
                        <TeamTitle content={championTitleContent}/>
                        <PreviewGymSlots slotGroup={Data.slotsPerBadge.badges9} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerCardPreview;
