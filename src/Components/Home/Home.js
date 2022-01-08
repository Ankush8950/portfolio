import React from 'react'
import Homestyle from "./Home.module.css"
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import profile from "../image/profile_bg.png"



const Home = () => {
    return (
        <>
          <div className={Homestyle.home} id='home'>
          <div className={Homestyle.user_datas}>
            <div className={Homestyle.user_data}>
                <h3 className={Homestyle.head}>WELCOME TO MY WORLD</h3>
                <h1 className={Homestyle.head_data}>Hi, I’m <span>Ankush kumar</span><br/>
                    a Developer.
                </h1>
                <p className={Homestyle.para}>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
            </div>
            <div className={Homestyle.icon}>
            <div className={Homestyle.social_icon}>
            <h2 className={Homestyle.social_icon_head}>FIND WITH ME</h2>
                <button className={Homestyle.btn}><a href="https://www.linkedin.com/in/ankush-kumar-275129176/" ><FiFacebook /></a> </button>
                <button className={Homestyle.btn}><a href="https://www.instagram.com/ankushkumar7282/" ><FaInstagram /></a> </button>
                <button className={Homestyle.btn}><a href="https://www.linkedin.com/in/ankush-kumar-275129176/" ><FiLinkedin /></a> </button>
            </div>

            <div className={Homestyle.skillOn}>
            <h2 className={Homestyle.social_icon_head}>BEST SKILL ON</h2>
                <button className={Homestyle.btn}><a href="https://www.linkedin.com/in/ankush-kumar-275129176/" ><FaReact/></a> </button>
                <button className={Homestyle.btn}><a href="https://www.linkedin.com/in/ankush-kumar-275129176/" ><DiJavascript /></a></button>
                <button className={Homestyle.btn}><a href="https://www.linkedin.com/in/ankush-kumar-275129176/" ><DiHtml5 /></a> </button>
            </div>
            </div>
            </div>

            <div className={Homestyle.user_profile}>
                <div className={Homestyle.Overlay}>
                    <img src={profile} alt="profile" />
                </div>
            </div>

          </div>  
        </>
    )
}

export default Home
