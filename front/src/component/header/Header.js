import { useRef, useState, useEffect} from 'react';
import Logo from './Logo';
import Navi from './Navi';
import { FaBars, FaTimes } from "react-icons/fa";

function Header(props){
  const targetRef = useRef(null); 
  const [isMobile, setisMobile ] = useState(false);
  const [naviOpen, setnaviOpen ] = useState(false);

  const resizeHandler =() =>{
    if( window.innerWidth <= 767 ){
      setisMobile(true);
    }else{
      setisMobile(false);
    }
    setnaviOpen(false);
  }

  useEffect(() => {   
    resizeHandler();
    const timer = setInterval(() => {
      window.addEventListener('resize', resizeHandler )
    }, 100);
    return () => {
      clearInterval(timer); 
      window.removeEventListener('resize', resizeHandler )
    };
  }, []);
  
    return(
        <header ref={targetRef} id="hd" className="d-flex justify-content-between align-items-center px-lg-5 fixed-top">
          <h1 className="mb-0">
            <a href={targetRef} className="d-block">
              <Logo></Logo>
            </a>
          </h1>
          <button className='btn d-md-none' id="allMenu" onClick={ e => {               
            setnaviOpen(!naviOpen)
            console.log(naviOpen)
            
          }} >{naviOpen? <FaTimes /> : <FaBars /> }</button>          
         
         <Navi cls={ isMobile ? 'mobileNavi' :  '' } toggle={ naviOpen ? 'on' : '' }  />
        </header>
    )
  }
export default Header;
  