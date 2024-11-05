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
                <div className="mb-10 mt-6">
                    <div className="w-[843px] h-[576px] flex flex-wrap bg-[#fff] rounded-[4px]">
                        <div className="flex p-5 space-x-2">
                            <div className="w-[51px] h-[23px] flex justify-center items-center bg-[#A45286] rounded-[4px]">
                                <span className='font-[Arial] font-[700px] text-white text-[12px] leading-[13.8px]'>All</span>
                            </div>
                            <div className="w-[51px] h-[23px] flex justify-center items-center bg-[#A45286] rounded-[4px]">
                                <span className='font-[Arial] font-[700px] text-white text-[12px] leading-[13.8px]'>Favourite</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}