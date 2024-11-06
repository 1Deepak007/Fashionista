"use client"
import Image from 'next/image'
import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="space-y-2 w-[850px] mt-2 mb-6">
                {/* Image Jobs Card 1 */}
                <div className="w-full h-[115px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-4">
                        <div className='h-[76px]'>
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">UX/UI designer</p>
                            <div className='flex gap-[0.5rem]'>
                                <div className="font-[Arial] mt-[0.35rem] text-[#181818] text-[10px] font-[400] leading-[15px]">Upwork</div>
                                <div className="font-[Arial] mt-[0.35rem] text-[#18181899] text-[10px] font-[400] leading-[15px]">Remote only</div>
                            </div>
                            <span className="font-[Gotham] w-[405px] h-[30px] mt-2 text-[#181818] text-[10px] leading-[15px]">
                                On Upwork you&apos;ll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters,
                            </span>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex space-x-2">
                        <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                            <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>More</span>
                        </button>
                    </div>
                </div>
                {/* Image Jobs Card 2 */}
                <div className="w-full h-[115px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-4">
                        <div className='h-[76px]'>
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Product designer</p>
                            <div className='flex gap-[0.5rem]'>
                                <div className="font-[Arial] mt-[0.35rem] text-[#181818] text-[10px] font-[400] leading-[15px]">Facebook</div>
                                <div className="font-[Arial] mt-[0.35rem] text-[#18181899] text-[10px] font-[400] leading-[15px]">CA, USA</div>
                            </div>
                            <span className="font-[Gotham] w-[405px] h-[30px] mt-2 text-[#181818] text-[10px] leading-[15px]">
                                Founded in 2004, Facebook&apos;s mission is to give people the power to build community and bring the world closer together. People use our products to stay..
                            </span>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex space-x-2">
                        <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                            <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>More</span>
                        </button>
                    </div>
                </div>
                {/* Image Jobs Card 3 */}
                <div className="w-full h-[115px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-4">
                        <div className='h-[76px]'>
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Part-time UX designer</p>
                            <div className='flex gap-[0.5rem]'>
                                <div className="font-[Arial] mt-[0.35rem] text-[#181818] text-[10px] font-[400] leading-[15px]">Google</div>
                                <div className="font-[Arial] mt-[0.35rem] text-[#18181899] text-[10px] font-[400] leading-[15px]">International</div>
                            </div>
                            <span className="font-[Gotham] w-[405px] h-[30px] mt-2 text-[#181818] text-[10px] leading-[15px]">
                            Search the world&apos;s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&apos;re looking.
                            </span>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex space-x-2">
                        <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                            <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>More</span>
                        </button>
                    </div>
                </div>
                {/* Image Jobs Card 4 */}
                <div className="w-full h-[115px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-4">
                        <div className='h-[76px]'>
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Web designer</p>
                            <div className='flex gap-[0.5rem]'>
                                <div className="font-[Arial] mt-[0.35rem] text-[#181818] text-[10px] font-[400] leading-[15px]">LinkedIn</div>
                                <div className="font-[Arial] mt-[0.35rem] text-[#18181899] text-[10px] font-[400] leading-[15px]">CA, USA</div>
                            </div>
                            <span className="font-[Gotham] w-[405px] h-[30px] mt-2 text-[#181818] text-[10px] leading-[15px]">
                            LinkedIn, the world&apos;s largest professional network. The mission of LinkedIn is simple: connect the world&apos;s professional.
                            </span>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex space-x-2">
                        <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                            <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
