import React from 'react'
import Image from 'next/image'

export default function Hashtag() {
    return (
        <div>
            <div>
                {/* Hashtag Heading */}
                <div className="space-x-2 flex items-center">
                    <Image src='/assets/hashtag/hashtag.png' className='w-[21px] h-[21px]' height={30} width={30} alt='hashtags icon' />
                    <h2 className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">
                        Hashtags
                    </h2>
                </div>
                {/* Hashtag Section */}
                <div className="mb-10 mt-6 h-[576px] w-[843px] bg-[#fff]">
                    <div className="w-[843px] flex flex-wrap p-5 items-center mt-4 gap-[0.5rem] rounded-[4px]">
                        {/* Hashtag */}
                        <div className="bg-[#A45286] text-white min-w-[51px] h-[23px] flex justify-center rounded-[4px] items-center py-[4px] px-[14px] text-[12px] font-[Gotham] leading-[13.8px]">
                            <span className='font-[Arial] font-[700px] text-white text-[12px] leading-[13.8px]'>All</span>
                        </div>
                        {/* Hashtag */}
                        <div className="bg-[#A45286] text-white min-w-[51px] h-[23px] flex justify-center rounded-[4px] items-center py-[4px] px-[14px] text-[12px] font-[Gotham] leading-[13.8px]">
                            <span className='font-[Arial] font-[700px] text-white text-[12px] leading-[13.8px]'>Favourite</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}