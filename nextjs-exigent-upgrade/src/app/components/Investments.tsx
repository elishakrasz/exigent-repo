import {Bodoni_Moda, Lato} from 'next/font/google'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
})
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
})

const Investments = () => {
  return (
    <div className='text-center mx-auto max-w-4xl justify-items-center'>
      <h3 className="justify-self-center text-5xl mb-4 mt-[36px]">
        Notable Investments & Partnerships
      </h3>

      <div className="head-small-red-line h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
      <div className="mt-16 mx-auto max-w-5xl grid grid-cols-3 gap-16">
        <div>
          <div>
            <img className="w-16" src="/assets/investments/XAI.png" alt="" />
          </div>
          <div className="mt-12 max-w-2/3">
            <h1 className={lato.className}>
              <span className="font-light text-[18px] italic">
                We are early backers of Elon Musk in his mission to build the world's leading
                artificial intelligence company, xAI
              </span>
            </h1>
          </div>
        </div>
        <div>
          <div>
            <img className="w-14" src="/assets/investments/HP.png" alt="" />
          </div>
          <div className="mt-12 max-w-2/3">
            <h1 className={lato.className}>
              <span className="font-light text-[18px] italic">
                We are GP partners with Bezos and Moros families in HighPost Capital and anchor investors in the firm's consumer-focused investment funds
              </span>
            </h1>
          </div>

        </div>
        <div>
          <div className="">
            <img className="mt-6 w-40" src="/assets/investments/Insightec.png" alt="" />
          </div>
          <div className="mt-[68px] max-w-2/3">
            <h1 className={lato.className}>
              <span className="font-light text-[18px] italic">
                We are board members and major shareholers in Insightec, the world leader in incisionless brain surgery
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investments
