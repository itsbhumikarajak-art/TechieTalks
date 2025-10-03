import React from 'react'

const Howitworks = () => {
  return (
       <>
       <section className="py-20 overflow-hidden bg-white   ">
  <div className="container px-4 mx-auto">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center -mx-5">
        <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
          <div className="max-w-md">
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">Getting Started</span>
            <h2 className="mt-12 mb-10 text-5xl font-extrabold leading-tight text-black"> Simple 3-step Process </h2>
            <p className="mb-16 text-lg text-black">Download our free mobile app and start building today!</p>
            <a className="inline-block px-12 py-4 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition duration-200" href="#">Get Started</a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-5">
          <ul>
            <li className="flex pb-10 mb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="mr-8">
                <span className="flex justify-center items-center w-14 h-14 bg-blue-800 text-lg font-bold rounded-full text-blue-600 dark:text-blue-300">1</span>
              </div>
              <div className="max-w-xs">
                <h3 className="mb-2 text-lg font-bold text-black"> Sign Up</h3>
                <p className="text-lg text-black  "> Create Your Account.</p>
              </div>
            </li>
            <li className="flex pb-10 mb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="mr-8">
                <span className="flex justify-center items-center w-14 h-14 bg-blue-800   text-lg font-bold rounded-full text-blue-600 dark:text-blue-300">2</span>
              </div>
              <div className="max-w-xs">
                <h3 className="mb-2 text-lg font-bold text-black">Browse Topics</h3>
                <p className="text-lg text-black">Join Trending Discussions.</p>
              </div>
            </li>
            <li className="flex pb-10 border-b border-gray-200 dark:border-gray-700">
              <div className="mr-8">
                <span className="flex justify-center items-center w-14 h-14 bg-blue-800 text-lg font-bold rounded-full text-blue-600 dark:text-blue-300">3</span>
              </div>
              <div className="max-w-xs">
                <h3 className="mb-2 text-lg font-bold text-black">Starting Posting </h3>
                <p className="text-lg text-black">Share your insights or ask questions.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
       </>
  )
}

export default Howitworks