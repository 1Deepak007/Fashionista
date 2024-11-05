"use client"

import React from 'react'
import Image from 'next/image'
import { FaEllipsisH, FaShareAlt } from 'react-icons/fa'

export default function index() {
    return (
        <div>
            <div className="bg-white w-[850px] h-auto my-4">
                {/* Header Post */}
                <div className="flex justify-between items-center px-4 py-2">
                    <p className="text-[10px] font-[Gotham] leading-[15px]">
                        <span className="text-[#A45286]">Audrey Alexander </span>
                        comment this
                    </p>

                    {/* Share Pointers */}
                    <FaEllipsisH className="text-[#181818] cursor-pointer hover:text-primary w-[20px] h-[24px]" />
                </div>

                {/* Border Top of Post */}
                <div className="w-[850px] h-[1px] bg-[#F4F4F4] mb-3"></div>

                {/* User Info */}
                <div className="flex items-center mt-3 space-x-4 px-8">
                    <Image
                        src="/assets/feed/profile.png"
                        alt="Profile"
                        width={100}
                        height={100}
                        className="rounded-full w-[52px] h-[52px]"
                        onError={() => setSrc("/Images/Images1.png")}
                    />
                    <div className='flex flex-col'>
                        <h1 className="text-[14px] font-[Arial] font-[700]">Prashant</h1>
                        <span className="text-[10px] font-[Arial] font-[400]">Product designer at Fashionista</span>
                    </div>
                </div>

                {/* Desciption Post */}
                <div className="mt-1 text-gray-600 relative">
                    <div className="relative">
                        <div
                            className={`px-8 mt-4 text-[14px] transition-all duration-500 ease-in-out overflow-hidden max-h-[100px]'
                  }`}
                        >
                            How’s your day going, guys?
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-5">
                    <Image
                        src="/assets/feed/bc.png"
                        alt="Post Image"
                        width={790}
                        height={300}
                        className="object-cover mx-auto w-[790px] mb-6 h-[300px]"
                    />
                </div>

                {/* Border Bottom of Post */}
                <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-1 mb-3"></div>

                {/* Stats Post */}
                <div className="flex justify-between items-center pb-[16px] px-9 mb-4 mt-4">
                    {/* Stats */}
                    <div className="relative flex gap-[4rem]"> {/* Increased spacing */}
                        {/* Likes */}
                        <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                            <Image
                                height={100}
                                width={100}
                                alt='like'
                                src='/assets/feed/like.png'
                                className='w-[13.12px] h-[13.12px]'
                            />
                            <span className="text-[14px] font-semibold font-[Gotham]">28</span>
                        </div>
                        {/* Stats Border */}
                        <div className="absolute w-[1px] left-[4.4rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
                        {/* Comments */}
                        <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                            <Image
                                height={100}
                                width={100}
                                alt='like'
                                src='/assets/feed/comment.png'
                                className='w-[13.12px] h-[13.12px]'
                            />
                            <span className="text-[14px] font-semibold font-[Gotham]">79</span>
                        </div>
                        {/* Stats Border */}
                        <div className="absolute w-[1px] left-[11rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
                    </div>
                    {/* Share Btn */}
                    <div className="relative flex items-center space-x-2">
                        {/* Stats Border */}
                        <div className="absolute w-[1px] left-[-1.5rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
                        <FaShareAlt className="text-primary text-[20px]" />
                        <span className="text-[14px] font-semibold font-[Gotham]">SHARE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
