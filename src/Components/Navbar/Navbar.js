import React,{ useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-scroll";
import profile from "../image/profile.jpg"

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY >= 200){
      setColorchange(true)
      // console.log(window.scrollY)
    }
    else{
      setColorchange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  const navBackgroundChange = colorChange ? style.navbarMain :  style.navbarColorChange;

  return (
    <>
        <div className={navBackgroundChange}>
          <div className={style.navleft}>
          <div className={style.profile}>
            <img src={profile} alt="user" />
          </div>
            <h2 className={style.heading}>INBIO</h2>
          </div>
          <div className={style.navright}>
            <ul>
               <li><Link 
                         activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-110}
                            duration={500}>
                            <button>HOME</button>
                          </Link></li>
               <li><Link 
                         activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}>
                            <button>PORTFOLIO</button>
                          </Link></li>
               <li><Link 
                         activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}>
                            <button>RESUME</button>
                          </Link></li>
               <li><Link 
                         activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            <button>CONTACT</button>
                          </Link></li>
            </ul>
          </div>
          </div>
    </>
  );
};

export default Navbar;
