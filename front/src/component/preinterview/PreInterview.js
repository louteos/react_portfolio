import { useState, useEffect } from 'react';
import { Section } from 'react-fullpage';
import DB from '../../json/DB.json';

const Preinterview = (props) => {

  const [toggleStatus, toggleStatusfun] = useState(false);
  const interview = DB.preinterviewDB

  return (
    <Section className="text-center" id={props.id}>
      <div className="container-md text-start">
        <div className="d-flex justify-content-between pb-1">
          <strong class="title">PRE-INTERVIEW</strong>
          <button class="allBtn" onClick={() => {
            var answer = document.querySelectorAll('li > p');
            if (toggleStatus == false) {
              for (var i = 0; i < answer.length; i++) {
                answer[i].classList.remove('d-none');
                toggleStatusfun(!toggleStatus);
              }
            } else {
              for (var i = 0; i < answer.length; i++) {
                answer[i].classList.add('d-none');
                toggleStatusfun(!toggleStatus);
              }
            }
          }
          }>{ toggleStatus? '전체닫기' : '전체보기' }</button>
        </div>

        <ul>
          {
            interview.map((item, index) => {
              return (
                <li key={'interview' + index}>
                  <span className='d-block border-1 py-2 px-3' role="button" onClick={e => {
                    e.target.nextSibling.classList.toggle('d-none')
                  }}>{item.subject}</span>
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