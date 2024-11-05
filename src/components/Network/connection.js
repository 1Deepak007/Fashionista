// Connections.js
import React from 'react';
import Image from 'next/image';

export default function Connection() {
    return (
        <div className="Connections">
            <div className="mb-24 space-y-8">
                {/* Connections Section */}
                <div className="text-center space-x-4 flex ">
                    <p className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">Connections</p>
                </div>

                {/* Connection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem]">
                    {/* Connection Card 1 */}
                    <div className="bg-[#fff] w-[251px] h-[136px] rounded-[4px]">
                        {/* Top Card Container */}
                        <div className="p-2">
                            {/* Header Card */}
                            <div className="flex px-2 justify-between items-center">
                                <div className="font-[Arial] font-[700] text-[13px] leading-[14.95px] uppercase">Today</div>
                                <Image alt='three dots' height={100} width={100} src='/assets/network/connections/threedots.png' className='w-[24px] h-[24px] cursor-pointer' />
                            </div>
                            {/* Card Description */}
                            <div className="flex my-[0.93rem] px-2 gap-[0.5rem]">
                                <div className="w-[33px] h-[33px] font-[Arial] text-[16px] flex justify-center items-center text-white bg-[#A45286] border-[1px] border-[#A45286] rounded-[4px] leading-[18.4px]">
                                    10+
                                </div>
                                <div className="w-min h-[28px] font-[Arial] text-[12px] font-[700] text-[#A45286] uppercase">New Connection</div>
                            </div>
                        </div>
                        {/* Bottom Card Container */}
                        <div className="flex justify-between">
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See stats</span>
                            </div>
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See all</span>
                            </div>
                        </div>
                    </div>

                    {/* Connection Card 2 */}
                    <div className="bg-[#fff] w-[251px] h-[136px] rounded-[4px]">
                        {/* Top Card Container */}
                        <div className="p-2">
                            {/* Header Card */}
                            <div className="flex px-2 justify-between items-center">
                                <div className="font-[Arial] font-[700] text-[13px] leading-[14.95px] uppercase">Last Week</div>
                                <Image alt='three dots' height={100} width={100} src='/assets/network/connections/threedots.png' className='w-[24px] h-[24px] cursor-pointer' />
                            </div>
                            {/* Card Description */}
                            <div className="flex my-[0.93rem] px-2 gap-[0.5rem]">
                                <div className="w-[33px] h-[33px] font-[Arial] text-[16px] flex justify-center items-center text-white bg-[#A45286] border-[1px] border-[#A45286] rounded-[4px] leading-[18.4px]">
                                    100
                                </div>
                                <div className="w-min h-[28px] font-[Arial] text-[12px] font-[700] text-[#A45286] uppercase">New Connection</div>
                            </div>
                        </div>
                        {/* Bottom Card Container */}
                        <div className="flex justify-between">
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See stats</span>
                            </div>
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See all</span>
                            </div>
                        </div>
                    </div>

                    {/* Connection Card 3 */}
                    <div className="bg-[#fff] w-[251px] h-[136px] rounded-[4px]">
                        {/* Top Card Container */}
                        <div className="p-2">
                            {/* Header Card */}
                            <div className="flex px-2 justify-between items-center">
                                <div className="font-[Arial] font-[700] text-[13px] leading-[14.95px] uppercase">Last Month</div>
                                <Image alt='three dots' height={100} width={100} src='/assets/network/connections/threedots.png' className='w-[24px] h-[24px] cursor-pointer' />
                            </div>
                            {/* Card Description */}
                            <div className="flex my-[0.93rem] px-2 gap-[0.5rem]">
                                <div className="w-[33px] h-[33px] font-[Arial] text-[16px] flex justify-center items-center text-white bg-[#A45286] border-[1px] border-[#A45286] rounded-[4px] leading-[18.4px]">
                                    10+
                                </div>
                                <div className="w-min h-[28px] font-[Arial] text-[12px] font-[700] text-[#A45286] uppercase">New Connection</div>
                            </div>
                        </div>
                        {/* Bottom Card Container */}
                        <div className="flex justify-between">
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See stats</span>
                            </div>
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See all</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center space-x-4">
                    {/* Left Line (HR) */}
                    <hr className="flex-grow border-[#E7E7E7]" />

                    {/* Text */}
                    <span className="font-[Gotham] font-[700] text-[12px] text-[#181818] whitespace-nowrap leading-[11.48px] uppercase">Recent Connections</span>

                    {/* Right Line (HR) */}
                    <hr className="flex-grow border-[#E7E7E7]" />
                </div>

                {/* Image Section */}
                <div className="space-y-2 w-[850px]">
                    {/* Image Connection Card 1 */}
                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px]">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Brandon Wilson</p>
                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Senior graphic designer</p>
                                <span className="font-[Gotham] mt-1 text-[#A45286] text-[10px] leading-[15px]">623 connections</span>
                            </div>
                        </div>
                        <div className="w-[2px] h-[42px] bg-[#A45286]"></div>
                        {/* Message Section */}
                        <div className="flex-1 w-[317px]">
                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                            </p>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex space-x-2">
                            <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                                <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>Accept</span>
                            </button>
                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                <span className='font-[Arial] font-medium text-[#B7B7B7] text-[12px] leading-[13.8px]'>Decline</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Connection Card 2 */}
                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px]">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Theresa Steward</p>
                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Fashion Designer</p>
                                <span className="font-[Gotham] mt-1 text-[#A45286] text-[10px] leading-[15px]">481 connections</span>
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
                            <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                                <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>Accept</span>
                            </button>
                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                <span className='font-[Arial] font-medium text-[#B7B7B7] text-[12px] leading-[13.8px]'>Decline</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

