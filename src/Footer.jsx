import React from 'react'
import copyright from "./images/footercopyright.png"
import instagram from "./images/footerinstagram.png"
import linkedin from "./images/footerlinkedin.png"
import x from "./images/footerx.png"

export const Footer = () => {
  return (
    <div>
        <div className="mainfooterdiv">
            <div className="copyrightsdiv">
                <img src={copyright} alt=""/>
                <h4 >Santhosh. All Rights Reserved</h4>
            </div>
            <div className="centerimgfooter">
                <img src={instagram} alt=""/>
                <img src={x} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <div className="policyfooter">
                <h4 >Privacy Policy</h4>
                <div  className="circle"></div>
                <h4 >Refund Policy</h4>
            </div>
        </div>
    </div>
  )
}
