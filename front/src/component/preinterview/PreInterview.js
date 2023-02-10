import { useState, useEffect } from 'react';
import {Section} from 'react-fullpage';
import DB from '../../json/DB.json';

const Preinterview = (props) => {

  const [toggleStatus, toggleStatusfun] = useState(false);
  const [pStatus, pStatusfun] = useState(true);
  const interview = DB.preinterviewDB

  return (
    <Section className="text-center" id={props.id}>
      <div className="container-md text-start">
        <div className="d-flex justify-content-between pb-1">
          <strong class="title">PRE-INTERVIEW</strong>
          <button class="allBtn" onClick={() => {
            toggleStatusfun(!toggleStatus);
            }
            
          }>모두보기</button>
        </div>

        <ul className={toggleStatus ? 'open' : ''}>
          {
            interview.map((item, index) => {
              return (
                <li key={'interview' + index}>

                  <span className='d-block border-1 py-2 px-3' role="button" onClick={ e => {
                    e.target.nextSibling.classList.toggle('d-none') } }>{item.subject}</span>

                  <p className='d-none'>{item.content}</p>
                </li>
              )
            })
          }
        </ul>
      </div>

    </Section>
  )
}



export default Preinterview;