import React, { useState } from 'preact/compat';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { List, XLg, Clock, CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';

function MenuSidebar() {
    const [collapsed, setCollapsed] = useState(true);
    const menuWidth = 60;
    const expandBar = 12;
    return (
        <>
            <div style={{flex: `0 0 ${menuWidth + expandBar}px`}}>
                <div className={'menu-sidebar d-flex position-absolute top-0 start-0 h-100 bg-light'}>
                    <Sidebar collapsed={collapsed} collapsedWidth={`${menuWidth}px`} onBackdropClick={() => setCollapsed(!collapsed)} className={'h-100'}>
                        <Menu menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                // only apply styles on first level elements of the tree
                                if (level === 0) {
                                    return {
                                        //color: disabled ? '#f5d9ff' : '#d359ff',
                                        //backgroundColor: active ? '#eecef9' : undefined,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                    };
                                }
                            },
                        }}>
                            <MenuItem className={'border-bottom border-light-subtle fw-bold'}
                                icon={<img src={'assets/icons/crobat.png'} width={25} />}>
                                {'/vp/\'s PRO TRAINER CARD'}
                            </MenuItem>
                            <MenuItem className={'icon-bg'} icon={<Clock />}> Changelog </MenuItem>
                            <MenuItem className={'icon-bg'} icon={<Clock />}> Credits </MenuItem>
                            <MenuItem className={'icon-bg'} icon={<Clock />}> Export JSON </MenuItem>
                            <MenuItem className={'icon-bg'} icon={<Clock />}> Import JSON </MenuItem>
                            <MenuItem className={'icon-bg'} icon={<Clock />}> FAQ </MenuItem>
                            <MenuItem className={'icon-bg'} icon={<Clock />}> Github </MenuItem>
                        </Menu>
                    </Sidebar>
                    <div className={'expand-button btn p-0 rounded-0 border-0 h-100 d-flex align-items-center justify-content-center'}
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
