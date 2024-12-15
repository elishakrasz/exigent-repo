import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Investments = () => {
  return (
    <div className="text-center mx-auto max-w-[460px] mt-16 md:max-w-4xl lg:mt-24 lg:max-w-5xl xl:max-w-5xl">
      <h3 className="text-3xl px-6 md:px-36 md:text-4xl">
        Notable Investments & Partnerships
      </h3>

      <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>

      <div className="mt-12 mx-auto text-base max-w-[280px] md:max-w-3xl md:mx-12 md:grid md:grid-cols-3 lg:flex lg:max-w-6xl">
        {/* Investment 1 */}
        <div className="mt-6 text-base">
          <div>
            <Image
              src="/assets/investments/XAI.png"
              alt="xAI Logo"
              width={64}
              height={64}
              className="mx-auto"
            />
          </div>
          <div className="mt-8 text-[18px] md:mt-9 md:text-sm md:w-full md:px-2 md:leading-6 lg:text-base xl:text-[18px] xl:w-66 xl:leading-7">
            <h1 className={lato.className}>
              <span className="font-light italic">
                We are early backers of Elon Musk in his mission to build the
                worlds leading artificial intelligence company, xAI
              </span>
            </h1>
          </div>
        </div>

        {/* Investment 2 */}
        <div className="mt-8 px-4">
          <div>
            <Image
              src="/assets/investments/HP.png"
              alt="HighPost Capital Logo"
              width={56}
              height={56}
              className="mx-auto"
            />
          </div>
          <div className="mt-6 text-[18px] md:w-full md:px-2 xl:w-66 xl:px-10 xl:leading-7">
            <h1 className={lato.className}>
              <span className="font-light md:text-sm lg:text-base md:leading-6 xl:text-[18px] italic">
                We are GP partners with Bezos and Moros families in HighPost
                Capital and anchor investors in the firms consumer-focused
                investment funds
              </span>
            </h1>
          </div>
        </div>

        {/* Investment 3 */}
        <div className="mt-8">
          <div className="lg:w-64 px-4">
            <Image
              src="/assets/investments/Insightec.png"
              alt="Insightec Logo"
              width={160}
              height={100}
              className="mx-auto mt-6"
            />
          </div>
          <div className="mt-11 text-[18px]  md:w-full md:px-2 xl:w-66 xl:leading-7">
            <h1 className={lato.className}>
              <span className="font-light md:text-sm lg:text-base md:leading-6 xl:text-[18px] italic">
                We are board members and major shareholders in Insightec, the
                world leader in incisionless brain surgery
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
