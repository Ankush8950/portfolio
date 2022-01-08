import React,{ useState } from 'react'
import cardStyle from "./Card.module.css"

const Card = ({title,details,years}) => {
  const [color, setColor] = useState(false);
  const backgroundStyle = {
    backgroundColor:"",
  }

  if(color){
    backgroundStyle.backgroundColor="red";
  }
  else{
    backgroundStyle.backgroundColor="";
  }


    return (
        <>
          <div className={cardStyle.Card}>
          <div className={cardStyle.circle}>
             <div className={cardStyle.ecprience_circle}>
               <div style={backgroundStyle} onMouseOver={()=> setColor(true)}
                 onMouseOut={()=> setColor(false)}
                className={cardStyle.circle_div}></div>
             </div>
            <div className={cardStyle.line}></div>
          </div>
           <div style={backgroundStyle} onMouseOver={()=> setColor(true)}
              onMouseOut={()=> setColor(false)} className={cardStyle.resume_single_list}>
              <div className={cardStyle.resume_card}>
                <div className={cardStyle.resume_headText}>
                  <div className={cardStyle.title}>
                      <h2>{title}</h2>
                      <p>{years}</p>
                  </div>
                  <div style={backgroundStyle} onMouseOver={()=> setColor(true)}
              onMouseOut={()=> setColor(false)} className={cardStyle.date_of_time}>
                    <h2>4.30/5</h2>
                  </div>
                </div>
                <div className={cardStyle.line}></div>
                <div className={cardStyle.para}>
                  <p>{details}</p>
                </div>
              </div>    
            </div>          
          </div>  
        </>
    )
}

export default Card
