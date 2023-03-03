import DB from '../../json/DB.json';
import React from 'react';

function Ability(props) {

    const ability = DB.abilityDB[0];
    const abilityE = DB.abilityDB[1].ETC;
    const keyArr = Object.keys(ability);
    const valArr = Object.values(ability);
    const ekeyArr = Object.values(abilityE);

    return(
        <div className='abilityDiv d-flex flex-column justify-content-evenly justify-content-lg-between'>

            <div className='mainSkill col'>

                <div className='titlebox text-center'><strong class='title'>MAIN SKILL</strong></div>
                
                <div className='skills'>
                {
                    valArr.map((item,index)=>{
                        return(
                            <div className='main'>
                                <span key={index} class="d-none d-md-block">{keyArr[index]}</span>
                                
                                {
                                    item.map((k,i)=>{
                                        return(
                                            <div className='d-flex m-2' key={i}>
                                                <div className='skillName d-flex align-items-center col-3'>
                                                    <img src={k.img}></img>
                                                    <span>{k.skill}</span>
                                                </div>
                                                <div className='progress col-7 col-lg-8'>
                                                    <div className={'progress-bar progress-bar-' + `${k.percent}` } aria-valuenow={k.percent} aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span>{k.percent}%</span>
                                            </div>
                                        ) 
                                    })
                                }
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <div className='etcSkill col'>
                <div className='titlebox text-center'><strong class='title'>ETC.</strong></div>
                
                <div className='skills d-flex justify-content-evenly mx-auto col-7'>

                    {
                        ekeyArr.map((x,y)=>{
                            return(
                                <div className='skillName d-flex align-items-center col-2' key={y}>
                                    <img src={x.img}></img>
                                    <span>{x.skill}</span>
                                </div>  
                            )
                        })
                    }      

                </div>
            </div>
        </div>
    )

}

export default Ability;