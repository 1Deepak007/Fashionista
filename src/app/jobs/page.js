import React from 'react';
import Image from 'next/image';

// Left Sections
import NewJobSection from '../../components/Jobs/NewJobSection';
import SortBySection from '../../components/Jobs/SortBySection';
import JobSection from '../../components/Jobs/JobSection';
import MoreJobSection from '../../components/Jobs/MoreJobSection';
// Right Sections
import PostJobSection from '../../components/Jobs/PostJobSection';

export default function Jobs() {
    return (
        <div className="flex justify-center min-h-screen mt-12 mb-10 space-x-14">
            {/* Left Section */}
            <div className="flex flex-col w-[850px]"> {/* Set the width here */}
                {/* New Job Section */}
                <NewJobSection />

                {/* Sort By Section */}
                <SortBySection headingText="Jobs For You" />

                {/* Job Section */}
                <JobSection />

                {/* Sort By Section */}
                <SortBySection headingText="New Jobs" />

                {/* More Job Section */}
                <MoreJobSection />

            </div>
            {/* Right Section */}
            <div className=" mt-5 w-[290px]">
                {/* Post Job */}
                <PostJobSection />

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
}