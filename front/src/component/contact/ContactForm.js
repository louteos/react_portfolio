import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./ContactModal";
import axios from 'axios';

function ContactForm() {

    const [formData, setFormData] = useState([]);
    const [isModal, setisModal] = useState(false);

    const resetForm = () => {
        setFormData({ nm: '', company: '', mail: '', msg: '', agree: '' });
    }

    const { 
        register,
        handleSubmit = (e) => {
            e.preventDefault();
            console.log('리액트',formData);
    
            axios
                .post('/api', {
                        headers : {
                        "Content-Type": `application/json`
                        },              
                        body : formData})
                .then(res => {
                    console.log(res);
                    alert('감사합니다');
                    return res.data;
                })
                .catch(error => {
                    console.error(error);
                });

            resetForm();
        }, 
        formState: { errors }
    } = useForm({
        defaultValues: { nm: '', company: '', mail: '', msg: '', agree: '' }
    });

    const dataHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const modalOn = () => {
        setisModal(true);
        document.body.style.overflow = 'hidden';
    }

    return (
        <div className="col-10 col-lg-4 contactForm d-block">

            {isModal && <Modal setisModal={setisModal} />}
            
            <div className="d-flex justify-content-center align-items-center cBox">
                <strong class="title">CONTACT</strong>
            </div>

            <form onSubmit={handleSubmit()}>
                <div className="form-group">
                    <input type="text" className="fs fs-t" id="nm" {...register("nm", { required: true })} placeholder="NAME" value={formData.nm} onChange={dataHandler} />
                    {errors.nm && <p>이름을 입력해주세요</p>}
                </div>

                <div className="form-group">
                    <input type="text" className="fs fs-t" id="company" {...register("company", { required: true })} placeholder="COMPANY" value={formData.company} onChange={dataHandler} />
                    {errors.company && <p>회사명을 입력해주세요</p>}
                </div>

                <div className="form-group">
                    <input type="text" className="fs fs-t" id="mail" {...register("mail", { required: true })} placeholder="E-MAIL" value={formData.mail} onChange={dataHandler} />
                    {errors.mail && <p>메일을 입력해주세요</p>}
                </div>

                <div>
                    <textarea className="fs" cols="40" rows="4" name="msg" id="msg" {...register("msg")} placeholder="MESSAGE" value={formData.msg} onChange={dataHandler} />
                </div>

                <div class="d-flex justify-content-center align-items-center text-center pt-2 infoagree">
                    <input type="checkbox" class="me-1" id="agree" {...register("agree", { required: true })} />
                    <label for="agree" class="m-0">개인정보 수집이용 동의</label>
                    <button className="popagree" onClick={modalOn}>| 자세히 보기</button>
                </div>
                {errors.agree && <p>개인정보 수집이용에 동의해주세요</p>}

                <div class="d-flex justify-content-center align-items-center pt-3">
                    <input type="submit" value="SEND" />
                </div>
            </form>
        </div>
    );

}

export default ContactForm;