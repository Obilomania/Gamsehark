import React from 'react'
import card1 from '../../images/card1.jpg'
import card2 from '../../images/card2.jpg'
import card3 from '../../images/card3.jpg'
import card4 from '../../images/card4.jpg'
import card5 from '../../images/card5.jpg'
import card6 from '../../images/card6.jpg'

const Cards = () => {
  return (
      <div className='card__container'>
          <div className="carding1">
                <div className="card">
                    <img src={card1} alt="" />
                </div>
                <div className="card">
                     <img src={card2} alt="" />
                </div>
                <div className="card">
                    <img src={card3} alt="" />
            </div>
            </div><div className="carding2">
                <div className="card">
                    <img src={card4} alt="" />
                </div>
                <div className="card">
                    <img src={card5} alt="" />
                </div>
                <div className="card">
                    <img src={card6} alt="" />
                </div>
          </div>
      </div>
  )
}

export default Cards