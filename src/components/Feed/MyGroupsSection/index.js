"use client"

import Image from 'next/image'
import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="bg-white h-[400px] flex flex-col justify-start items-center mb-3">
                <div className='flex justify-between'>
                    <div className="font-[600] px-8 pt-4 text-[12px] pb-2 uppercase font-[Gotham] text-[#181818] leading-[11.48px]">My Groups</div>
                    <div className="font-[600] px-8 pt-4 text-[12px] pb-2 uppercase font-[Gotham] text-[#A45286] leading-[13.8px]">Edit list</div>
                </div>

                {/* Divider */}
                <hr className="border-t border-[#F4F4F4] w-[230px] mx-auto mt-2" />
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex w-[231px] h-[80px] border border-[#F4F4F4] mt-4 items-center justify-center p-3 gap-[0.5rem]">
                        <Image
                            src="/assets/feed/profile.png"
                            alt="Group"
                            width={100}
                            height={100}
                            className="rounded-full w-[52px] h-[52px]"
                        />
                        <div>
                            <p className="font-medium text-[14px]">Fashion Designing</p>
                            <p className="text-[14px]">University, Lucknow</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
