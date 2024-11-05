import Image from 'next/image'
import React from 'react'

export default function Teammates() {
    return (
        <div>
            <div>
                {/* Teammates Heading */}
                <div className="space-x-4 flex items-center">
                    <h2 className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">
                        Teammates
                    </h2>
                </div>
                {/* Teams Section */}
                <div className="mb-10 mt-6">
                    <div className="w-[847px] h-[440px] bg-[#FFFFFF] flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center'>
                            <Image src="/assets/teammates/group.png" className='w-[72px] h-[67px]' width={100} height={100} alt="Teammates Icon" />
                            <p className="font-[Arial] text-[12px] font-[700] text-[#181818] leading-[13.8px]">No Teammates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
