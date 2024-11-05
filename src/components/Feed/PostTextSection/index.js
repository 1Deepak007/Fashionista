"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaEllipsisH, FaShareAlt } from 'react-icons/fa'

export default function Index() {
    const [expanded, setExpanded] = useState(false);
    // eslint-disable-next-line 
    const [src, setSrc] = useState("/assets/feed/profile.png");

    const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, enim sunt nobis, iste quidem nam mollitia placeat optio sapiente, quam explicabo distinctio reprehenderit excepturi aliquam! Rem at cum neque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, enim sunt nobis, iste quidem nam mollitia placeat optio sapiente, quam explicabo distinctio reprehenderit excepturi aliquam! Rem at cum neque.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, odio eget luctus sodales, turpis ligula volutpat urna, nec efficitur dolor libero non erat. Aenean sit amet quam facilisis, commodo nisi ut, convallis erat.
  `;

    // Determine the trimmed text version (visible in collapsed state)
    const trimmedText = text.substring(0, 340); // Show first  characters
    return (
        <div>
            <div className="bg-white w-[850px] my-4">
                {/* Header Post */}
                <div className="flex justify-between items-center px-4 py-2">
                    <p className="text-[10px] font-[Gotham] leading-[15px]">
                        <span className="text-[#A45286]">Ted Bell, Annette Nguyen</span> and
                        <span className="text-[#A45286]"> Cody Hawkins</span> liked this
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
                        <h1 className="text-[14px] font-[Arial] font-[700]">Aditya Kumar</h1>
                        <span className="text-[10px] font-[Arial] font-[400]">Illustration Designer</span>
                    </div>
                </div>

                {/* Desciption Post */}
                <div className="mt-1 text-gray-600 relative">
                    <div className="relative">
                        <div
                            className={`px-8 mt-4 text-[14px] transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-[100px]'
                                }`}
                        >
                            {/* Show full or trimmed content based on the expanded state */}
                            {expanded ? text : trimmedText + '...'}
                        </div>

                        <button
                            className="px-8 my-2 mt-4 text-[#A45286] text-[12px] font-[Gotham] font-semibold uppercase cursor-pointer transition-all duration-300"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
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
