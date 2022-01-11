import React from 'react'
import cardStyle from "./Card.module.css"
import { FiHeart } from "react-icons/fi";

const Card = ({imgdata}) => {
    return (
        <>
         <div className={cardStyle.card}>
            <div className={cardStyle.container}>
                    <div className={cardStyle.card_image}>
                        <img src={imgdata} alt="personal portfolio images" />
                    </div>
                    <div className={cardStyle.card_haed}>
                       <h3 className={cardStyle.text}>Devlopment</h3>
                       <h3 className={cardStyle.icons}><FiHeart /> <span>600</span></h3> 
                    </div>
                    <div className={cardStyle.card_text}>
                        <h1>The services provide for design </h1>
                    </div>
            </div>
         </div>   
        </>
    )
}

export default Card
