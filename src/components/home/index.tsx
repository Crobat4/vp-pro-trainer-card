import React, { useState } from 'preact/compat';
import { TypeColors } from 'modules/Constants';
import PokemonType from 'modules/emums/PokemonType';
import States from 'modules/States';
import Data from 'modules/Data';
import PokemonSearchModal from 'components/pokemon-search/PokemonSearchModal';
import { PokemonList } from 'modules/databases/PokemonList';
import { MoveList } from 'modules/databases/MoveList';
import GeneralInfo from 'components/home/general-info';
import GymTeam from 'components/home/gym-team';
import EliteTeam from 'components/home/elite-team';

function initialize() {
    States.pokemonList.value = PokemonList;
    States.moveList.value = MoveList;
}

export function Home() {
    initialize();

    return (
        <>
            <div id="main-page-pkmn" className="row" style={{ backgroundColor: TypeColors[Data.type.value].base }}>
                <div className="col-12">
                    <div className="row border-bottom mb-2">
                        <div className="col-6">
                            {/* Trainer card title */}
                            <div className="trainer-card-title fw-bold">{'/vp/\'s PRO TRAINER CARD'}</div>
                        </div>
                        <div className="col-6">
                            {/* Type specialist title */}
                            <div className="d-flex align-items-center justify-content-center type-specialist-title" style={{height: 48, color: TypeColors[Data.type.value].darker }}>
                                {PokemonType[Data.type.value]?.toUpperCase()} TYPE SPECIALIST
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <GeneralInfo />
                </div>
                <div className="col-8">
                    <GymTeam />
                </div>
                <div className="col-12">
                    <EliteTeam />
                </div>
            </div>
            {/* Modals calls */}
            {PokemonSearchModal()}
        </>
    );
}
