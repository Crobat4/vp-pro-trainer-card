import React from 'preact/compat';

type Props = {
    children: React.ReactNode,
    iconWidth: number,
    iconElement: React.JSX.Element,
    titleClass?: string,
    iconBackground?: boolean,
    onClick?: () => void,
}

function SidebarMenuItem({ iconWidth, iconElement, titleClass = '', iconBackground = true, onClick }: Props) {
    const iconMargin = 10;
    return (
        <a className={'sidebar-menu-item text-decoration-none text-reset d-block list-group-item list-group-item-action p-0 border-0'} href={'#'} onClick={onClick}>
            <div className={'d-flex align-items-center text-truncate'}>
                <div className={`d-flex align-items-center justify-content-center ${iconBackground ? 'bg-body-secondary' : ''}`}
                    style={{flex: `0 0 ${iconWidth - (iconMargin * 2)}px`, height: iconWidth - (iconMargin * 2), margin: iconMargin}}>
                    {iconElement}
                </div>
                <div className={titleClass}>{this.props.children}</div>
            </div>
        </a>
    );
}

export default SidebarMenuItem;
