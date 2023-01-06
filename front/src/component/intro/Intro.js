import React from 'react';
import {Section} from 'react-fullpage';

function Intro(props) {
    return (
        <Section className="text-center" id={props.id}>
            <div className='d-flex flex-column flex-lg-row justify-content-evenly align-items-center'>
                <h1>FRONTEND<br />DEVELOPER</h1>
                <div className='intropic'>
                    <img src="/img/intro.gif" alt="메인이미지" className="img-fluid" />
                </div>
                <h1>프론트엔드 개발자<br />김예슬입니다</h1>
            </div>
        </Section>
    );
}

export default Intro;