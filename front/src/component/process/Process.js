import DB from '../../json/DB.json';
import { Section } from 'react-fullpage';
import React from 'react';

function Process(props) {
    const process = DB.processDB;
    return (
        <Section className="text-center p-0" id={props.id}>
            <div className='process_list'>
                <div className='process_box0 col-2 border-0'></div>
                {
                    process.map((item, index) => {
                        return (
                            <div className={'col-2 processbox_' + (index + 1)} key={'processbox_' + index}>
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
