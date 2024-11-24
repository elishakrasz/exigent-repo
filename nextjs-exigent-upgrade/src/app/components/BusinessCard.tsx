import Link from "next/link"

const BusinessCard = () => {
    return (
        <div className="mt-12 mx-auto text-center max-w-5xl grid grid-cols-3 gap-12">
            <div >
                <h1 className="text-xl">Family Office</h1>
                <p className="text-gray-400 text-base">For high-net-worth families</p>
                <img src="/assets/Birds.png" alt="Map" className="w-2/3 mt-8 mx-auto" />
                <Link href="/family" className="mt-8">
                <span className="hover:bg-red-600 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">Learn more</span>
                </Link>  
            </div>
            <div>
                <h1 className="text-xl">Investment Products</h1>
                <p className="text-gray-400 text-base">For well qualified investors</p>
                <img src="/assets/ShipA.jpg" alt="Map" className="w-2/3 h-56 mx-auto" />
                <Link href="/special" className="mt-8">
                <span className="hover:bg-red-600 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">Learn more</span>
                </Link>   
            </div>
            <div>
                <h1 className="text-xl">Strategic Advisory</h1>
                <p className="text-gray-400 text-base">For businesses and corporates</p>
                <img src="/assets/Cufflink.jpg" alt="Map" className="w-2/3  h-52 px-[14px] mt-6 mx-auto" />
                <Link href="/strategic" className="mt-6">
                <span className="hover:bg-red-600 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">Learn more</span>
                </Link>  
            </div>
        </div>
    )
}

export default BusinessCard