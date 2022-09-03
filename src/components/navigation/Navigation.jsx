import React from 'react'
import "./Navigation.css"
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
import { FiTwitch } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import Logo from "../../images/GameShark.png"

const Navigation = () => {
  return (
      <div className='navBar'>
          <div className="topNav">
              <a href=""><BsInstagram /></a>
              <a href=""><FiTwitter /></a>
              <a href=""><FaFacebookSquare /></a>
              <a href=""><FiTwitch /></a>
              <a href=""><TbBrandDiscord /></a>
              
          </div>
          
          <div className="lowNav">
              <ul className="left">
                  <a href="">Home</a>
                  <a href="">About</a>
                  <a href="">Live Games</a>
                  <a href="">Blog</a>
              </ul>
              <img src={Logo} alt="" className='logo' />
              <ul className="left">
                  <a href="">Latest</a>
                  <a href="">Forum</a>
                  <a href="">Login</a>
                  <a href="">Register</a>
              </ul>
              
            </div>
    </div>
  )
}

export default Navigation