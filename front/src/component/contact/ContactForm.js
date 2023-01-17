import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";


function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="col-10 col-lg-4 contactForm d-block">
            <div className="d-flex justify-content-center align-items-center cBox">
                <strong class="title">CONTACT</strong>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" className="fs fs-t" id="nm" {...register("nm", { required: true })} placeholder="NAME" />
                    {errors.nm && <p>이름을 입력해주세요</p>}
                </div>

                <div className="form-group">
                    <input type="text" className="fs fs-t" id="company" {...register("company", { required: true })} placeholder="COMPANY" />
                    {errors.company && <p>회사명을 입력해주세요</p>}
                </div>

                <div className="d-flex">
                    <div className="form-group col">
                        <input type="text" className="fs fs-t" id="mail" {...register("mail", { required: true })} placeholder="E-MAIL" />
                        {errors.mail && <p>메일을 입력해주세요</p>}
                    </div>

                    <span className="text-center px-2">@</span>

                    <div className="form-group col selectBox">
                        <select className="fs fs-t" id="mailAd" {...register("mailAd", { required: true })}>
                            <option disabled selected>SELECT</option>
                            <option value="구글">gmail.com</option>
                            <option value="네이버">naver.com</option>
                            <option value="다음">daum.net</option>
                            <option value="self">직접입력</option>
                        </select>
                        {errors.mail && <p>상세주소를 입력해주세요</p>}

                        <div className="d-none p-0" id="selfAd">
                            <div className="col-10 p-0"><input type="text" className="fs fs-t" name="mail" /></div>
                        </div>
                    </div>
                </div>

                <div>
                    <textarea className="fs" cols="40" rows="4" name="msg" id="msg" placeholder="MESSAGE"></textarea>
                </div>

                <div class="d-flex justify-content-center align-items-center text-center pb-1 pt-1 infoagree">
                    <input type="checkbox" class="me-1" id="agree" {...register("agree", { required: true })} /><label for="agree" class="m-0">개인정보 수집이용 동의</label>
                    <span class="ms-2"><a href="#popup_agree">| 자세히 보기</a></span>

                </div>
                {errors.agree && <p>개인정보 수집이용에 동의해주세요</p>}


                <div class="d-flex justify-content-center align-items-center">
                    <input type="submit" value="SEND" />
                </div>
            </form>

            <div id="popup_agree" class="position-absolute bg-white justify-content-center align-items-center">
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
                <button>확인</button>
            </div>
        </div>
    );
}

export default ContactForm;