import React from 'preact/compat';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sparkle from '/assets/icons/sparkle-sharp.svg';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { TypeColors } from 'modules/Constants';
import PokemonType from 'modules/emums/PokemonType';
import States from 'modules/States';
import GeneratePokemonSlot from 'modules/GenerateSlot';

function Template () {
    const gymLeaderTitleSparkle =
        <div className="gym-leader-title-sparkle">
            {new Array(4).fill(<img className="white-icon" src={Sparkle} />)}
        </div>;
    const signatureSize = 220;
    States.countTemplate = 0;
    return (
        <>
            <div id="template-pkmn" className="template-bg text-center" style={{ backgroundColor: TypeColors[TemplateData.type.value].base }}>
                {/* Trainer card title */}
                <div className="trainer-card-title fw-bold">{'/vp/\'s PRO TRAINER CARD'}</div>
                {/* Type specialist title */}
                <div className="d-flex align-items-center justify-content-center type-specialist-title" style={{height: 72, color: TypeColors[TemplateData.type.value].darker }}>
                    {PokemonType[TemplateData.type.value]?.toUpperCase()} TYPE SPECIALIST
                </div>
                {/* Theme title */}
                <div className="d-flex align-items-center justify-content-start theme-title" style={{height: 56, marginBottom: 8, color: TypeColors[TemplateData.type.value].darker }}>
                    <div className={'d-inline-block me-2'}>Theme:</div>
                    <div className={'d-inline-block fw-bold'}>{TemplateData.theme.value}</div>
                </div>
                {/* Gym Leader title*/}
                <div className="d-flex align-items-center justify-content-center gym-leader-title-container" style={{ backgroundColor: TypeColors[TemplateData.type.value].darker }}>
                    {gymLeaderTitleSparkle}
                    <span className="gym-leader-title">GYM LEADER TEAM</span>
                    {gymLeaderTitleSparkle}
                </div>

                <div className="row">
                    <div className="col-5">
                        <div className="align-center fw-bold" style={{ marginTop: 6, marginBottom: 14, fontSize: 30, color: TypeColors[TemplateData.type.value].darker }}>
                            Signature PKMN
                        </div>
                        <div className={'signature-img-container'}>
                            <GeneratePokemonSlot
                                slotID={0}
                                baseSize={signatureSize}
                                isTemplate={true}
                            />
                        </div>
                        <div className="d-flex align-items-center justify-content-start bg-white fw-bold" style={{ width: signatureSize, height: 56, fontSize: 20, margin: '16px auto', padding: '0 16px', color: TypeColors[TemplateData.type.value].darker }}>
                        TM: {TemplateData.move.value}
                        </div>
                    </div>
                    <div className="col-7 ps-0">
                        {TemplateData.generateTeamSlots(4, 2, undefined, undefined, true)}
                        {TemplateData.generateTeamSlots(4, 3, 1, undefined, true)}
                        {TemplateData.generateTeamSlots(4, 3, 2, undefined, true)}
                        {TemplateData.generateTeamSlots(4, 3, 3, undefined, true)}
                    </div>
                    <div className="col-3" style="width: 27% !important;">
                        <div className="">
                            <div className="align-center fw-bold" style={{ margin: '8px 0', fontSize: 28, color: TypeColors[TemplateData.type.value].darker }}>Badge</div>
                            <div style="width: 116px; height: 116px; margin: 8px auto; background: white;">
                                <img className="badge-image-template" style={{}} src={TemplateData.badgeURL.value || 'assets/icons/amelia.png'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-9" style="width: 73% !important;">
                        {TemplateData.generateTeamSlots(5, 4, 4, undefined, true)}
                        {TemplateData.generateTeamSlots(5, 4, 5, undefined, true)}
                    </div>
                    <div className="col-12">
                        {TemplateData.generateTeamSlots(7, 4, 6, undefined, true)}
                    </div>
                    <div className="col-12">
                        {TemplateData.generateTeamSlots(7, 5, 7, undefined, true)}
                    </div>
                    {/* Elite 4 */}
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-center" style={{ width: `${100}%`, height: 56, marginBottom: 8, backgroundColor: TypeColors[TemplateData.type.value].darker }}>
                            <span style="font-size: 32px; color: white; letter-spacing: 3px;">ELITE 4 TEAM <small>(may include one Mega)</small></span>
                        </div>
                        {TemplateData.generateTeamSlots(7, 5, 8, undefined, true)}
                    </div>
                    {/* Champion */}
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-center" style={{ width: `${100}%`, height: 56, marginBottom: 8, backgroundColor: TypeColors[TemplateData.type.value].darker }}>
                            <span style="font-size: 32px; color: white; letter-spacing: 1px;">FULL TEAM <small>(may include one minor Legendary)</small></span>
                        </div>
                        {TemplateData.generateTeamSlots(7, 6, 9, undefined, true)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template;
