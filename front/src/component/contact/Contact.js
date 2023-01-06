import React from 'react';
import {Section} from 'react-fullpage';
import ContactForm from './ContactForm';


function Contact(props) {
    return (
        <Section className="text-center" id={props.id}>
            <div className="contianer d-block d-lg-flex justify-content-evenly align-items-center">
                <div className='col-10 col-lg-5 d-flex'>
                    <img src="/img/namecard.png" alt="" className='img-fluid'/>
                </div>
                <ContactForm></ContactForm>
            </div>
        </Section>
    );
}

export default Contact;