import React from 'preact/compat';

type Props = {
    key: number,
    title: string,
    description: string,
    variant: string,
    active?: boolean,
}

function ChangelogItem({ key, title, description, variant, active = false }: Props) {
    return (
        <tr className={active ? 'table-active' : ''}>
            <td style={{ width: '1%', verticalAlign: 'middle' }}>
                <span className={`badge w-100 text-uppercase text-bg-${variant}`}>{title}</span>
            </td>
            <td>
                <span key={key}>{description}</span>
            </td>
        </tr>
    );
}

export default ChangelogItem;
