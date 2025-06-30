import React from 'react'
import line from "./images/Line.png"
import skilldetails from "./skillsdetails"


export const Skills = () => {
  return (
    <div>
      <section>
      <div className="mainskillssec">
            <div className="skillsheadersec">
                <h2 data-aos="fade-down">SKILLS</h2>
                <img src={line} alt="line" data-aos="fade-left" />
            </div>
            <div className="skillsmainchildsec" >
              {skilldetails.map((alldata,index)=>
              <div key={index} className='skillsubchild' data-aos="zoom-in" >
                <div className="childskills">
                  <img src={alldata.skillimage} alt=""  />
                <h4>{alldata.skillname}</h4>
                </div>
 
              </div>
              )}

            </div>
        </div>
      </section>
        
    </div>
  )
}
