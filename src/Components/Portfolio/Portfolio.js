import React from 'react';
import Card from './Card/Card';
import style from "./Portfolio.module.css"
import { data } from './PortfolioApi';

const Portfolio = () => {
    return (
        <>
          <div className={style.portfolio} id='portfolio'>
            <div className={style.head}>
               <h2>My Portfolio</h2> 
            </div>

            <div className={style.portfolio_card}>
                {
                  data.map((val)=>{
                    return <Card
                      key={val.id}
                      id={val.id}
                      imgdata={val.imgdata}
                      article={val.article}
                      text={val.text}
                    />
                  })
                }
            </div>
          </div>  
        </>
    )
}

export default Portfolio;
