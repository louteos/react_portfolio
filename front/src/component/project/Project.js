import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Section} from 'react-fullpage';
import DB from '../../json/DB.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { FaGithub, FaRegFile } from "react-icons/fa";

function Project(props) {
  const swiperDB = DB.projectDB;
  return (
    <Section id={props.id}  data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <Swiper className='workSection'
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={65}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => {
        }}
        onSwiper={(swiper) => {}}
      >
        {
          swiperDB.map((item, index) =>{
            return(
              <SwiperSlide className={item.cls} key={index}>
                <div className='d-block d-lg-flex position-relative justify-content-between p-3'>
                  <div className='slideImg col-12 col-lg-5 d-flex align-items-center'>
                    <img src={item.img} className="img-fluid" alt={item.title} />
                  </div>
                  <div className='slideTxt col-12 col-lg-4 bg-white'>
                    <h2>{item.title}</h2>
                    <div className='keyword py-2 px-3'>
                      {
                        item.hash.map((k,i)=>{
                          return(
                            <span key={i}>{k}</span>
                          )
                        })
                      }
                    </div>
                    <div className='explain p-3'>
                      <table>
                        <tr>
                          <th>개발기간</th>
                          <td>{item.time}</td>
                        </tr>
                        <tr>
                          <th>담당직무</th>
                          <td>{item.work}</td>
                        </tr>
                        <tr>
                          <th>작업내용</th>
                          <td>{item.ex}</td>
                        </tr>
                      </table>
                      <div className='icons'>
                        <a href={item.href[0]}><FaGithub /></a>
                        <a href={item.href[1]}><FaRegFile /></a>
                      </div>
                    </div>
                    <a href={item.href[1]}><button>
                      <div className='d-flex justify-content-between'>
                        <span>사이트 바로가기</span><span>→</span>
                      </div>
                    </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </Section>
  )
}

export default Project;