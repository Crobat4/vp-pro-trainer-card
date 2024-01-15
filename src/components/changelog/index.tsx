import React from 'preact/compat';
import ChangelogItem from 'components/changelog/ChangelogItem';
import { ChangelogList } from 'modules/changelog/ChangelogList';

function ChangelogContent() {
    const itemList = ChangelogList.map((cLog, key) => {
        const versionDateText = `${cLog.version} ${cLog.description ? `- ${cLog.description} ` : ''} (${cLog.getDateString()})`;

        const versionDate = <ChangelogItem key={key} title={'Update'} description={versionDateText} variant={'secondary'} active={true} />;
        const addedList = cLog.items.added?.map((desc, key) => {
            return <ChangelogItem key={key} title={'New'} description={desc} variant={'success'} />;
        });
        const changedList = cLog.items.changed?.map((desc, key) => {
            return <ChangelogItem key={key} title={'Changes'} description={desc} variant={'primary'} />;
        });
        const fixedList = cLog.items.fixed?.map((desc, key) => {
            return <ChangelogItem key={key} title={'Fix'} description={desc} variant={'warning'} />;
        });
        const removedList = cLog.items.removed?.map((desc, key) => {
            return <ChangelogItem key={key} title={'Removed'} description={desc} variant={'danger'} />;
        });
        return (
            <>
                {versionDate}
                {addedList}
                {changedList}
                {fixedList}
                {removedList}
            </>
        );
    });

    return (
        <table className={'table table-hover w-100 m-0'}>
            <thead></thead>
            <tbody>
                {itemList}
            </tbody>
        </table>
    );
}

export default ChangelogContent;
