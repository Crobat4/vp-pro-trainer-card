import React, { useState } from 'preact/compat';
import { TypeColors } from 'modules/Constants';
import PokemonType from 'modules/emums/PokemonType';
import States from 'modules/States';
import Data from 'modules/Data';
import PokemonSearchModal from 'components/pokemon-search/PokemonSearchModal';
import { MoveList } from 'modules/databases/MoveList';
import GeneralInfo from 'components/home/general-info';
import GymTeam from 'components/home/gym-team';
import EliteTeam from 'components/home/elite-team';
import { FullPokemonList } from 'modules/databases/FullPokemonList';
import AlcremieModal from 'components/alcremie';

function initialize() {
    States.pokemonList.value = FullPokemonList;
    States.moveList.value = MoveList;
}

export function Home() {
    initialize();

    return (
        <>
            <div id="main-page-pkmn" className="row m-0 align-items-center" style={{ backgroundColor: TypeColors[Data.type.value].base }}>
                <div className="col-12">
                    <div className="row border-bottom mb-2">
                        <div className="col-xl-6 col-12">
                            {/* Trainer card title */}
                            <div className="trainer-card-title fw-bold">{'/vp/\'s PRO TRAINER CARD'}</div>
                        </div>
                        <div className="col-xl-6 col-12">
                            {/* Type specialist title */}
                            <div className="d-flex align-items-center justify-content-center type-specialist-title"
                                style={{backgroundColor: States.darkMode.value ? TypeColors[Data.type.value].darker : 'white', color: States.darkMode.value ? 'white' : TypeColors[Data.type.value].darker }}>
                                {PokemonType[Data.type.value]?.toUpperCase()} TYPE SPECIALIST
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-12">
                    <GeneralInfo />
                </div>
                <div className="col-xl-8 col-12">
                    <GymTeam />
                </div>
                <div className="col-12">
                    <EliteTeam />
                </div>
            </div>
            {/* Modals calls */}
            <PokemonSearchModal />
            <AlcremieModal />
        </>
    );
}
