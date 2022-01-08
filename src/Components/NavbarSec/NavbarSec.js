import React from 'react'
import navStyle from "./NavbarSec.module.css"
import { Link } from 'react-scroll'

const NavbarSec = () => {
    return (
        <>
           <div className={navStyle.NavbarSec}>
                <ul>
                    <li>
                    <Link 
                         activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-110}
                            duration={500}>
                            <button>Education</button>
                        </Link>
                        </li>

                        <li><Link 
                         activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-110}
                            duration={500}>
                            <button>Professsinol Skills</button>
                        </Link></li>
                    {/* <li><button>Professsinol Skills</button></li> */}
                    <li><button>Experience</button></li>
                    <li><button>Interview</button></li>      
                </ul>
           </div> 
        </>
    )
}

export default NavbarSec;
