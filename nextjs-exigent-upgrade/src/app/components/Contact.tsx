const Contact = () => {
  return (
    <div className="mt-28 text-center mx-auto justify-items-center">
      <h3 className="text-5xl mb-4">Contact</h3>
      <div className="redline justify-self-center mb-24 h-[3px] w-[120px] bg-red-500 rounded"></div>
      <div className="grid grid-cols-3 gap-16">
        <div className="text-left">
          <div>
            <h1 className="text-lg font-normal font-sans">Jerusalem</h1>
            <p className="text-base font-light font-sans">Wyndham Deeds Street #5</p>
            <p className="mb-8">Jerusalem, Israel</p>

            <h1 className="text-lg font-normal font-sans">Herzliya</h1>
            <p className="text-base font-light font-sans">Arik Einstein #3</p>
            <p className="text-base font-light font-sans mb-36">Herzliya, Israel</p>
          </div>
        </div>
        <div className="text-left">
          <div className="">
            <p className="text-base">Israel 972-2-500-9450</p>
            <p className="mb-8 text-base">US 1-646-506-9450</p>

            <h1 className="text-base text-red-500 font-sans font-light">info@exigentcap.com</h1>
          </div>
        </div>
        <div className="flex space-x-3">
          {/* <a href="https://www.linkedin.com/company/exigentcapitalgroup/" target="_blank" className="mr-4">
                <img src="/assets/LinkedIn-Logo.svg" alt="LinkedIn" className="w-28 transition-opacity duration-300 group-hover:opacity-0" />
              
                <img src="/assets/RedLinkdedin.png" alt="LinkedIn" className="w-28 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </a> */}
          <a
            href="https://www.linkedin.com/company/exigentcapitalgroup/"
            target="_blank"
            className="mr-4 group relative"
          >
            <img
              src="/assets/LinkedIn.png"
              alt="LinkedIn"
              className="w-28 transition-opacity duration-100 group-hover:opacity-0"
            />
            <img
              src="/assets/RedLinkedIn.png"
              alt="LinkedIn Red"
              className="w-28 absolute top-0 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </a>
          <a
            href="mailto:info@exigentcapitalgroup.com"
            target="_blank"
            className="mr-4 group relative inline-block w-6 h-6"
          >
            <img
              src="/assets/Email.png"
              alt="Email Icon"
              className="w-6  transition-opacity duration-100 group-hover:opacity-0"
            />
            <img
              src="/assets/RedMail.png"
              alt="Red Email Icon"
              className="w-6 absolute top-2 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </a>

          <a
            href="mailto:info@exigentcapitalgroup.com"
            target="_blank"
            className="mr-4 group relative inline-block w-6 h-6"
          >
            <img
              src="/assets/Phone Icon.png"
              alt="Email Icon"
              className="w-4 transition-opacity duration-100 group-hover:opacity-0"
            />
            <img
              src="/assets/RedPhone.png"
              alt="Red Email Icon"
              className="w-4 absolute top-2 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </a>

          {/* <a href="https://www.linkedin.com/company/exigentcapitalgroup/" target="_blank" className="">
                <img src="/assets/Email.png" alt="LinkedIn" className="w-6" />
              </a> */}

          {/* <a href="https://www.linkedin.com/company/exigentcapitalgroup/" target="_blank" className="">
                <img src="/assets/Phone Icon.png" alt="LinkedIn" className="w-4" />
              </a> */}

          <a
            href="mailto:info@exigentcapitalgroup.com"
            target="_blank"
            className="mr-4 group relative inline-block w-6 h-6"
          >
            <img
              src="/assets/Location Icon.png"
              alt="Email Icon"
              className="w-4  transition-opacity duration-100 group-hover:opacity-0"
            />
            <img
              src="/assets/RedLocation.png"
              alt="Red Email Icon"
              className="w-4 absolute top-1 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </a>
          {/* <a href="https://www.linkedin.com/company/exigentcapitalgroup/" target="_blank" className="">
                <img src="/assets/Location Icon.png" alt="LinkedIn" className="w-4" />
              </a> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
