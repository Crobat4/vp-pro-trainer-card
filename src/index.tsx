import React from 'preact/compat';
import { Component, render } from 'preact';
import 'styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { fetchMoveList, fetchPokemonList } from './modules/FetchLists';
import Sparkle from '/assets/icons/sparkle-sharp.svg';
import Select from 'react-select';
import { TypeColors, typeSelect } from 'modules/Constants';
import PokemonType from 'modules/emums/PokemonType';
import TemplateModal from 'components/trainer-card-preview/TemplateModal';
import GeneratePokemonSlot from 'modules/GenerateSlot';
import States from 'modules/States';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import PokemonImageList from 'components/pokemon-search/PokemonSearchModal';
import Loader from 'components/Loader';


export class App extends Component {
    state = { value: '', checked: false, file: null, showOptions: false, noResultsMessage: 'Type 2 more characters' };

    openDialog() {
        document.getElementById('badge-file').click();
    }

    handleChange = e => {
        TemplateData.badgeURL.value = URL.createObjectURL(e.target.files[0]);
    };

    inputEntered(inputText) {
        const inputMinCharacters = 2;
        if (inputText.length >= inputMinCharacters) {
            this.setState({ showOptions: true, noResultsMessage: (inputMinCharacters - inputText.length) <= 0 ? 'No results' : '' });
        } else {
            this.setState({ showOptions: false, noResultsMessage: (inputMinCharacters - inputText.length) === 1 ? 'Type 1 more character' : `Type ${(inputMinCharacters - inputText.length)} more characters` });
        }
    }

    initialize() {
        // Fill the Pokemon and Moves arrays
        States.pokemonList.value = fetchPokemonList();
        let moveArray = [];
        if (States.pokemonList.value.length) { // Need Pokemon List to finish, otherwise, it will try to build both lists at the same time
            if (!States.moveList.value.length) {
                moveArray = fetchMoveList();
            }
            if (moveArray?.length) {
                States.moveList.value = moveArray?.filter((m) => m); // Remove all undefined elements
            }
        }
        // Initialize slots count
        States.count = 0;
    }

    render() {
        this.initialize();
        const signatureSize = 180;
        const gymLeaderTitleSparkle = <div className="gym-leader-title-sparkle">{new Array(4).fill(<img className="white-icon" src={Sparkle} />)}</div>;
        return (
            <>
                <Loader />
                <div id="main-page-pkmn" className="row" style={{ backgroundColor: TypeColors[TemplateData.type.value].base }}>
                    <div className="col-12">
                        <div className="row border-bottom">
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
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                {/* Type select */}
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={typeSelect()[0]}
                                    name="color"
                                    isSearchable={false}
                                    onChange={(type) => {
                                        TemplateData.type.value = type.value;
                                    }}
                                    options={typeSelect()}
                                />
                            </div>
                            <div className="col-6">
                                {/* Theme title */}
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon3">Theme</span>
                                    <input type="text" value={TemplateData.theme.value} className="form-control" id="pkmn-theme" maxLength={30} placeholder="" onChange={(e) => {
                                        TemplateData.theme.value = (e.target as HTMLTextAreaElement).value;
                                    } } />
                                </div>
                            </div>
                            <div className="col-6 signature-img-container">
                                {/* Signature */}
                                <div className="align-center fw-bold signature-title" style={{ color: TypeColors[TemplateData.type.value].darker }}>Signature PKMN</div>
                                <GeneratePokemonSlot
                                    slotID={States.count}
                                    baseSize={signatureSize}
                                />
                                {/* Move list */}
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={{ value: null, label: 'Search move...' }}
                                    name="color"
                                    isDisabled={!States.moveList.value.length}
                                    noOptionsMessage={() => this.state.noResultsMessage}
                                    isSearchable={true}
                                    styles={{control: (base) => ({...base, width: signatureSize, margin: 'auto'}), menuList: (base) => ({...base, maxHeight: 200})}}
                                    onInputChange={(e) => this.inputEntered(e)}
                                    onChange={(move) => {
                                        TemplateData.move.value = move.label;
                                    }}
                                    options={this.state.showOptions ? States.moveList.value : []}
                                />
                            </div>
                            <div className="col-6">
                                {/* Badge */}
                                <div className="align-center fw-bold badge-title" style={{ color: TypeColors[TemplateData.type.value].darker }}>Badge</div>
                                <button id="badge-file-button" className="btn btn-light d-block mx-auto p-0 badge-img-container" style={{ width: signatureSize, height: signatureSize }} onClick={this.openDialog}>
                                    <img className={`badge-image ${TemplateData.badgeURL.value ? 'w-100' : ''}`} style={{}} src={TemplateData.badgeURL.value || ''} />
                                    <div className={'badge-file-button-bg'} style={{ backgroundImage: !TemplateData.badgeURL.value ? 'url("assets/icons/upload.svg")' : '' }}></div>
                                </button>
                                <input type="file" onChange={this.handleChange} accept={'image/*'} className="form-control" hidden id="badge-file" />
                                {/* Template button */}
                                <TemplateModal />
                            </div>
                        </div>
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

                {PokemonImageList()}
            </>
        );
    }
}



// Inject our app into the DOM
render(<App />, document.getElementById('app'));
