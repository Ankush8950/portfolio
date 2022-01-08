import React from 'react'
import style from "./Education.module.css"
import Card from "../Card/Card"
import { Educationdata } from './Educationapi'

const Education = () => {
    return (
        <>
          <div className={style.education} id='education'>
             <div className={style.eduQuality}>
                <div className={style.heading}>
                    <div className={style.years}>
                        2015 <span> - </span> 2021
                    </div>
                    <h1>Education Quality</h1>
                </div>
                <div className={style.experience_list}>
                   {
                       Educationdata.map((val)=>{
                           return <Card 
                              title={val.title}
                              details={val.details} 
                              years={val.year} 
                           />
                       })
                   }
                </div>
             </div>   
          </div>  
        </>
    )
}

export default Education
