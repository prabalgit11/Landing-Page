import './Lower.css';
import React from 'react'
import logo1 from '../Image/InstagramLogo.svg'
import logo2 from '../Image/LinkedinLogo.svg'

function Lower() {
  return (
    <div className="lowerLeft">
    <ul>
        <li>Prompt Generator</li>
        <li>Dweep Daily</li>
        <li>All Contributors</li>
        <li>Your data on Dweep.io</li>
        <li>Contribute to Dweep</li>
    </ul>
    <ul className="lowerRight">
        <li>Dweep.io</li>
        <li>Made with love in India</li>
        <li className="lowerLogo">
            <img src={logo1} alt="Linkedin" />
            <img src={logo2} alt="Instagram"/>
        </li>
        <li>hello@dweep.io</li>
    </ul>
</div>
  )
}

export default Lower

