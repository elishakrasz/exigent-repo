import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Investments = () => {
  return (
    <div className="text-center mt-12 mx-auto max-w-4xl justify-items-center">
      <h3 className="text-2xl max-w-[240px] sm:max-w-[300px] sm:text-3xl md:text-3xl md:max-w-4xl lg:text-4xl lg:max-w-4xl">
        Notable Investments & Partnerships
      </h3>

      <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>

      <div className="mt-12 mx-auto max-w-[280px] md:max-w-[340px] text-base lg:flex lg:max-w-6xl">
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
          <div className="mt-8 md:text-[18px] md:mt-10 lg:w-64 px-4">
            <h1 className={lato.className}>
              <span className="font-light italic">
                We are early backers of Elon Musk in his mission to build the
                worlds leading artificial intelligence company, xAI
              </span>
            </h1>
          </div>
        </div>

        {/* Investment 2 */}
        <div className="mt-10 lg:w-64 px-4">
          <div>
            <Image
              src="/assets/investments/HP.png"
              alt="HighPost Capital Logo"
              width={56}
              height={56}
              className="mx-auto"
            />
          </div>
          <div className="mt-8 md:text-[18px] md:mt-10 lg:mt-4 lg:w-64 px-4">
            <h1 className={lato.className}>
              <span className="font-light md:text-[18px] italic">
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
          <div className="mt-10 lg:max-w-full lg:mt-12 lg:w-64 px-4">
            <h1 className={lato.className}>
              <span className="font-light md:text-[18px] italic">
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
