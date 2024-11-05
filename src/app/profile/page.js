'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Profile from '../components/Profile/index'
function Page() {
    const [activeSection, setActiveSection] = useState('profile');
    const [activeSectionPost, setActiveSectionPost] = useState('post');

    return (
        <div className="h-auto w-full p-4">
            {/* Main content area */}
            <div className="flex space-y-4 gap-8 ml-[9.5rem] mt-[3rem]">
                {/* Top section with image and info */}
                <div className="flex flex-col">
                    {/* Left side with images and details */}
                    <div className="w-[850px] h-[360px] shadow-lg bg-white rounded-lg">
                        {/* First image */}
                        <div className="w-[850px] h-[180px]">
                            <div className="h-[180px] bg-gray-200">
                                <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" className='w-[850px] h-[180px]' alt="" />
                            </div>
                        </div>

                        {/* Second image with text */}
                        <div className="flex items-start space-x-8 -mt-8"> {/* Added -mt-8 to move up by 2 rem */}
                            {/* Second image */}
                            <div className="h-[170px] w-[170px] bg-gray-200 ml-4 rounded-full z-50">
                                <img src="https://as2.ftcdn.net/v2/jpg/09/37/12/73/1000_F_937127370_RzigoTq55hhV6TOcnRXbZ2kBjSOgWUMJ.jpg" alt="" className='w-[170px] h-[170px] rounded-full' />
                            </div>

                            {/* Text details */}
                            <div className='mt-10 '>
                                <h1 className="text-2xl font-bold">Name</h1>
                                <p className="text-gray-600 mt-2">Description goes here. Lorem ipsum dolor sit amet consectetur.</p>

                                {/* Buttons */}
                                <div className="mt-4 space-x-4">
                                    <button className="w-[170px] h-[32px] bg-gradient-to-b from-[#FFA1AF] to-[#A45286] rounded-md hover:bg-[#A45286]  text-white rounded-[4px]">
                                        Contact Info
                                    </button>

                                    <button className="w-[170px] h-[32px] bg-[#FFFF] text-[#A45286] rounded-md hover:bg-[#A45286]  rounded-[4px] absolute border-[2px] border-[#A45286] rounded-md hover:bg-[#A45286] ">
                                        1,043 connections
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 w-[850px] h-[64px] shadow-lg grid grid-cols-3 items-center border-b">
                        <button
                            onClick={() => setActiveSection('profile')}
                            className={`w-full h-full text-white font-[Gotham] font-semibold bg-[#A45286] rounded-md hover:bg-[#A45286] border-r last:border-r-0 ${activeSection === 'profile' ? 'bg-[#A45286]' : 'bg-gray-200'
                                }`}
                        >
                            Profile
                        </button>

                        <button
                            onClick={() => setActiveSection('activities')}
                            className={`w-full font-[Gotham] font-bold h-full border-r last:border-r-0 ${activeSection === 'activities' ? 'bg-[#A45286] text-white' : 'bg-gray-200'
                                }`}
                        >
                            Activity & Interests
                        </button>

                        <button
                            onClick={() => setActiveSection('articles')}
                            className={`w-full font-[Gotham] font-bold h-full ${activeSection === 'articles' ? 'bg-[#A45286] text-white' : 'bg-gray-200'
                                }`}
                        >
                            Articles (3)
                        </button>
                    </div>

                    {/* Profile Section */}
                    {activeSection === 'profile' && (
                        <div>
                            <Profile />
                        </div>
                    )}

                    {/* Activities and Interests Section */}
                    {activeSection === 'activities' && (
                        <div>
                            <div className="w-[850px] h-[395px] mt-8 border-2 border-slate-500">
                                <div>
                                    <h1 className="text-[18px] font-semibold py-3 px-4">Recent Activities</h1>
                                </div>

                                {/* Buttons for switching sub-sections */}
                                <div className="px-4 space-x-7">
                                    <button
                                        onClick={() => setActiveSectionPost('post')}
                                        className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'post' ? 'bg-[#A45286] text-white' : ''
                                            }`}
                                    >
                                        Post
                                    </button>
                                    <button
                                        onClick={() => setActiveSectionPost('comment')}
                                        className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'comment' ? 'bg-[#A45286] text-white' : ''
                                            }`}
                                    >
                                        Comment
                                    </button>
                                    <button
                                        onClick={() => setActiveSectionPost('videos')}
                                        className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'videos' ? 'bg-[#A45286] text-white' : ''
                                            }`}
                                    >
                                        Videos
                                    </button>
                                    <button
                                        onClick={() => setActiveSectionPost('images')}
                                        className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'images' ? 'bg-[#A45286] text-white' : ''
                                            }`}
                                    >
                                        Images
                                    </button>
                                    <button
                                        onClick={() => setActiveSectionPost('documents')}
                                        className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'documents' ? 'bg-[#A45286] text-white' : ''
                                            }`}
                                    >
                                        Documents
                                    </button>
                                </div>

                                {/* Dynamic content based on active post section */}
                                <div className="p-4">
                                    {activeSectionPost === 'post' && (
                                       <div className="p-2 bg-white shadow-lg rounded-lg">
                                       <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                         Aditya Kumar Kanaujiya posted this <span className="text-sm text-gray-500">1 week ago</span>
                                       </h3>
                                       <div className="flex space-x-4">
                                         <Image
                                           className="w-[99px] h-[63px] object-cover rounded-lg"
                                           src=""
                                           alt="image"
                                         />
                                         <div>
                                           <p className="text-gray-600 mb-3">
                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in, iure temporibus impedit delectus sed repellendus...
                                           </p>
                                           <div className="flex items-center space-x-2 text-blue-600">
                                             <span className="text-sm">🔗</span>
                                             <span className="text-sm cursor-pointer hover:underline">See more</span>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     
                                    )}

                                    {activeSectionPost === 'comment' && (
                                        <div>
                                            <h3>
                                                Aditya Kumar commented on a post <span>2 days ago</span>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis velit...</p>
                                        </div>
                                    )}

                                    {activeSectionPost === 'videos' && (
                                        <div>
                                            <h3>
                                                Aditya Kumar posted a video <span>3 days ago</span>
                                            </h3>
                                            <p>Check out this video about technology and innovation...</p>
                                        </div>
                                    )}

                                    {activeSectionPost === 'images' && (
                                        <div>
                                            <h3>
                                                Aditya Kumar shared an image <span>5 days ago</span>
                                            </h3>
                                            <Image className="w-[200px] h-[150px]" src="" alt="shared image" />
                                        </div>
                                    )}

                                    {activeSectionPost === 'documents' && (
                                        <div>
                                            <h3>
                                                Aditya Kumar uploaded a document <span>1 week ago</span>
                                            </h3>
                                            <p>
                                                Download the document: <a href="" className="text-blue-500">Document.pdf</a>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="px-4">
                                    <button className="text-[#A45286]">See all</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Articles Section */}
                    {activeSection === 'articles' && (
                        <div>
                            <h2>Articles</h2>
                            {/* Articles content goes here */}
                        </div>
                    )}



                    <div className="mt-12  h-[355px] w-[850px] shadow-lg p-6">
                        {/* Header Section */}
                        <div className="flex items-center mb-3 space-x-5">
                            <h1 className="font-bold w-[75px] font-[Gotham]">Project</h1>
                            <p className='text-[18px] text-[#747474] ' >3 of 12</p>
                        </div>

                        {/* Images and Text Section */}
                        <div className="flex justify-between p-4">
                            {/* Image and Text 1 */}
                            <div className="flex flex-col">
                                <img
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    alt="1"
                                    className="w-[250px] h-[160px] object-cover rounded-md"
                                />
                                <div className="mt-2 flex flex-col">
                                    <span className='font-arial'>Project Name</span>
                                    <span className='text-[#5A5A5A] text-[10px] '>Fashion design, 15.07.2019</span>
                                </div>
                            </div>

                            {/* Image and Text 2 */}
                            <div className="flex flex-col ">
                                <img
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    alt="2"
                                    className="w-[250px] h-[160px] object-cover rounded-md"
                                />
                                <div className="mt-2  flex flex-col ">
                                    <span className='font-arial'>Project Name</span>
                                    <span className='text-[#5A5A5A] text-[10px] '>Fashion design, 15.07.2019</span>
                                </div>
                            </div>

                            {/* Image and Text 3 */}
                            <div className="flex flex-col">
                                <img
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    alt="3"
                                    className="w-[250px] h-[160px] object-cover rounded-md"
                                />
                                <div className="mt-2 flex flex-col">
                                    <span className='font-arial'>Project Name</span>
                                    <span className='text-[#5A5A5A] text-[10px] '>Fashion design, 15.07.2019</span>
                                </div>
                            </div>
                        </div>

                        {/* See More Section */}
                        <div className="text-left pl-4">
                            <span className='text-[#A45286] rounded-md hover:bg-[#A45286]  text-[12px] '>SEE ALL <span className='text-[#A45286] rounded-md hover:bg-[#A45286]  text-[12px] '>(20)</span></span>
                        </div>
                    </div>


                    <div className="w-[850px] mt-8 shadow-lg h-[228px] p-4">
                        {/* Project Title Section */}
                        <div className="flex space-x-5 mt-3">
                            <h1 className="font-bold font-[Gotham] ">Skills & Endoresments</h1>
                        </div>

                        {/* Flex container for child divs */}
                        <div className="flex justify-between space-x-4 px-4 mt-8">
                            {/* First Box */}
                            <div className="w-[250px] h-[80px] bg-gray-200 p-2 rounded-lg">
                                <div className="font-semibold">Fashion Designer</div>
                                <div>
                                    {/* Content if needed */}
                                </div>
                            </div>

                            {/* Second Box */}
                            <div className="w-[250px] h-[80px] bg-gray-300 p-2 rounded-lg">
                                <div className="font-semibold">Fashion Designer</div>
                                <div>
                                    {/* Content if needed */}
                                </div>
                            </div>

                            {/* Third Box */}
                            <div className="w-[250px] h-[80px] bg-gray-400 p-2 rounded-lg">
                                <div className="font-semibold">Fashion Designer</div>
                                <div>
                                    {/* Content if needed */}
                                </div>
                            </div>
                        </div>

                        {/* See More Section */}
                        <p className="mt-4 text-left pr-4">See more <span>(107)</span></p>
                    </div>


                    <div className="w-[850px] h-[345px] shadow-lg p-4 mt-8">
                        {/* Header Section */}
                        <div className="flex p-2 space-x-5">
                            <h1 className="font-bold">Experience</h1>
                        </div>

                        {/* Content Wrapper */}
                        <div className="space-y-3">
                            {/* First Item */}
                            <div className="w-[790px] h-[131px]">
                                <div className="flex items-center space-x-4 p-2 rounded-lg shadow-md">
                                    {/* Image Section */}
                                    <div className="w-[100px] h-[100px]">
                                        <img
                                            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                            alt="Fashion Designer"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1">
                                        <h1 className="text-xl font-bold mb-1">Fashion Designer</h1>
                                        <div className="flex space-x-2 mb-1">
                                            <span className="bg-gray-300 h-4 w-4 rounded-full"></span>
                                            <span className="bg-gray-300 h-4 w-4 rounded-full"></span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias dolorem excepturi qui maxime modi fugit vitae officiis.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Item */}
                            <div className="w-[790px] h-[90px]">
                                <div className="flex items-center space-x-4 p-2 rounded-lg shadow-md">
                                    {/* Image Section */}
                                    <div className="w-[100px] h-[100px]">
                                        <img
                                            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                            alt="Fashion Designer"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1">
                                        <h1 className="text-xl font-bold mb-1">Fashion Designer</h1>
                                        <div className="flex space-x-2 mb-1">
                                            <span className="bg-gray-300 h-4 w-4 rounded-full"></span>
                                            <span className="bg-gray-300 h-4 w-4 rounded-full"></span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias dolorem excepturi qui maxime modi fugit vitae officiis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[850px] h-[195px] shadow-lg mt-8 p-4">
                        <div className="flex p-2 space-x-5">
                            <h1 className="font-bold">Project</h1>
                        </div>

                        {/* Content Wrapper */}
                        <div className='w-full h-full'>
                            <div className="flex items-center space-x-4 p-2 rounded-lg shadow-md">
                                {/* Image Section */}
                                <div className="w-[100px] h-[100px]">
                                    <img
                                        src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                        alt="Fashion Designer"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1">
                                    <h1 className="text-xl font-bold mb-1">Fashion Designer</h1>
                                    <div className="flex space-x-2 mb-1">
                                        <span className="bg-gray-300 h-4 w-4 rounded-full"></span>
                                        <span className="bg-gray-300 h-4 w-4 rounded-full"></span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias dolorem excepturi qui maxime modi fugit vitae officiis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Other content area */}
                <div className="h-[1165px] p-1 w-[290px] shadow-lg">
                    <div className="">
                        <div className="h-[360px] shadow-lg">
                            <div className="space-x-8 w-[230px] mx-auto">
                                <span className="font-semibold">Your Dashboard</span>
                                <span className=" text-right text-[#A45286] rounded-md hover:bg-[#A45286]  font-semibold ">Go To stats</span>
                            </div>
                            <hr className="w-[230px] mx-auto mt-4" />
                            <div className="flex flex-col m-4 mt-4">
                                <div className="flex flex-col w-[83px] h-[71px] mb-6">
                                    <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  font-arial font-bold text-[45px] leading-[51.75px] text-left">896</span>
                                    <span className="text-[16px] text-gray-700">views today</span>
                                </div>

                                <div className="flex flex-col w-[83px] h-[71px] mb-6">
                                    <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  font-arial font-bold text-[45px] leading-[51.75px] text-left">896</span>
                                    <span className="text-[16px] text-gray-700">views today</span>
                                </div>
                                <div className="flex flex-col w-[183px] h-[71px] mb-6">
                                    <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  font-arial font-bold text-[45px] leading-[51.75px] text-left">896</span>
                                    <span className="text-[16px] text-gray-700">search appereances</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[427px] mt-5 shadow-lg ">
                            <div className="space-x-20 w-[230px] font-[Gotham] mx-auto mt-2">
                                <span className="font-semibold">VISITORS</span>
                                <span className=" text-right text-[#A45286] rounded-md hover:bg-[#A45286]  font-semibold ">VIEW ALL</span>
                            </div>
                            <hr className="w-[230px] mx-auto " />
                            <div className="flex flex-col items-start m-4 space-y-3"> {/* Added spacing between items */}
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="h-[338px] mt-5 shadow-lg ">
                            <div className="flex items-center p-3">
                                <span className="font-[Gotham] font-semibold text-center ml-2 ">YOU MAY LIKE THESE COURCES</span>
                            </div>
                            <hr className="w-[230px] mx-auto" />
                            <div className="flex flex-col items-start m-4 w-[228px] h-[198px] justify-center text-center space-y-3"> {/* Added spacing between items */}
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[80px] h-[52px] mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg"
                                        alt=""
                                        className="w-[80px] h-[52px]  mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[80px] h-[52px] mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className=''>text</span>
                                        <p className="text-gray-700">text</p>
                                    </div>
                                </div>


                            </div>
                            <p className="ml-3">See all recomendations</p>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
}

export default Page;
