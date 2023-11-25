import React, { useState } from 'preact/compat';
import { fetchMoveList, fetchPokemonList } from 'modules/FetchLists';
import Sparkle from '/assets/icons/sparkle-sharp.svg';
import Select from 'react-select';
import { TypeColors } from 'modules/Constants';
import PokemonType from 'modules/emums/PokemonType';
import States from 'modules/States';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import PokemonSearchModal from 'components/pokemon-search/PokemonSearchModal';
import { pokemonList } from 'modules/databases/PokemonList';
import { moveList } from 'modules/databases/MoveList';
import GeneralInfo from 'components/home/general-info';

function initialize() {
    States.pokemonList.value = pokemonList;
    States.moveList.value = moveList;
}

export function Home() {
    initialize();
    const gymLeaderTitleSparkle = <div className="gym-leader-title-sparkle">{new Array(4).fill(<img className="white-icon" src={Sparkle} />)}</div>;

    return (
        <>
            <div id="main-page-pkmn" className="row" style={{ backgroundColor: TypeColors[TemplateData.type.value].base }}>
                <div className="col-12">
                    <div className="row border-bottom mb-2">
                        <div className="col-6">
                            {/* Trainer card title */}
                            <div className="trainer-card-title fw-bold">{'/vp/\'s PRO TRAINER CARD'}</div>
                        </div>
                        <div className="col-6">
                            {/* Type specialist title */}
                            <div className="d-flex align-items-center justify-content-center type-specialist-title" style={{height: 48, color: TypeColors[TemplateData.type.value].darker }}>
                                {PokemonType[TemplateData.type.value]?.toUpperCase()} TYPE SPECIALIST
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <GeneralInfo />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-center gym-leader-title-container" style={{ backgroundColor: TypeColors[TemplateData.type.value].darker }}>
                                {gymLeaderTitleSparkle}
                                <span className="gym-leader-title">GYM LEADER TEAM</span>
                                {gymLeaderTitleSparkle}
                            </div>
                        </div>
                        <div className="col-5">
                            {TemplateData.generateTeamSlots(7, 2, 0, 70)}
                            {TemplateData.generateTeamSlots(7, 3, 1, 70)}
                            {TemplateData.generateTeamSlots(7, 3, 2, 70)}
                            {TemplateData.generateTeamSlots(7, 3, 3, 70)}

                        </div>
                        <div className="col-7">
                            {TemplateData.generateTeamSlots(7, 4, 4, 70)}
                            {TemplateData.generateTeamSlots(7, 4, 5, 70)}
                            {TemplateData.generateTeamSlots(7, 4, 6, 70)}
                            {TemplateData.generateTeamSlots(7, 5, 7, 70)}
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    {/* Elite 4 */}
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-center" style={{width: `${100}%`, height: 56, backgroundColor: TypeColors[TemplateData.type.value].darker, marginBottom: 8 }}>
                            <span style="font-size: 28px; color: white; letter-spacing: 3px;">ELITE 4 TEAM <small>(may include one Mega)</small></span>
                        </div>
                        {TemplateData.generateTeamSlots(9, 5, 8, 70)}
                    </div>
                </div>
                <div className="col-6">
                    {/* Champion */}
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-center" style={{width: `${100}%`, height: 56, backgroundColor: TypeColors[TemplateData.type.value].darker, marginBottom: 8 }}>
                            <span style="font-size: 28px; color: white; letter-spacing: 1px;">FULL TEAM <small>(may include one minor Legendary)</small></span>
                        </div>
                        {TemplateData.generateTeamSlots(9, 6, 9, 70)}
                    </div>
                </div>
            </div>
            {/* Modals calls */}
            {PokemonSearchModal()}
        </>
    );
}
