import React from 'react';
import { GrAttachment } from 'react-icons/gr';
import { CiImageOn, CiVideoOn } from 'react-icons/ci';
import { BsFillSendFill } from 'react-icons/bs';
import { FaEllipsisH, FaThumbsUp, FaComment, FaShareAlt } from 'react-icons/fa';
import Image from 'next/image';
import { LuDownloadCloud } from "react-icons/lu";

const Jobs = () => {
    return (
        <div className="flex justify-center min-h-screen mt-12 mb-10 space-x-14">
            {/* Left Section */}
            <div className="flex flex-col w-[850px]"> {/* Set the width here */}
                {/* New Jobs Section */}
                <div className="bg-white border h-[135px] shadow-lg p-5 my-4">
                    <div className="flex items-center space-x-4">
                        <p className="text-[12px] pl-3 font-semibold font-[Gotham] text-[#181818]">Your dream job is here</p>
                    </div>
                    <hr className=" w-[790px] mx-auto mt-4 bg-gray-300 mb-4" />
                    <div className=" flex items-center px-2 justify-between text-gray-600">
                        <input
                            type="text"
                            placeholder="Search jobs"
                            className="flex-grow mt-[-11px] p-1 text-[18px] rounded-md focus:outline-none"
                        />
                        <div className="flex space-x-4 mt-1">
                            <GrAttachment className="text-xl w-[24px] h-[24px] " />
                            <div className="flex items-center  justify-center w-[32px] h-[32px] bg-[#E188C1] rounded-lg">
                                <BsFillSendFill className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sort By Section */}
                <div className="flex justify-center items-center my-4">
                    <hr className="flex-grow border-t border-gray-300 mx-4" />
                    <p>
                        Jobs for you <span className="font-semibold text-[#A45286]">Latest</span>
                    </p>
                    <hr className="flex-grow border-t border-gray-300 mx-4" />
                </div>

                {/* Jobs Section */}
                <div className="space-y-5 ">
                    <div className="w-[850px] border-2 mb-4 flex border-gray-400">
                        <div className="w-[475px] p-2 h-[76px] flex items-center justify-between flex-1"> {/* Ensure this section takes up space */}
                            <Image
                                src=''
                                alt='kjfd'
                                className="mr-4" // Add margin to the right of the image for spacing
                            />
                            <div className="flex-1"> {/* Allow this div to grow and take available space */}
                                <p className="text-[#A45286] font-bold text-[18px]">kdfjj</p>
                                <p className="text-sm"> {/* Optional: make this smaller for better readability */}
                                    suscipit optio odit a laborum, excepturi ab debitis sit molestias. Dolor, impedit!
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-[#A45286] text-white font-semibold rounded-md hover:bg-[#8b3a6e] transition duration-300 ease-in-out shadow-md">
                            More
                        </button>

                    </div>

                    <div className="w-[850px] border-2 mb-4 flex border-gray-400">
                        <div className="w-[475px] p-2 h-[76px] flex items-center justify-between flex-1"> {/* Ensure this section takes up space */}
                            <Image
                                src=''
                                alt='kjfd'
                                className="mr-4" // Add margin to the right of the image for spacing
                            />
                            <div className="flex-1"> {/* Allow this div to grow and take available space */}
                                <p className="text-[#A45286] font-bold text-[18px]">kdfjj</p>
                                <p className="text-sm"> {/* Optional: make this smaller for better readability */}
                                    suscipit optio odit a laborum, excepturi ab debitis sit molestias. Dolor, impedit!
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-[#A45286] text-white font-semibold rounded-md hover:bg-[#8b3a6e] transition duration-300 ease-in-out shadow-md">
                            More
                        </button>

                    </div>

                    <div className="w-[850px] border-2 flex border-gray-400">
                        <div className="w-[475px] p-2 h-[76px] flex items-center justify-between flex-1"> {/* Ensure this section takes up space */}
                            <Image
                                src=''
                                alt='kjfd'
                                className="mr-4" // Add margin to the right of the image for spacing
                            />
                            <div className="flex-1"> {/* Allow this div to grow and take available space */}
                                <p className="text-[#A45286] font-bold text-[18px]">kdfjj</p>
                                <p className="text-sm"> {/* Optional: make this smaller for better readability */}
                                    suscipit optio odit a laborum, excepturi ab debitis sit molestias. Dolor, impedit!
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-[#A45286] text-white font-semibold rounded-md hover:bg-[#8b3a6e] transition duration-300 ease-in-out shadow-md">
                            More
                        </button>

                    </div>
                </div>
                {/* Sort By Section */}
                <div className="flex justify-center items-center mt-8">
                    <hr className="flex-grow border-t border-gray-300 mx-4" />
                    <p>
                        Jobs for you <span className="font-semibold text-[#A45286]">Latest</span>
                    </p>
                    <hr className="flex-grow border-t border-gray-300 mx-4" />
                </div>
                <div className="space-y-5 mt-7 ">
                    <div className="w-[850px] border-2 mb-4 flex border-gray-400">
                        <div className="w-[475px] p-2 h-[76px] flex items-center justify-between flex-1"> {/* Ensure this section takes up space */}
                            <Image
                                src=''
                                alt='kjfd'
                                className="mr-4" // Add margin to the right of the image for spacing
                            />
                            <div className="flex-1"> {/* Allow this div to grow and take available space */}
                                <p className="text-[#A45286] font-bold text-[18px]">kdfjj</p>
                                <p className="text-sm"> {/* Optional: make this smaller for better readability */}
                                    suscipit optio odit a laborum, excepturi ab debitis sit molestias. Dolor, impedit!
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-[#A45286] text-white font-semibold rounded-md hover:bg-[#8b3a6e] transition duration-300 ease-in-out shadow-md">
                            More
                        </button>

                    </div>

                    <div className="w-[850px] border-2 mb-4 flex border-gray-400">
                        <div className="w-[475px] p-2 h-[76px] flex items-center justify-between flex-1"> {/* Ensure this section takes up space */}
                            <Image
                                src=''
                                alt='kjfd'
                                className="mr-4" // Add margin to the right of the image for spacing
                            />
                            <div className="flex-1"> {/* Allow this div to grow and take available space */}
                                <p className="text-[#A45286] font-bold text-[18px]">kdfjj</p>
                                <p className="text-sm"> {/* Optional: make this smaller for better readability */}
                                    suscipit optio odit a laborum, excepturi ab debitis sit molestias. Dolor, impedit!
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-[#A45286] text-white font-semibold rounded-md hover:bg-[#8b3a6e] transition duration-300 ease-in-out shadow-md">
                            More
                        </button>

                    </div>

                    <div className="w-[850px] border-2 flex border-gray-400">
                        <div className="w-[475px] p-2 h-[76px] flex items-center justify-between flex-1"> {/* Ensure this section takes up space */}
                            <Image
                                src=''
                                alt='kjfd'
                                className="mr-4" // Add margin to the right of the image for spacing
                            />
                            <div className="flex-1"> {/* Allow this div to grow and take available space */}
                                <p className="text-[#A45286] font-bold text-[18px]">kdfjj</p>
                                <p className="text-sm"> {/* Optional: make this smaller for better readability */}
                                    suscipit optio odit a laborum, excepturi ab debitis sit molestias. Dolor, impedit!
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-[#A45286] text-white font-semibold rounded-md hover:bg-[#8b3a6e] transition duration-300 ease-in-out shadow-md">
                            More
                        </button>

                    </div>
                </div>
            </div>
            {/* Right Section */}
            <div className=" mt-5 w-[290px]">
                {/* Write an Article */}
                <div className="flex justify-center  shadow-lg w-[290px] h-[75px] mb-3">
                    <button
                        className="rounded-md px-4 w-[269px] my-auto  h-[32px] font-bold text-white shadow-lg"
                        style={{ background: 'linear-gradient(0deg, #A45286 0%, #DC85BC 100%)' }}
                    >
                        Post a Jobs
                    </button>
                </div>

                {/* My Groups Section */}
                <div className="bg-white h-[290px] shadow-lg mb-3">
                    <p className="font-bold px-5 pt-4 pb-2 ">My Services</p>
                    <hr className="border-t border-gray-300 mt-2 " />
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="flex w-[230px] bg-[#FFE3EF] h-[54px] mx-auto mt-4 items-center p-3 space-x-3">
                            <div className="flex-1"> {/* Allow this div to grow and take up available space */}
                                <p className="font-bold text-sm">UI/UX Designer</p> {/* Bold and smaller text for better structure */}
                                <span className="text-xs text-gray-600">thurt</span> {/* Smaller and muted text for the subtitle */}
                            </div>
                            <div className="flex-shrink-0"> {/* Prevent the icon from shrinking */}
                                icon {/* Replace this with your actual icon */}
                            </div>
                        </div>

                    ))}
                </div>

                {/* My Groups Section */}
                <div className="bg-white h-[245px] shadow-lg mb-3">
                    <p className="font-bold px-5 pt-4 pb-2 ">Trending Jobs</p>
                    <hr className="border-t border-gray-300 mt-2 " />
                    {[1, 2].map((_, index) => (
                        <div key={index} className="flex w-[231px] h-[80px] shadow-lg mx-auto my-auto mt-2 items-center p-3 space-y-4 space-x-3">
                            <Image
                                src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                alt="Group"
                                width={48}
                                height={48}
                                className="rounded-full w-[48px] h-[48px]"
                            />

                            <div className=" ">
                                <p className="font-medium  ">Fashion Designing </p>
                                <p>University, Lucknow</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trending Articles Section */}
                <div className="bg-white h-[300px] p-4 shadow-lg">
                    <p className="font-bold">Articles for you</p>
                    <hr className="border-t border-gray-300 mt-2" />
                    <div className="w-[227px] h-[198px] mt-2 flex-wrap ">

                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex items-center space-y-10 space-x-3">
                                <img
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    alt="Trending Article"
                                    className="w-[80px] h-[52px]"
                                />
                                <div className=" flex  flex-col ">
                                    <p className="text-semibold text-[14px] ">Fashion Designing</p>
                                    <span className='text-[10px]'>jhbgvfc</span>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
