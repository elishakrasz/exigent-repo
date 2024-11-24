import { Bodoni_Moda, Lato } from 'next/font/google'

const bodoni = Bodoni_Moda({
    subsets: ['latin'],
    display: 'swap',
  })
const lato = Lato({
    weight: ['300','700'],
    style: ['normal', 'italic'],
   
  })

const StrategicAdvisors = () => {
  return (
    <div className="mt-36 text-center mx-auto justify-items-center max-w-5xl">
        <h3 className="justify-self-center text-5xl mb-4">Strategic Advisors & Domain Experts</h3>
        <div className="redline justify-self-center mb-8 h-[3px] w-[120px] bg-red-500 rounded"></div>

        <div className="mt-8 mx-auto max-w-6xl grid grid-cols-11 gap-4">
            <div className=" col-span-4 border border-gray-300 px-2">
                <div className={bodoni.className}>
                <img className="mt-10 w-3/5" src="/assets/team/Carter.png" alt="" />
                <p className="text-3xl mt-2 font-normal">Sir General Nick Carter</p>
                <div className={lato.className}>
                <p className="text-[18px] italic mt-2 text-gray-600">Strategic Advisory</p>
                <p className="text-[18px] mb-12  text-gray-600">Aerospace & Defence</p>
                </div>
                
                </div>
            </div>
            <div className="col-span-3 border border-gray-300 px-2">
                <div className={bodoni.className}>
                <img className="mt-14 w-[188px]" src="/assets/team/David.png" alt="" />
                <p className="text-3xl mt-4 font-normal">Dr. Elie David</p>
                <div className={lato.className}>
                <p className="text-[18px] italic mt-2 text-gray-600">Strategic Advisory</p>
                <p className="text-[18px] mb-12  text-gray-600">Artificial Intelligence</p>
                </div>
                
                </div>
            </div>
            <div className=" col-span-4 border border-gray-300 px-2">
                <div className={bodoni.className}>
                <img className="mt-10 w-3/5" src="/assets/team/Hoenlein.png" alt="" />
                <p className="text-3xl mt-2 font-normal ">Hon. Malcom Hoenlein</p>
                <div className={lato.className}>
                <p className="text-[18px] italic mt-2 text-gray-600">Global Ambassador</p>
                <p className="text-[18px] mb-12  text-gray-600">Exigent Family Office</p>
                </div>
                
                </div>
            </div>
            
            
        </div>
       
    </div>
  )
}

export default StrategicAdvisors