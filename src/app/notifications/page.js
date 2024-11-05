import React from 'react'
import Image from 'next/image' // Importing Next.js Image component

function Page() {
  return (
    <div className='my-[120px] ml-[130px] flex'>
      {/* Left */}
      <div className="w-[290px] h-[480px]">
        <div className="w-auto h-[95px] shadow-md mb-6">
          <p className="px-9 py-2 text-center">Notifications</p>
          <hr />
          <p className="pt-2 px-6 text-center font-semibold">
            Notifications Settings
          </p>
        </div>
        <div className="h-[360px] shadow-lg">
          <div className="space-x-8 w-[230px] mx-auto">
            <span className="font-semibold">Your Dashboard</span>
            <span className="text-right text-[#A45286] font-semibold">Go To stats</span>
          </div>
          <hr className="w-[230px] mx-auto mt-4" />
          <div className="flex flex-col m-4">
            <div className="flex flex-col w-[83px] h-[71px] mb-6">
              <span className="text-[#A45286] font-bold text-[45px] leading-[51.75px] text-left">896</span>
              <span className="text-[16px] text-gray-700">views today</span>
            </div>
            <div className="flex flex-col w-[83px] h-[71px] mb-6">
              <span className="text-[#A45286] font-bold text-[45px] leading-[51.75px] text-left">896</span>
              <span className="text-[16px] text-gray-700">views today</span>
            </div>
            <div className="flex flex-col w-[183px] h-[71px] mb-6">
              <span className="text-[#A45286] font-bold text-[45px] leading-[51.75px] text-left">896</span>
              <span className="text-[16px] text-gray-700">search appearances</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-[850px] ml-10 h-[562px] p-4">
        <div className="w-auto h-[305px]">
          <div className="flex justify-between items-center mb-4">
            <hr className="flex-grow border-t border-gray-300 mx-4" />
            <p>
              Notifications <span className="font-semibold text-[#A45286]">Latest</span>
            </p>
            <hr className="flex-grow border-t border-gray-300 mx-4" />
          </div>

          {/* Job List Items */}
          {Array(3).fill().map((_, index) => (
            <div key={index} className='w-auto h-[78px] mb-4 p-4 border-2 rounded-lg'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <Image src="/path/to/image.jpg" alt="Job image" width={50} height={50} className='mr-4' />
                  <div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl"> jhtdr yjdrg i7g 6r65w e55tf </p>
                    <span className="text-gray-500 text-xs sm:text-sm md:text-base">7656 864</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className='text-[#A45286] text-2xl'>ICON</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Section */}
        <div className="w-auto mt-5 h-[217px]">
          <div className="flex justify-between items-center mb-4">
            <hr className="flex-grow border-t border-gray-300 mx-4" />
            <p>
              Jobs for you <span className="font-semibold text-[#A45286]">Latest</span>
            </p>
            <hr className="flex-grow border-t border-gray-300 mx-4" />
          </div>

          {/* Another Job List */}
          {Array(2).fill().map((_, index) => (
            <div key={index} className='w-auto h-[78px] mb-4 p-4 border-2 rounded-lg'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <Image src="/path/to/image.jpg" alt="Job image" width={50} height={50} className='mr-4' />
                  <div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl"> jhtdr yjdrg i7g 6r65w e55tf </p>
                    <span className="text-gray-500 text-xs sm:text-sm md:text-base">7656 864</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className='text-[#A45286] text-2xl'>ICON</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
