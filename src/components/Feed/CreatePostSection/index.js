"use client"

import Image from 'next/image'
import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'

export default function Index() {
    return (
        <div>
            <div className="bg-white h-[135px] p-5 my-4 rounded-[4px]">
                <div className="flex items-center space-x-4">
                    <p className="text-[12px] pl-3 font-semibold font-[Gotham] text-[#181818] uppercase">NEW POST</p>
                </div>
                <hr className=" w-[790px] h-[1px] mx-auto mt-4 bg-[#D7D7D7] mb-4" />
                <div className="flex items-center px-2 justify-between text-[18px]">
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="flex-grow mt-[-11px] p-1 text-[18px] rounded-md focus:outline-none placeholder:text-[#18181833] placeholder:text-[18px]"
                    />
                    <div className="flex space-x-4 items-center">
                        {/* Link */}
                        <Image width={500} height={500} src='/assets/feed/link.png' className='w-[24px] h-[24px]' alt='link' />
                        {/* Image */}
                        <Image width={500} height={500} src='/assets/feed/picture.png' className='w-[24px] h-[24px]' alt='image' />
                        {/* Video */}
                        <Image width={500} height={500} src='/assets/feed/video.png' className='w-[24px] h-[24px]' alt='video' />
                        <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#bb679c] rounded-[4px]">
                            <BsFillSendFill className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
