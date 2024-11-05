"use client"

import Image from 'next/image'
import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="bg-white w-[290px] h-[280px] text-center mb-3">
                <Image
                    src="/assets/feed/cover.png"
                    alt="Cover"
                    width={290}
                    height={120}
                    className="object-cover mb-4 w-[290px] h-[120px]"
                />
                <div className="relative w-[100px] h-[100px] mx-auto">
                    <Image
                        src="/assets/feed/profile.png"
                        alt="Profile"
                        width={100}
                        height={100}
                        className="rounded-full border-4 w-[100px] h-[100px] border-white object-cover -mt-16"
                    />
                </div>
                <div className="mt-1 mb-2 text-[14px] font-[700] font-[Arial]">Aditya Kumar Kanaujiya</div>
                <p className="text-[#181818] text-[12px] px-7 h-[45px] text-center font-[400] font-[Arial] leading-[18px]">
                    Freelance Fashion designer, 80+ projects in graphic design, textile design and creative projects. Open to offers.
                </p>
            </div>
        </div>
    )
}
