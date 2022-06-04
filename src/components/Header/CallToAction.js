import React from 'react';
import resume from '../../assets/resume-ansarul-anis.pdf'
import { BsFillFileEarmarkArrowDownFill, BsBoxArrowInUpRight } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';

const CallToAction = () => {
    return (
        <div className='call-to-action'>
            <a className='btn' href={resume} download>My Resume <BsFillFileEarmarkArrowDownFill/></a>
            <a className='btn btn-primary' href='/#contact'>Contact Me <BsBoxArrowInUpRight/></a>
        </div>
    );
};

export default CallToAction;