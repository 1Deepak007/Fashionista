"use client"

import React from 'react'
import Image from 'next/image'
import { FaEllipsisH, FaShareAlt } from 'react-icons/fa'

export default function Index() {
    return (
        <div>
            <div className="bg-white h-[402px] my-4">
                <div className="flex justify-between items-center px-4 py-2">
                    <p className="leading-[15px] text-[10px] font-[Gotham] text-[#181818]">
                        High rated post from your feed
                    </p>
                    {/* Share Pointers */}
                    <FaEllipsisH className="text-[#181818] hover:text-primary cursor-pointer w-[20px] h-[24px]" />
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
                        <h1 className="text-[14px] font-[Arial] font-[700]">Nikhil Gupta</h1>
                        <span className="text-[10px] font-[Arial] font-[400]">Senior Fashion Designer</span>
                    </div>
                </div>

                {/* Desciption Post */}
                <div className=" text-gray-600 mt-4 px-8">
                    <p className='text-[14px] font-[400] leading-[21px] font-[Arial]'>There is some new guidelines for Fashion Designers</p>
                    <div className="mt-3 space-y-4">
                        <div className="w-[790px] h-[80px] bg-[#FFE3EF] flex items-center p-[1.3rem] rounded-lg">
                            {/* Documnet Image */}
                            <Image
                                width={100}
                                height={100}
                                src="/assets/feed/document.png"
                                alt="Circular"
                                className="w-[42px] h-[42px] rounded-full object-cover position-center"
                            />

                            {/* Text */}
                            <div className=" space-y-3 px-[0.5rem]">
                                <p className="ml-4 text-base text-[14px] font-[Arial] font-[400] text-[#181818]">Fashion guidelines for Illustration designers</p>
                                <span className="pl-4 text-[#181818] text-[10px] leading-[15px] font-[Gotham]">PDF file, 324 kb</span>
                            </div>

                            {/* Icon in the Right */}
                            <div className="ml-auto  mr-[1rem]">
                                <Image
                                    width={100}
                                    height={100}
                                    src='/assets/feed/download.png'
                                    className='w-[24px] h-[24px]'
                                    alt="download" />
                            </div>
                        </div>
                        <div className="w-[790px] h-[80px] bg-[#FFE3EF] flex items-center p-[1.3rem] rounded-lg">
                            {/* Documnet Image */}
                            <Image
                                width={100}
                                height={100}
                                src="/assets/feed/document.png"
                                alt="Circular"
                                className="w-[42px] h-[42px] rounded-full object-cover position-center"
                            />

                            {/* Text */}
                            <div className=" space-y-3 px-[0.5rem]">
                                <p className="ml-4 text-base text-[14px] font-[Arial] font-[400] text-[#181818]">Fashion guidelines for Graphic Designer </p>
                                <span className="pl-4 text-[#181818] text-[10px] leading-[15px] font-[Gotham]">PDF file, 245 kb</span>
                            </div>

                            {/* Icon in the Right */}
                            <div className="ml-auto  mr-[1rem]">
                                <Image
                                    width={100}
                                    height={100}
                                    src='/assets/feed/download.png'
                                    className='w-[24px] h-[24px]'
                                    alt="download" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Border Bottom of Post */}
                <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-4 mb-3"></div>

                {/* Stats Post */}
                <div className="flex justify-between items-center px-9 mb-4 mt-4">
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
