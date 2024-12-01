import Image from "next/image";

const Firm = () => {
  return (
    <div className="max-w-2xl text-center justify-items-center mx-auto mt-16">
      <h3 className="text-3xl md:text-4xl mb-4 lg:text-5xl">Our Firm</h3>

      <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>

      <div className="text-base justify-self-center mt-6 max-w-2xl lg:text-lg">
        <p className="text-center md:text-left">
          The Exigent symbol marks our striving for e
          <span>
              <Image
                src="/assets/small-x.svg"
                alt="x"
                width={16}
                height={16}
                className="w-3 inline"
              />
          </span>
          cellence.
        </p>
        <p className="text-center md:text-left">
          It also serves as a place or item of value.
        </p>
      </div>

      <div className="w-3/4 px-6 md:1/2 mt-12 mx-auto">
        <Image
          src="/assets/Asset12.png"
          alt="Map"
          width={500}
          height={300}
          className="mx-auto w-5/6 lg:w-[90%] px-4"
        />
      </div>
    </div>
  );
};

export default Firm;
