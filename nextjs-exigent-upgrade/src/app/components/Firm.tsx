const Firm = () => {
  return (
    <div className="text-center justify-items-center mx-auto max-w-3xl mt-36">
      <h3 className="justify-self-center text-5xl mb-4">Our Firm</h3>
      <h1></h1>
      <div className="head-small-red-line h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
      <div className="justify-self-center">
        <p className="text-left">
          The Exigent symbol marks our striving for e
          <span>
            <img src="../../../assets/small-x.svg" alt="x" className="inline" />
          </span>
          cellence.
        </p>
        <p className="text-left">It also serves as a place or item of value.</p>
      </div>

      <img src="/assets/Asset12.png" alt="Map" className="w-1/2 mt-12 mx-auto" />
    </div>
  )
}

export default Firm
