import Scrollspy from "react-scrollspy";
import DB from '../../json/DB.json';

function Navi(props){
    const navi = DB.naviDB;
    return(
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' + props.cls + ' ' + props.toggle } items={[navi[0].href,navi[1].href,navi[2].href, navi[3].href, navi[4].href, navi[5].href]} currentClassName="is-current">
     
        {
          navi.map((item, index) =>{
            return(
              <li id={ 'naviID'+index } key={ 'naviID'+index } ><a href={item.href} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.subject}</a></li>
            )
          })
        }
      </Scrollspy>
    )
  }

  export default Navi;