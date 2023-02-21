import DB from '../../json/DB.json';
import { Section } from 'react-fullpage';
import React from 'react';

function Process(props) {
    const process = DB.processDB;
    return (
        <Section className="text-center p-0" id={props.id}>
            <img src="/img/process_pc.png" className='d-none d-md-flex' alt="" />
            <img src="/img/process_m.png" className='d-flex d-md-none' alt="" />

            {
                process.map((item, index) => {
                    return (
                        <div className={'processbox_' + (index+1)} key={'processbox_' + index}>
                            <table>
                                <tr className='d-block'>
                                    <th className='step'>{item.step}</th>
                                    <th>{item.subject}</th>
                                    <br />
                                    <td>{item.text}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </Section>

    );
}

export default Process;
