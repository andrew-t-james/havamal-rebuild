import React, { useState } from 'react'
import { Link } from 'gatsby'

const Nav = () => {

    const [isExpanded, toggleExpansion] = useState(false)
  
    return (
      <nav className="lg:w-1/2  my-0 mx-auto flex items-center flex-nowrap lg:from-transparent lg:via-blue lg:to-transparent lg:bg-gradient-to-r lg:p-2">
        <div className="block lg:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 text-yellow">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-md font-sans lg:flex lg:justify-center lg:flex-grow">
            <Link to={`/page-2`} className="block mt-4 px-4 lg:inline-block lg:mt-0 text-yellow hover:text-white">
              Home
            </Link>
            <Link to={`/page-2`} className="block mt-4 px-4 lg:inline-block lg:mt-0 text-yellow hover:text-white">
              Music
            </Link>
            <Link to={`/page-2`} className="block mt-4 px-4 lg:inline-block lg:mt-0 text-yellow hover:text-white">
              Media
            </Link>
            <Link to={`/page-2`} className="block mt-4 px-4 lg:inline-block lg:mt-0 text-yellow hover:text-white">
              Saga
            </Link>
            <Link to={`/page-2`} className="block mt-4 px-4 lg:inline-block lg:mt-0 text-yellow hover:text-white">
              Raids
            </Link>
            <Link to={`/page-2`} className="block mt-4 px-4 lg:inline-block lg:mt-0 text-yellow hover:text-white">
              Resources
            </Link>
          </div>
        </div>
      </nav>
    )
  }

export default Nav