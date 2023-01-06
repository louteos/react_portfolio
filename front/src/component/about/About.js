import React from 'react';
import { Section } from 'react-fullpage';
import DB from '../../json/DB.json';
import Ability from './Ability';
import { FaHome, FaComment } from "react-icons/fa";
import { useEffect } from 'react';

function About(props) {
    const about = DB.aboutDB;



    return (
        <Section id={props.id}>

            <div className='d-flex justify-content-center'>
                <div className='aboutdiv d-flex flex-column justify-content-around col-5'>
                    <div className='titlebox text-center'>
                        <strong className="title">ABOUT ME</strong>

                        <table>
                            <tbody>
                                {
                                    about.map((item, index) => {
                                        return (
                                            <tr key={'infoID' + index}>
                                                <th scope='d-flex' className='align-top'>{item.subject}</th>
                                                <td className='ps-5'>{item.text}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-evenly icongroup'>
                            <a href=""><FaHome /></a>
                            <a href=""><FaComment /></a>
                        </div>
                    </div>
                    <div>
                        <div className='titlebox text-center'>
                            <strong class="title">TAG</strong></div>
                        <div className='text-center'>
                            #YESCORD #2차원의선으로 #4차원을잇다<br />
                            #화음을맞추는 #프론트엔드개발자 #김예슬입니다
                        </div>

                    </div>
                </div>

                <div className='skilldiv titlebox d-block col-5 text-cetner'>

                    <Ability></Ability>
                </div>
            </div>



        </Section>
    );
}

export default About;