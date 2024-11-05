import React from 'react';
import Image from 'next/image';

export default function Network() {
    return (
        <div>
            <div>
                {/* Pages Heading */}
                <div className="space-x-4 flex items-center">
                    <Image src='/assets/pages/pages.png' className='w-[24px] h-[24px]' height={30} width={30} alt='pages icon' />
                    <h2 className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">
                        Pages
                    </h2>
                </div>
                <div className="mb-16 mt-7 space-y-2 w-[850px]">
                    {/* Image Connection Card 1 */}
                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px]">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Go with the Flow</p>
                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Senior graphic designer</p>
                            </div>
                        </div>
                        <div className="w-[3px] h-[42px] bg-[#A45286]"></div>
                        {/* Message Section */}
                        <div className="flex-1 w-[317px]">
                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                            </p>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex space-x-2">
                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                <span className='font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px]'>Pending</span>
                            </button>
                        </div>
                    </div>
                    {/* Image Connection Card 2 */}
                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px]">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Go with the Flow</p>
                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Senior graphic designer</p>
                            </div>
                        </div>
                        <div className="w-[3px] h-[42px] bg-[#A45286]"></div>
                        {/* Message Section */}
                        <div className="flex-1 w-[317px]">
                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                            </p>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex space-x-2">
                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                <span className='font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px]'>Pending</span>
                            </button>
                        </div>
                    </div>
                    {/* Image Connection Card 3 */}
                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px]">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Go with the Flow</p>
                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Senior graphic designer</p>
                            </div>
                        </div>
                        <div className="w-[3px] h-[42px] bg-[#A45286]"></div>
                        {/* Message Section */}
                        <div className="flex-1 w-[317px]">
                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                            </p>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex space-x-2">
                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                <span className='font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px]'>Pending</span>
                            </button>
                        </div>
                    </div>
                    {/* Image Connection Card 4 */}
                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px]">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Go with the Flow</p>
                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Senior graphic designer</p>
                            </div>
                        </div>
                        <div className="w-[3px] h-[42px] bg-[#A45286]"></div>
                        {/* Message Section */}
                        <div className="flex-1 w-[317px]">
                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                            </p>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex space-x-2">
                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                <span className='font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px]'>Pending</span>
                            </button>
                        </div>
                    </div>
                    {/* Image Connection Card 5 */}
                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px]">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Go with the Flow</p>
                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Senior graphic designer</p>
                            </div>
                        </div>
                        <div className="w-[3px] h-[42px] bg-[#A45286]"></div>
                        {/* Message Section */}
                        <div className="flex-1 w-[317px]">
                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                            </p>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex space-x-2">
                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                <span className='font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px]'>Pending</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}