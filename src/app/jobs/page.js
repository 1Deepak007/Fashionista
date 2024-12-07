import React from "react";
import Image from "next/image";

// Left Sections
import NewJobSection from "../../components/Jobs/NewJobSection";
import SortBySection from "../../components/Jobs/SortBySection";
import JobSection from "../../components/Jobs/JobSection";
import MoreJobSection from "../../components/Jobs/MoreJobSection";
// Right Sections
import PostJobSection from "../../components/Jobs/PostJobSection";
import MySearchSection from "../../components/Jobs/MySearchSection";

const jobList = [
  { title: "Fashion Designer", company: "Company Name" },
  { title: "Product Designer", company: "Company Name" },
];

export default function Jobs() {
  return (
    <div className="flex justify-center min-h-screen mt-12 mb-10 space-x-14">
      {/* Left Section */}
      <div className="flex flex-col w-[850px]">
        
        {/* Set the width here */}
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

        {/* My Search Section */}
        <MySearchSection />

        {/* Trending Job Section */}
        <div className="bg-white h-[245px] shadow-lg mb-4 rounded-lg p-4">
      {/* Header Section */}
      <p className="font-bold px-5 pt-4 pb-2">Tracked Jobs</p>
      <hr className="border-t border-gray-300 mt-2" />

      {/* Jobs List */}
      <div className="space-y-4 px-3 py-6 overflow-y-auto">
        {jobList.map((job, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 border border-[#F4F4F4] rounded-md p-2 transition-shadow duration-300 hover:shadow-md"
          >
            {/* Job Image */}
            <Image
              src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
              alt={`${job.title} Thumbnail`}
              width={32}
              height={32}
              className="rounded-full object-cover h-[32px]"
            />
            {/* Job Details */}
            <div>
              <p className="font-medium text-sm text-gray-800">{job.title}</p>
              <p className="text-xs text-gray-500">{job.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* Trending Articles Section */}
        <div className="bg-white h-[400px] p-4 shadow-lg">
          <p className="font-bold py-3">Articles for you</p>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="w-[227px] h-[155px] -mt-2 flex-wrap">
            {[
              {
                title: "The guide. Apply for a job",
                viewers: "12,932 viewers",
              },
              {
                title: "Your dream job and how you can g",
                viewers: "9,112 viewers",
              },
              {
                title: "Now you know it. 15 steps to find job",
                viewers: "7,221 viewers",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="flex items-end space-y-10 space-x-3"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                  alt="Trending Article"
                  className="w-[80px] h-[52px]"
                />
                <div className="flex flex-col">
                  <p className="font-[600] text-[14px]">{article.title}</p>
                  <span className="text-[10px]">{article.viewers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
