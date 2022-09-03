import React from 'react'
import card1 from '../../images/card1.jpg'
import card2 from '../../images/card2.jpg'

const Cards = () => {
  return (
      <div className='card__container'>
          <div className="carding1">
                <div className="card">
                    <img src={card2} alt="" />
                </div>
                <div className="card">
                     <img src={card1} alt="" />
                </div>
                <div className="card">
                    <img src={card2} alt="" />
            </div>
            </div><div className="carding2">
                <div className="card">
                    <img src={card2} alt="" />
                </div>
                <div className="card">
                    <img src={card1} alt="" />
                </div>
                <div className="card">
                    <img src={card2} alt="" />
                </div>
          </div>
      </div>
  )
}

export default Cards