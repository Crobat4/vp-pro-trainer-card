import React, { useState } from 'preact/compat';
import { CaretRightFill, CaretLeftFill, MoonStarsFill, SunFill, ClockHistory, PeopleFill } from 'react-bootstrap-icons';
import SidebarMenuItem from 'components/menu-sidebar/SidebarMenuItem';
import States from 'modules/States';
import ModalTemplate from 'components/shared/ModalTemplate';
import CreditsContent from 'components/credits';
import ChangelogContent from 'components/changelog';

function MenuSidebar() {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarMinWidth = 60;
    const sidebarMaxWidth = 280;
    const expandBar = 12;

    // Changelog
    const [showChangelog, setShowChangelog] = useState(false);
    const handleShowChangelog = () => setShowChangelog(true);
    const handleCloseChangelog = () => setShowChangelog(false);

    // Credits
    const [showCredits, setShowCredits] = useState(false);
    const handleShowCredits = () => setShowCredits(true);
    const handleCloseCredits = () => setShowCredits(false);

    // Dark mode
    const [darkMode, setDarkMode] = useState(true);
    const handleClickDarkMode = () => {
        setDarkMode(!darkMode);
        States.darkMode.value = darkMode;
        document.documentElement.setAttribute('data-bs-theme', `${darkMode ? 'dark' : 'light'}`);
    };

    return (
        <>
            <div className={'sidebar-margin'}>
                <div className={'menu-sidebar d-flex position-absolute top-0 start-0 h-100 bg-body position-fixed'}>
                    <div className={`offcanvas offcanvas-start show overflow-hidden border-0 position-relative list-group sidebar ${collapsed ? 'collapsed' : ''}`}
                        style={{position: 'unset', transition: '0.2s', minWidth: 0}}
                        data-bs-backdrop="false" data-bs-scroll="true" id="offcanvas" aria-labelledby="offcanvasLabel">
                        <div className={`offcanvas-header p-0 ${collapsed ? 'text-truncate' : ''}`}>
                            <SidebarMenuItem
                                iconWidth={sidebarMinWidth} iconBackground={false}
                                iconElement={<img className={'mw-100'} src={'assets/icons/crobat.png'} />}
                                titleClass='fw-bold'
                            >
                                {'/vp/\'s PRO TRAINER CARD'}
                            </SidebarMenuItem>
                        </div>
                        <div className={`offcanvas-body p-0 ${collapsed ? 'text-truncate' : ''}`}
                            style={!collapsed ? {width: sidebarMaxWidth} : {}}>
                            <SidebarMenuItem iconWidth={sidebarMinWidth} iconElement={<ClockHistory />} onClick={handleShowChangelog}>
                                Changelog
                                <ModalTemplate title={'Changelog'} bodyClass='p-0' show={showChangelog} onClose={handleCloseChangelog}>
                                    <ChangelogContent />
                                </ModalTemplate>
                            </SidebarMenuItem>
                            <SidebarMenuItem iconWidth={sidebarMinWidth} iconElement={<PeopleFill />} onClick={handleShowCredits}>
                                Credits
                                <ModalTemplate title={'Credits'} show={showCredits} onClose={handleCloseCredits}>
                                    <CreditsContent />
                                </ModalTemplate>
                            </SidebarMenuItem>
                        </div>
                        <div className={'sidebar-footer position-absolute bottom-0 bg-body-tertiary w-100'}>
                            <SidebarMenuItem iconWidth={sidebarMinWidth} iconElement={darkMode ? <MoonStarsFill /> : <SunFill />}
                                onClick={(handleClickDarkMode)}>
                                {darkMode ? 'Dark' : 'Light'} Mode
                            </SidebarMenuItem>
                        </div>
                    </div>
                    <div className={'expand-button btn p-0 rounded-0 border-0 h-100 d-flex align-items-center justify-content-center bg-body-secondary'}
                        style={{width: expandBar}}
                        onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <CaretRightFill /> : <CaretLeftFill />}
                    </div>
                </div>
            </div>
            <div
                className={`overlay ${!collapsed ? 'visible' : ''}`}
                onClick={() => !collapsed && setCollapsed(!collapsed)}
            />
        </>
    );
}

export default MenuSidebar;
