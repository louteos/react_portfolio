import DB from '../../json/DB.json';
import {Section} from 'react-fullpage';
import React from 'react';

function Process(props) {
    const process = DB.processDB;
    return (
        <Section className="text-center p-0" id={props.id}>

                <img src="/img/process_pc.png" className='d-none d-md-flex' alt="" />
                <img src="/img/process_m.png" className='d-flex d-md-none' alt="" />
        </Section>

    );
}

export default Process;
