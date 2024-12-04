import React from 'react'
import './animate.css'
import localFont from 'next/font/local'

const bodoniTrue = localFont({ src: '../../fonts/bodoni/bodoni-book-bt.ttf'})




const Animate = () => {
  return (
    <div>
        <div className={`${bodoniTrue.className}`}>
      <div className="_1200 w-clearfix homepage">
        <div className="whitescreen" />
        <div className="animation-wrap">
          {/* <!-- <img src="../images/exigent-ani.svg" /> --> */}

          <div className={`${bodoniTrue.className} animation-txtx`}>
            <img src="/assets/logo-x.svg" />
          </div>
          <div className="animation-e"><img src="/assets/logo-ani-e.svg" /></div>
          <div className={`${bodoniTrue.className} animation-txt1`}>
            <p>traordinary People</p>
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
        <div className="mx-auto text-center max-w-[620px]">
          <div className="">
            {/* <!-- <img src="../images/tictac.svg" /> --> */}
            <img src="/assets/santamaria-20190328-arielko-2-p-500.jpeg" className='hidden lg:w-1/2' />
          </div>
          <div className="mt-20 lg:mt-20 ">
            <h1 className={`${bodoniTrue.className} px-4 text-gray-500 font-light text-2xl`}>
            Exigent is a diversified financial services company with three
            distinct businesses.
            </h1>
            <div className=""></div>
            <div className="h-[3px] w-[100px] bg-red-500 rounded mx-auto mt-6"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Animate