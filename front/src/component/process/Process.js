import DB from '../../json/DB.json';
import { Section } from 'react-fullpage';
import React from 'react';

function Process(props) {
    const process = DB.processDB;
    return (
        <Section className="text-center p-0 d-lg-flex justify-content-lg-end align-items-lg-center" id={props.id}>
            <div className='process_list d-lg-flex'>
                {
                    process.map((item, index) => {
                        return (
                            <div className={'col-lg-2 processbox_' + (index + 1)} key={'processbox_' + index}>
                                <span className='step'>{item.step}</span>
                                <span className='subject'>{item.subject}</span>
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Section>

    );
}

export default Process;
