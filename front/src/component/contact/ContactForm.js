import React from "react";

function ContactForm() {

  return (
    <div className="col-10 col-lg-4 contactForm d-block">
        <div className="d-flex justify-content-center align-items-center cBox">
        <strong class="title">CONTACT</strong>
        </div>
        <form>
            <div className="form-group">
                <input type="text" className="fs fs-t" name="nm" id="nm" placeholder="NAME" required/>
                <div class="invalid-feedback">
                    이름을 입력해주십시오.
                </div>
            </div>

            <div className="form-group">
                <input type="text" className="fs fs-t" name="company" id="company" placeholder="COMPANY" required/>
                <div class="invalid-feedback">
                    회사을 입력해주십시오.
                </div>
            </div>

            <div className="d-flex">
                <div className="form-group col">
                    <input type="text" className="fs fs-t" name="mail" id="mail" placeholder="E-MAIL" required/>
                    <div class="invalid-feedback">
                        메일을 입력해주십시오.
                    </div>
                </div>
                <span className="text-center px-2">@</span>
                <div className="form-group col selectBox">
                    <select className="fs fs-t" name="mailAd" id="mailAd" required>
                        <option disabled selected>SELECT</option>
                        <option value="구글">gmail.com</option>
                        <option value="네이버">naver.com</option>
                        <option value="다음">daum.net</option>
                        <option value="self">직접입력</option>
                    </select>
                    <div class="invalid-feedback">
                            주소를 선택해주십시오.
                    </div>
                    <div className="d-none p-0" id="selfAd">
                        <div className="col-10 p-0"><input type="text" className="fs fs-t" name="mail"/>
                        <div class="invalid-feedback">
                            나머지 주소를 입력해주십시오.
                        </div>
                        </div>
                        <div className="col-2 p-0"><button><i className="xi-close"></i></button></div>
                    </div>
                </div>
            </div>
            <div>
                <textarea className="fs" cols="40" rows="4" name="msg" id="msg" placeholder="MESSAGE"></textarea>
            </div>
        </form>
    </div>
  );
}

export default ContactForm;