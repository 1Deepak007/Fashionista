"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Profile from "../../components/Profile";
import profileimg from "../../../public/assets/profile/img.png";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";
import vector from "../../../public/assets/profile/Vector.png";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import { FaEllipsisH } from "react-icons/fa";
import vid from "../../../public/assets/profile/Group.png";

function Page() {
  const [activeSection, setActiveSection] = useState("profile");
  const [activeSectionPost, setActiveSectionPost] = useState("post");

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
                <Image
                  width={250}
                  height={160}
                  src={profileimg}
                  className="w-[850px] h-[180px]"
                  alt=""
                />
              </div>
            </div>

            {/* Second image with text */}
            <div className="flex items-start space-x-8 -mt-8">
              {/* Second image */}
              <div className="h-[170px] w-[285px] bg-gray-200 ml-4 rounded-full z-50 border-[5px] border-white">
                <Image
                  width={250}
                  height={160}
                  src={profileimg}
                  alt="User Profile"
                  className="w-[160px] h-[160px] rounded-full object-cover"
                />
                {/* Upload Icon */}
                <div className="relative w-[36px] h-[36px] bg-white bg-opacity-90 top-[-292px] left-[5px] rounded-md flex justify-center items-center shadow-lg">
                  <MdOutlineFileUpload
                    className="text-gray-600 text-xl"
                    aria-label="Upload"
                  />
                </div>

                {/* Edit Profile Button */}
                <div className="relative bottom-[327px] left-[435%] transform -translate-x-[50%] flex items-center bg-white bg-opacity-90 px-4 py-2 rounded-md shadow-lg space-x-2">
                  <MdEditSquare
                    className="text-gray-600 text-xl"
                    aria-label="Edit Profile"
                  />
                  <p className="text-gray-800 font-medium text-sm">
                    Edit Profile
                  </p>
                </div>

                {/* Ellipsis Icon */}
                <div className="relative top-[-22.7rem] right-[-48rem] w-[36px] h-[36px] bg-white bg-opacity-90 rounded-md flex justify-center items-center shadow-lg">
                  <FaEllipsisVertical
                    className="text-gray-600 text-xl"
                    aria-label="More Options"
                  />
                </div>
              </div>
              {/* Text details */}
              <div className="mt-10 flex flex-col items-start">
                <div className="flex justify-between items-center">
                  {/* Left Side: Name */}
                  <span className="text-2xl font-bold">Aditya Kumar</span>

                  {/* Right Side: Location */}
                  <span className="flex items-center space-x-2 ml-[210px]">
                    {/* Image */}
                    <Image
                      width={12.67}
                      height={12.67}
                      src={vector}
                      alt="User Location Icon"
                      className="w-[12.67px] h-[12.67px]"
                    />
                    {/* Location Text */}
                    <p className="text-gray-700">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </span>
                </div>

                <p className="text-gray-600 mt-2">
                  asdjfha9sduh asdhfadsc ah9ahsasdj asdhas asdhvpiasud asdyajvh
                  asdh9adv adhv89ahvn ahv9uhe dhvdfvdiv dvihadvh9udhfv dfhvuhdv
                  dhvidu vdivh davdhfvhuh
                </p>

                {/* Buttons */}
                <div className="mt-4 space-x-4">
                  <button className="w-[170px] h-[32px] bg-gradient-to-b from-[#FFA1AF] to-[#A45286] hover:bg-[#A45286]  text-white rounded-[4px]">
                    Contact Info
                  </button>

                  <button className="w-[170px] h-[32px] bg-[#FFFF] text-[#A45286] border-[2px] border-[#A45286] rounded-md ">
                    1,043 connections
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 w-[850px] h-[64px] shadow-lg grid grid-cols-3 items-center border-b">
            <button
              onClick={() => setActiveSection("profile")}
              className={`w-full font-[Gotham] font-bold h-full border-r last:border-r-0 ${
                activeSection === "profile"
                  ? "bg-[#A45286] text-white"
                  : "bg-gray-200"
              }`}
            >
              Profile
            </button>

            <button
              onClick={() => setActiveSection("activities")}
              className={`w-full font-[Gotham] font-bold h-full border-r last:border-r-0 ${
                activeSection === "activities"
                  ? "bg-[#A45286] text-white"
                  : "bg-gray-200"
              }`}
            >
              Activity & Interests
            </button>

            <button
              onClick={() => setActiveSection("articles")}
              className={`w-full font-[Gotham] font-bold h-full ${
                activeSection === "articles"
                  ? "bg-[#A45286] text-white"
                  : "bg-gray-200"
              }`}
            >
              Articles (3)
            </button>
          </div>

          {/* Profile Section */}
          {activeSection === "profile" && (
            <div>
              <Profile />
              <div className="mt-12  h-[355px] w-[850px] shadow-lg p-6">
                {/* Header Section */}
                <div className="flex items-center mb-3 space-x-5">
                  <h1 className="font-bold w-[75px] font-[Gotham]">Project</h1>
                  <p className="text-[18px] text-[#747474] ">3 of 12</p>
                </div>

                {/* Images and Text Section */}
                <div className="flex justify-between p-4">
                  {/* Image and Text 1 */}
                  <div className="flex flex-col">
                    <Image
                      width={250}
                      height={160}
                      src={profileimg}
                      alt="1"
                      className="w-[250px] h-[160px] object-cover rounded-md"
                    />
                    <div className="mt-2 flex flex-col">
                      <span className="font-arial">Project Name</span>
                      <span className="text-[#5A5A5A] text-[10px] ">
                        Fashion design, 15.07.2019
                      </span>
                    </div>
                  </div>

                  {/* Image and Text 2 */}
                  <div className="flex flex-col ">
                    <Image
                      width={250}
                      height={160}
                      src={profileimg}
                      alt="2"
                      className="w-[250px] h-[160px] object-cover rounded-md"
                    />
                    <div className="mt-2  flex flex-col ">
                      <span className="font-arial">Project Name</span>
                      <span className="text-[#5A5A5A] text-[10px] ">
                        Fashion design, 15.07.2019
                      </span>
                    </div>
                  </div>

                  {/* Image and Text 3 */}
                  <div className="flex flex-col">
                    <Image
                      width={250}
                      height={160}
                      src={profileimg}
                      alt="3"
                      className="w-[250px] h-[160px] object-cover rounded-md"
                    />
                    <div className="mt-2 flex flex-col">
                      <span className="font-arial">Project Name</span>
                      <span className="text-[#5A5A5A] text-[10px] ">
                        Fashion design, 15.07.2019
                      </span>
                    </div>
                  </div>
                </div>

                {/* See More Section */}
                <div className="text-left pl-4">
                  <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  text-[12px] ">
                    SEE ALL
                    <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  text-[12px] ">
                      (20)
                    </span>
                  </span>
                </div>
              </div>

              <div className="w-[850px] mt-4 shadow-lg h-[240px] p-4">
                {/* Project Title Section */}
                <div className="flex space-x-5 mt-3">
                  <h1 className="font-bold font-[Gotham]">
                    Skills & Endorsements
                  </h1>
                </div>

                {/* Flex container for child divs */}
                <div className="flex justify-between space-x-4 px-4 mt-4">
                  {/* First Box */}
                  <div className="w-[250px] h-auto bg-gray-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-center text-sm">
                        Fashion Designer
                      </span>
                      <span className="text-[#A45286] font-bold">{6}</span>
                    </div>

                    <div className="flex items-center mt-2">
                      {/* Center the avatars */}
                      <AvatarGroup
                        total={6}
                        sx={{ "& .MuiAvatar-root": { width: 24, height: 24 } }}
                      >
                        <Avatar alt="Remy Sharp" src={profileimg} />
                        <Avatar alt="Travis Howard" src={profileimg} />
                        <Avatar alt="Agnes Walker" src={profileimg} />
                        <Avatar alt="Trevor Henderson" src={profileimg} />
                        <Avatar alt="Trevor Henderson" src={profileimg} />
                      </AvatarGroup>
                    </div>
                  </div>

                  {/* Second Box */}
                  <div className="w-[250px] h-auto bg-gray-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-center text-sm">
                        Fashion Designer
                      </span>
                      <span className="text-[#A45286] font-bold">{7}</span>
                    </div>

                    <div className="flex items-center mt-2">
                      {/* Center the avatars */}
                      <AvatarGroup
                        total={7}
                        sx={{ "& .MuiAvatar-root": { width: 24, height: 24 } }}
                      >
                        <Avatar alt="Remy Sharp" src={profileimg} />
                        <Avatar alt="Travis Howard" src={profileimg} />
                        <Avatar alt="Agnes Walker" src={profileimg} />
                        <Avatar alt="Trevor Henderson" src={profileimg} />
                        <Avatar alt="Trevor Henderson" src={profileimg} />
                      </AvatarGroup>
                    </div>
                  </div>

                  {/* Third Box */}
                  <div className="w-[250px] h-auto bg-gray-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-center text-sm">
                        Fashion Designer
                      </span>
                      <span className="text-[#A45286] font-bold">{5}</span>
                    </div>

                    <div className="flex items-center mt-2">
                      {/* Center the avatars */}
                      <AvatarGroup
                        total={5}
                        sx={{ "& .MuiAvatar-root": { width: 24, height: 24 } }}
                      >
                        <Avatar alt="Remy Sharp" src={profileimg} />
                        <Avatar alt="Travis Howard" src={profileimg} />
                        <Avatar alt="Agnes Walker" src={profileimg} />
                        <Avatar alt="Trevor Henderson" src={profileimg} />
                        <Avatar alt="Trevor Henderson" src={profileimg} />
                      </AvatarGroup>
                    </div>
                  </div>
                </div>

                {/* See More Section */}
                <p className="mt-4 text-left pr-4 text-sm  h-[11px] text-[#A45286] font-bold">
                  See more <span>(107)</span>
                </p>
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
                      <div className="w-[54px] h-[54px]">
                        <Image
                          width={250}
                          height={160}
                          src={profileimg}
                          alt="Fashion Designer"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1">
                        <p className="text-sm font-normal mb-1">
                          Fashion Designer
                        </p>
                        <div>
                          <p className="text-[10px]">
                            Self Employed | Around the world
                          </p>
                          <p className="text-[10px]">
                            Jun 2016 - Present | 3 yrs 3 mos
                          </p>
                          <p className="text-[10px]">
                            Work with clients and web studios as freelancer.
                            Work in next areas: eCommerce web projects; creative
                            landing pages; iOS and Android apps; corporate web
                            sites and corporate identity sometimes.{" "}
                          </p>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Item */}
                  <div className="w-[790px] h-[90px]">
                    <div className="flex items-center space-x-4 p-2 rounded-lg shadow-md">
                      {/* Image Section */}
                      <div className="w-[54px] h-[54px]">
                        <Image
                          width={54}
                          height={54}
                          src={profileimg}
                          alt="Fashion Designer"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1">
                        <h1 className="text-sm font-normal mb-1">
                          Graphic designer
                        </h1>
                        <div className="mb-6">
                          <p className="text-[10px]">Upwork | International</p>
                          <p className="text-[10px]">
                            Jun 2019 — Present | 3 mos
                          </p>
                          <p className="text-[10px]">
                            New experience with Upwork system. Work in next
                            areas: UX/UI design, graphic design, interaction
                            design, UX research.
                          </p>
                        </div>
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
                <div className="w-full h-full">
                  <div className="flex items-center space-x-4 p-2 rounded-lg shadow-md">
                    {/* Image Section */}
                    <div className="w-[54px] h-[54px]">
                      <Image
                        width={250}
                        height={160}
                        src={profileimg}
                        alt="Fashion Designer"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <h1 className="text-sm font-normal mb-1">
                        University Name, Location
                      </h1>
                      <div className="mb-6">
                        <p className="text-[10px]">
                          {" "}
                          Details of Education, Stream etc
                        </p>
                        <p className="text-[10px]">2013 — 2017</p>
                        <p className="text-[10px]">
                          Additional English classes and fashion profile
                          courses​.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activities and Interests Section */}
          {activeSection === "activities" && (
            <div>
              <div
                className="w-[850px] mt-8 bg-[#ffffff]"
                style={{
                  height:
                    activeSectionPost === "post" ||
                    activeSectionPost === "comment"
                      ? "395px"
                      : activeSectionPost === "videos"
                      ? "692px"
                      : activeSectionPost === "images"
                      ? "523px"
                      : "1350px",
                }}
              >
                <div>
                  <h1 className="text-[18px] font-semibold py-3 px-4">
                    Recent Activities
                  </h1>
                </div>

                {/* Buttons for switching sub-sections */}
                <div className="px-4 space-x-7">
                  <button
                    onClick={() => setActiveSectionPost("post")}
                    className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${
                      activeSectionPost === "post"
                        ? "bg-[#A45286] text-white"
                        : ""
                    }`}
                  >
                    Post
                  </button>
                  <button
                    onClick={() => setActiveSectionPost("comment")}
                    className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${
                      activeSectionPost === "comment"
                        ? "bg-[#A45286] text-white"
                        : ""
                    }`}
                  >
                    Comment
                  </button>
                  <button
                    onClick={() => setActiveSectionPost("videos")}
                    className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${
                      activeSectionPost === "videos"
                        ? "bg-[#A45286] text-white"
                        : ""
                    }`}
                  >
                    Videos
                  </button>
                  <button
                    onClick={() => setActiveSectionPost("images")}
                    className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${
                      activeSectionPost === "images"
                        ? "bg-[#A45286] text-white"
                        : ""
                    }`}
                  >
                    Images
                  </button>
                  <button
                    onClick={() => setActiveSectionPost("documents")}
                    className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${
                      activeSectionPost === "documents"
                        ? "bg-[#A45286] text-white"
                        : ""
                    }`}
                  >
                    Documents
                  </button>
                </div>

                {/* Dynamic content based on active post section */}
                <div className="p-4">
                  {/* Post Section */}
                  {activeSectionPost === "post" && (
                    <>
                      {[1, 2].map((_, index) => (
                        <div
                          key={index}
                          className="px-4 bg-white rounded-lg flex flex-col pb-1 mb-3"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-800">
                              Aditya Kumar Kanaujiya posted this
                            </h3>
                            <span className="text-sm text-gray-500">
                              • 1 week
                            </span>
                          </div>
                          <div className="flex mt-3 space-x-4">
                            <Image
                              src={profileimg} // Replace with the actual image path
                              alt=""
                              className="w-[99px] h-[63px] object-cover rounded"
                            />
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Lorem ipsum dolor sit amet,{" "}
                              <span className="text-blue-500">
                                #consectetur
                              </span>{" "}
                              adipiscing elit. Donec vel egestas dolor, nec
                              dignissim metus. Donec augue elit, rhoncus ac
                              sodales id, porttitor vitae est. Donec laoreet{" "}
                              <span className="text-blue-500">#rutrum</span>{" "}
                              libero sed pharetra.
                            </p>
                          </div>
                          <div className="flex items-center justify-between ml-[7.5rem] -mt-4">
                            {/* Left: Ellipsis Icon */}
                            <div>
                              <FaEllipsisH className="text-gray-700 cursor-pointer w-[13px] h-[13px]" />
                            </div>

                            {/* Right: See More Text */}
                            <span className="text-pink-600 cursor-pointer text-sm hover:underline">
                              ...see more
                            </span>
                          </div>
                        </div>
                      ))}
                      <hr />
                      <div className="text-center mt-2">
                        <button className="w-full h-full text-pink-600 font-medium text-sm px-4 py-3 rounded transition-all duration-300 hover:bg-pink-600 hover:text-white">
                          SEE ALL POST
                        </button>
                      </div>
                    </>
                  )}
                  {activeSectionPost === "comment" && (
                    <div className="p-4 space-y-4">
                      {/* First Comment */}
                      <div className="border-b pb-2">
                        <h3 className="font-semibold text-gray-800">
                          Aditya Kumar Kanaujiya
                          <span className="text-gray-500 text-sm ml-2">
                            Commented on a post • 3h
                          </span>
                        </h3>
                        <p className="text-gray-600">Hey! What's Up?</p>
                      </div>

                      {/* Second Comment */}
                      <div className="border-b pb-2">
                        <h3 className="font-semibold text-gray-800">
                          Aditya Kumar Kanaujiya
                          <span className="text-gray-500 text-sm ml-2">
                            Commented on a post • 3h
                          </span>
                        </h3>
                        <p className="text-gray-600">Hey! What's Up?</p>
                      </div>

                      {/* Third Comment */}
                      <div className="border-b pb-2">
                        <h3 className="font-semibold text-gray-800">
                          Aditya Kumar Kanaujiya
                          <span className="text-gray-500 text-sm ml-2">
                            Commented on a post • 3h
                          </span>
                        </h3>
                        <p className="text-gray-600">Hey! What's Up?</p>
                      </div>

                      {/* See All Posts Button */}
                      <div className="text-center mt-4">
                        <button className="w-full text-pink-600 font-medium text-sm px-4 py-2 rounded transition-all duration-300 hover:bg-pink-600 hover:text-white">
                          SEE ALL POST
                        </button>
                      </div>
                    </div>
                  )}
                  {activeSectionPost === "videos" && (
                    <div className="p-4">
                      <div className="grid grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div>
                          <div className="relative">
                            <div className="w-[162px] h-[205px] bg-black rounded-t-lg flex justify-center items-center">
                              <Image
                                src={vid}
                                alt=""
                                className="w-[50px] h-[50px] rounded"
                              />
                            </div>
                          </div>
                          <div className="w-[160px] h-auto">
                            <p className="text-[12px] text-gray-800 h-[28px]">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                            </p>
                            <div className="flex items-center mt-2">
                              <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 ml-2">
                                +15
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Repeating Cards */}
                        {Array(7)
                          .fill("")
                          .map((_, index) => (
                            <div key={index}>
                              <div className="relative">
                                <div className="w-[162px] h-[205px] bg-black rounded-t-lg flex justify-center items-center">
                                  <Image
                                    src={vid} // Assuming `vid` is your image/video source
                                    alt=""
                                    className="w-[50px] h-[50px] rounded"
                                  />
                                </div>
                              </div>
                              <div className="w-[160px] h-auto">
                                <p className="text-[12px] text-gray-800 h-[28px]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit.
                                </p>
                                <div className="flex items-center mt-2">
                                  <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                                  <span className="text-sm text-gray-600 ml-2">
                                    +15
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* See All Post Button */}
                      <hr className="mt-2" />
                      <div className="text-center mt-4">
                        <button className="w-full text-pink-600 font-medium text-sm px-4 py-2 rounded transition-all duration-300 hover:bg-pink-600 hover:text-white">
                          SEE ALL POST
                        </button>
                      </div>
                    </div>
                  )}{" "}
                  {activeSectionPost === "images" && (
                    <div className="p-4">
                      <div className="grid grid-cols-4 gap-4">
                        {Array(8)
                          .fill("")
                          .map((_, index) => (
                            <div key={index}>
                              <div className="relative">
                                <div className="w-[180px] h-[161px] bg-[#D9D9D9] rounded-lg flex justify-center items-center"></div>
                              </div>
                            </div>
                          ))}
                      </div>
                      <hr className="mt-2" />
                      <div className="text-center mt-4">
                        <button className="w-full text-pink-600 font-medium text-sm px-4 py-2 rounded transition-all duration-300 hover:bg-pink-600 hover:text-white">
                          SEE ALL POST
                        </button>
                      </div>
                    </div>
                  )}
                  {activeSectionPost === "documents" && (
                    <div className="space-y-4 mt-4">
                      {/* First Card */}
                      <div className="w-[510px] h-[558px] border border-gray-300 mx-auto rounded-md flex flex-col">
                        {/* Header */}
                        <div className="bg-gray-600 text-white text-sm font-bold p-2 flex justify-between">
                          <span>TITLE</span>
                          <span>• 15 PAGES</span>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 flex items-center justify-center border border-gray-300 bg-gray-100">
                          {/* Placeholder for content */}
                          <span className="text-gray-400">[Content]</span>
                        </div>

                        {/* Footer */}
                        <div className="p-2 flex items-center justify-between">
                          <span className="text-sm">1/15</span>
                          <div>
                            <button className="mr-2 text-gray-600 focus:outline-none">
                              ◀
                            </button>
                            <button className="text-gray-600 focus:outline-none">
                              ▶
                            </button>
                          </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="p-2 text-xs text-center text-gray-500">
                          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
                          ELIT.
                        </div>
                      </div>

                      {/* Second Card */}
                      <div className="w-[510px] h-[558px] border border-gray-300 mx-auto rounded-md flex flex-col">
                        {/* Header */}
                        <div className="bg-gray-600 text-white text-sm font-bold p-2 flex justify-between">
                          <span>TITLE</span>
                          <span>• 15 PAGES</span>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 flex items-center justify-center border border-gray-300 bg-gray-100">
                          {/* Placeholder for content */}
                          <span className="text-gray-400">[Content]</span>
                        </div>

                        {/* Footer */}
                        <div className="p-2 flex items-center justify-between">
                          <span className="text-sm">1/15</span>
                          <div>
                            <button className="mr-2 text-gray-600 focus:outline-none">
                              ◀
                            </button>
                            <button className="text-gray-600 focus:outline-none">
                              ▶
                            </button>
                          </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="p-2 text-xs text-center text-gray-500">
                          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
                          ELIT.
                        </div>
                      </div>
                      <hr />
                      <div className="text-center mt-4">
                        <button className="w-full text-pink-600 font-medium text-sm px-4 py-2 rounded transition-all duration-300 hover:bg-pink-600 hover:text-white">
                          SEE ALL POST
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Articles Section */}
          {activeSection === "articles" && (
            <div>
              <h2>Articles</h2>
              {/* Articles content goes here */}
            </div>
          )}
        </div>

        {/* Other content area */}
        <div className="h-[1165px] p-1 w-[290px] shadow-lg">
          <div className="">
            <div className="h-[360px] shadow-lg">
              <div className="space-x-8 w-[230px] mx-auto">
                <span className="font-semibold">Your Dashboard</span>
                <span className=" text-right text-[#A45286] rounded-md hover:bg-[#A45286]  font-semibold ">
                  Go To stats
                </span>
              </div>
              <hr className="w-[230px] mx-auto mt-4" />
              <div className="flex flex-col m-4 mt-4">
                <div className="flex flex-col w-[83px] h-[71px] mb-6">
                  <span className="text-[#A45286] rounded-md font-arial font-bold text-[45px] leading-[51.75px] text-left">
                    896
                  </span>
                  <span className="text-[16px] text-gray-700">views today</span>
                </div>

                <div className="flex flex-col w-[83px] h-[71px] mb-6">
                  <span className="text-[#A45286] rounded-md font-arial font-bold text-[45px] leading-[51.75px] text-left">
                    896
                  </span>
                  <span className="text-[16px] text-gray-700">views today</span>
                </div>
                <div className="flex flex-col w-[183px] h-[71px] mb-6">
                  <span className="text-[#A45286] rounded-md font-arial font-bold text-[45px] leading-[51.75px] text-left">
                    896
                  </span>
                  <span className="text-[16px] text-gray-700">
                    search appereances
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[427px] mt-5 shadow-lg ">
              <div className="space-x-20 w-[230px] font-[Gotham] mx-auto mt-2">
                <span className="font-semibold text-[12px]">VISITORS</span>
                <span className=" text-right text-[#A45286] rounded-md  font-semibold text-[12px]">
                  VIEW ALL
                </span>
              </div>
              <hr className="w-[230px] mx-auto " />
              <div className="flex flex-col items-start m-4 space-y-3">
                {/* Added spacing between items */}
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[52px] h-[52px] rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Nikhil Gupta</span>
                    <p className="text-gray-700 text-[10px]">
                      HR-manager, 10 000 connec...
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[52px] h-[52px] rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Ayush Gautam</span>
                    <p className="text-gray-700 text-[10px]">iOS developer</p>
                  </div>
                </div>
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[52px] h-[52px] rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Aditya Kumar</span>
                    <p className="text-gray-700 text-[10px]">
                      Senior UX designer
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[52px] h-[52px] rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Amit Verma</span>
                    <p className="text-gray-700 text-[10px]">
                      Product designer at Com...
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[52px] h-[52px] rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Abhay Mishra</span>
                    <p className="text-gray-700 text-[10px]">
                      Team lead at Google
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[338px] mt-5 shadow-lg ">
              <div className="flex items-center p-3">
                <span className="font-[Gotham] font-semibold text-center ml-2 text-[12px]">
                  YOU MAY LIKE THESE COURCES
                </span>
              </div>
              <hr className="w-[230px] mx-auto" />
              <div className="flex flex-col items-start m-4 w-[228px] h-[198px] justify-center text-center space-y-3">
                {/* Added spacing between items */}
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[80px] h-[52px] mr-2"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-sm font-bold">
                      UX Foundations: Prototyping
                    </h1>
                    <p className="text-gray-700 text-[10px]">27,959 viewers</p>
                  </div>
                </div>
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[80px] h-[52px] mr-2"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-sm font-bold">
                      Designing with Adobe XD and pro
                    </h1>
                    <p className="text-gray-700 text-[10px]">9,122 viewers</p>
                  </div>
                </div>
                <div className="flex items-center w-[216px] h-[52px]">
                  <Image
                    width={250}
                    height={160}
                    src={profileimg}
                    alt=""
                    className="w-[80px] h-[52px] mr-2"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-sm font-bold">
                      UX Foundations: Styles and GUIs
                    </h1>
                    <p className="text-gray-700 text-[10px]">13,858 viewers</p>
                  </div>
                </div>
              </div>
              <p className="ml-3 text-[14px] text-[#A45286]">
                See all recomendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
