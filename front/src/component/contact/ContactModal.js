import React, { useEffect } from 'react';

function Modal({ setisModal }) {

    const modalOff = () => {
        setisModal(false);
        document.body.style.overflow = 'unset';
    }
    return (
        <div className="popup_bg fixed-top" onClick={modalOff}>
            <div className='popup' onClick={e=>e.stopPropagation()}>
                <h4>| 개인정보 수집이용 동의</h4>
                <hr />
                개인정보보호법에 따라 컨택폼을 사용하시는 담당자님께 개인정보 수집에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.<br />
                <br />
                1. 수집하는 개인정보<br />
                &nbsp;귀하께서는 컨택폼을 통하지 않아도 카카오톡 메신저를 통해 관리자와 연락이 가능합니다. 다만 컨택폼을 통해 연락을 원하실 경우, 원활한 소통을 위해 필요한 최소한의 정보를 수집합니다.<br />
                &nbsp;- 관리자는 필수항목으로 성함, 회사명, 담당자 이메일주소를 수집합니다.<br />
                <br />
                2. 수집한 개인정보의 이용<br />
                &nbsp;담당자는 수집한 정보를 귀사와의 소통을 목적으로만 개인정보를 이용합니다.<br />
                <br />
                3. 개인정보의 보관기간<br />
                &nbsp;필요성이 완전히 소거될 시, 수집된 정보는 파기합니다.<br />
                <br />
                4. 개인정보 수집 및 이용 동의를 거부할 권리<br />
                &nbsp;귀하께서는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 다만 컨택폼을 이용한 연락 요청 시 수집하는 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우 이메일을 통한 회신은 불가능합니다.
                <hr />
                <button onClick={modalOff}>확인</button>
            </div>
        </div>
    );
}

export default Modal;