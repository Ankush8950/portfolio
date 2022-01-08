import React from 'react'
import NavbarSec from '../NavbarSec/NavbarSec'
import Education from './Education/Education'
import style from "./Resume.module.css"

const Resume = () => {
    return (
        <>
          <div className={style.resumeMain} id='resume'>
            <div className={style.head}>
                <h1>My Resume</h1>
            </div>

            <div className={style.resumenav}>
                <div className={style.secondNav}>
                    <NavbarSec />
                 <div className={style.educationInfo}>   
                    <Education />
                    <Education />
                 </div>
                </div> 
            </div>
          </div>  
        </>
    )
}

export default Resume
