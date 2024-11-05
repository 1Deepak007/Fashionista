import React, { useState } from 'react';
import Image from 'next/image';

export default function Invitation() {

    const [activeTab, setActiveTab] = useState('sent');

    // Handle switching between Received and Sent
    const handleSent = () => {
        setActiveTab('sent');
    };

    // Handle switching between Received and Sent
    const handleReceived = () => {
        setActiveTab('received');
    };

    return (
        <div>
            <div>
                {/* Invitation Heading */}
                <div className="space-x-4 flex items-center">
                    <h2 className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">
                        Invitations
                    </h2>
                </div>
                {/* Buttons Received and Sent */}
                <div className="mt-8">
                    <div className="flex items-end border-b-[1px] border-[#E7E7E7]">
                        {/* Received Button */}
                        <div
                            className={`w-[240px] flex justify-center items-center font-[Arial] font-[400] text-[12px] ${activeTab === 'sent' ? 'bg-[#fff] text-[#000] h-[40px] cursor-pointer' : 'h-[50px] bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0] text-white rounded-t-[4px]'} font-semibold transition-all duration-300 leading-[13.8px] uppercase`}
                            onClick={handleReceived}
                        >
                            Received
                        </div>

                        {/* Sent Button */}
                        <div
                            className={`w-[240px] flex justify-center items-center font-[Arial] font-[400] text-[12px] ${activeTab === 'received' ? 'bg-[#fff] text-[#000] h-[40px] cursor-pointer' : 'h-[50px] bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0] text-white rounded-t-[4px]'} font-semibold transition-all duration-300 leading-[13.8px] uppercase`}
                            onClick={handleSent}
                        >
                            Sent
                        </div>
                    </div>

                    {/* Content for Received or Sent */}
                    <div className="mt-4">
                        {activeTab === 'sent' ? (
                            <div>
                                {/* Divider */}
                                <div className="flex items-center space-x-4 mt-8">
                                    {/* Left Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />

                                    {/* Text */}
                                    <div className="font-[Gotham] font-[400] text-[12px] text-[#181818] whitespace-nowrap leading-[11.48px] uppercase">
                                        YOU HAVE <span className='text-[#A45286]'>2 NEW CONNECTION</span>
                                    </div>

                                    {/* Right Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />
                                </div>

                                {/* Image Section */}
                                <div className="space-y-2 mt-7 w-[850px]">
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

                                {/* Divider */}
                                <div className="flex items-center space-x-4 mt-8">
                                    {/* Left Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />

                                    {/* Text */}
                                    <div className="font-[Gotham] font-[700] text-[12px] text-[#181818] whitespace-nowrap leading-[11.48px] uppercase">
                                        RECENT CONNECTIONS
                                    </div>

                                    {/* Right Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />
                                </div>

                                {/* Recent Connection Profile */}
                                <div className="w-[850px] mt-7 flex flex-col">
                                    {/* First Row */}
                                    <div className="flex space-x-2">
                                        {/* First Item */}
                                        <div className="w-[420px] h-[95px] flex items-center px-[1.4rem] bg-[#fff] rounded-[4px]">
                                            <div className='w-[375px] h-[65px] flex'>
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Audrey Alexander</p>
                                                        <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Team lead at company name</p>
                                                    </div>
                                                </div>
                                                {/* Time & Date */}
                                                <div className='flex items-end ml-auto'>
                                                    <span className="font-[Gotham] text-[10px] text-[#1818184D] leading-[15px]">Yesterday, 14:30</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Second Item */}
                                        <div className="w-[420px] h-[95px] flex items-center px-[1.4rem] bg-[#fff] rounded-[4px]">
                                            <div className='w-[375px] h-[65px] flex'>
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Audrey Alexander</p>
                                                        <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Team lead at company name</p>
                                                    </div>
                                                </div>
                                                {/* Time & Date */}
                                                <div className='flex items-end ml-auto'>
                                                    <span className="font-[Gotham] text-[10px] text-[#1818184D] leading-[15px]">Yesterday, 14:30</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Second Row */}
                                    {/* First Row */}
                                    <div className="flex space-x-2 mt-2">
                                        {/* First Item */}
                                        <div className="w-[420px] h-[95px] flex items-center px-[1.4rem] bg-[#fff] rounded-[4px]">
                                            <div className='w-[375px] h-[65px] flex'>
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Audrey Alexander</p>
                                                        <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Team lead at company name</p>
                                                    </div>
                                                </div>
                                                {/* Time & Date */}
                                                <div className='flex items-end ml-auto'>
                                                    <span className="font-[Gotham] text-[10px] text-[#1818184D] leading-[15px]">Yesterday, 14:30</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Second Item */}
                                        <div className="w-[420px] h-[95px] flex items-center px-[1.4rem] bg-[#fff] rounded-[4px]">
                                            <div className='w-[375px] h-[65px] flex'>
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Audrey Alexander</p>
                                                        <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">Team lead at company name</p>
                                                    </div>
                                                </div>
                                                {/* Time & Date */}
                                                <div className='flex items-end ml-auto'>
                                                    <span className="font-[Gotham] text-[10px] text-[#1818184D] leading-[15px]">Yesterday, 14:30</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="Connections">
                                    <div className="mb-24 space-y-8">
                                        {/* Image Section */}
                                        <div className="space-y-2 mt-7 w-[850px]">
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}