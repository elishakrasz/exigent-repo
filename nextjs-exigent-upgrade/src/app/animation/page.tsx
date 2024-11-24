import React from 'react'
import { Bodoni_Moda, Lato } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
    weight: ['300', '700'],
    style: ['normal', 'italic'],
  });
const Animation
 = () => {
  return (
    <div >
         <div className="hero-sec">
      <div className="_1200 w-clearfix">
        <div className="whitescreen" />
        <div className="animation-wrap">
          <div className="animation-txtx">
            <img src="/assets/logo-x.svg" />
          </div>
          <div className="animation-e"><img src="/assets/logo-ani-e.svg" /></div>
          <div className="animation-txt1">
            <p className={lato.className}>traordinary People</p>
          </div>
          <div className="animation-txt2">
            <p>emplary Values</p>
          </div>
          <div className="animation-txt3">
            <p>ceptional Opportunities</p>
          </div>
          <div className="animation-txt4">
            <p>citing</p>
          </div>
          <div className="animation-txtlogo">
            <img src="/assets/logo-ani.svg" />
          </div>
        </div>
        {/* <div className="animation-wrap">
          <div className="animation-txtx">
            <img src="/assets/logo-x.svg" />
          </div>
          <div className="animation-e"><img src="/assets/logo-ani-e.svg" /></div>
          <div className="animation-txt1">
            <p>ceptional</p>
          </div>
          <div className="animation-txt2">
            <p>perienced</p>
          </div>
          <div className="animation-txt3">
            <p>ponential</p>
          </div>
          <div className="animation-txt4">
            <p>citing</p>
          </div>
          <div className="animation-txtlogo">
            <img src="/assets/logo-ani.svg" />
          </div>
        </div> */}
        <div className="part">
          {/* <div className="img-wrap">
            <img src="/assets/santamaria-20190328-arielko-2-p-500.jpeg" />
          </div> */}
          {/* <div className="txt-wrap wide">
            <h1 className="big-head">
              We speak your language, we share your values
            </h1>
            
          </div> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Animation
