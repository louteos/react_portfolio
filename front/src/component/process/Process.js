import DB from '../../json/DB.json';
import {Section} from 'react-fullpage';
import React from 'react';

function Process(props) {
    const process = DB.processDB;
    return (
        <Section className="text-center p-0" id={props.id}>
            <div>작업중</div>
        </Section>

    );
}

export default Process;
