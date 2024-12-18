import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <div>
         <Link
          href="/family"
          className="text-sm inline-block mt-4 hover:bg-[#F5101E] hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn more
        </Link>
    </div>
  )
}

export default Button