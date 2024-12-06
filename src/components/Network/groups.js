import React, { useState } from "react";
import Image from "next/image";

export default function Invitation() {
  const [activeTab, setActiveTab] = useState("request");

  // Handle switching between Your Group and Request
  const handleRequest = () => {
    setActiveTab("request");
  };

  // Handle switching between Your Group and Request
  const handleYourGroup = () => {
    setActiveTab("your-group");
  };

  return (
    <div>
      <div>
        {/* Invitation Heading */}
        <div className="space-x-4 flex items-center">
          <Image
            src="/assets/groups/groups.png"
            className="w-[22px] h-[22px]"
            height={30}
            width={30}
            alt="invitation icon"
          />
          <h2 className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">
            Groups
          </h2>
        </div>
        {/* Your Group, Request and Create Group Buttons */}
        <div className="mt-8">
          <div className="flex items-center border-b-[1px] border-[#E7E7E7]">
            <div className="flex items-end">
              {/* Your Group Button */}
              <div
                className={`w-[240px] flex justify-center items-center font-[Arial] font-[400] text-[12px] ${
                  activeTab === "request"
                    ? "bg-[#fff] text-[#000] h-[40px] cursor-pointer"
                    : "h-[50px] bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0] text-white rounded-t-[4px]"
                } font-semibold transition-all duration-300 leading-[13.8px] uppercase`}
                onClick={handleYourGroup}
              >
                Your Group
              </div>

              {/* Request Button */}
              <div
                className={`w-[240px] flex justify-center items-center font-[Arial] font-[400] text-[12px] ${
                  activeTab === "your-group"
                    ? "bg-[#fff] text-[#000] h-[40px] cursor-pointer"
                    : "h-[50px] bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0] text-white rounded-t-[4px]"
                } font-semibold transition-all duration-300 leading-[13.8px] uppercase`}
                onClick={handleRequest}
              >
                Request
              </div>
            </div>
            <button className="w-[141px] h-[32px] flex justify-center items-center ml-[auto] bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0] rounded-[4px]">
              <span className="font-[Arial] font-[400] text-[12px] leading-[13.8px] text-white uppercase">
                Create a Group
              </span>
            </button>
          </div>

          {/* Content for Your Group or Request */}
          <div className="mt-4">
            {activeTab === "request" ? (
              <div>
                {/* Divider */}
                <div className="flex items-center space-x-4 mt-8">
                  {/* Left Line (HR) */}
                  <hr className="flex-grow border-[#E7E7E7]" />

                  {/* Text */}
                  <div className="font-[Gotham] font-[400] text-[12px] text-[#181818] whitespace-nowrap leading-[11.48px] uppercase">
                    YOU HAVE{" "}
                    <span className="text-[#A45286]">2 NEW GROUP REQUEST</span>
                  </div>

                  {/* Right Line (HR) */}
                  <hr className="flex-grow border-[#E7E7E7]" />
                </div>

                {/* Image Section */}
                <div className="space-y-2 mt-7 w-[850px] min-h-[60vh]">
                  {/* Image Connection Card 1 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px] hover:shadow-md">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">
                          Go with the Flow
                        </p>
                        <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">
                          Senior graphic designer
                        </p>
                      </div>
                    </div>
                    <div className="w-[3px] h-[42px] bg-[#A45286]"></div>
                    {/* Message Section */}
                    <div className="flex-1 w-[317px]">
                      <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                        Hey, I saw your works. I like it! Can we do something
                        together? Or maybe you have project for UX at the
                        moment?
                      </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex space-x-2">
                      <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px] transition-all duration-300 hover:border-red-500 hover:text-red-500">
                        Pending
                      </button>
                    </div>
                  </div>
                  {/* Image Connection Card 2 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px] hover:shadow-md">
                    {/* Image and Text Section */}
                    <div className="w-[11.6rem] flex items-center space-x-4">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">
                          Fashion World
                        </p>
                        <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">
                          Senior graphic designer
                        </p>
                      </div>
                    </div>
                    <div className="w-[2px] h-[42px] bg-[#A45286]"></div>
                    {/* Message Section */}
                    <div className="flex-1 w-[317px]">
                      <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                        Hey, I saw your works. I like it! Can we do something
                        together? Or maybe you have project for UX at the
                        moment?
                      </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex space-x-2">
                      <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px] transition-all duration-300 hover:border-red-500 hover:text-red-500">
                        Pending
                      </button>
                    </div>
                  </div>
                  {/* Image Connection Card 3 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white rounded-[4px] border-[#E4E4E4] border-[1px] hover:shadow-md">
                    {/* Image and Text Section */}
                    <div className="w-[11.6rem] flex items-center space-x-4">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">
                          Fashion World
                        </p>
                        <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-[15px]">
                          Senior graphic designer
                        </p>
                      </div>
                    </div>
                    <div className="w-[2px] h-[42px] bg-[#A45286]"></div>
                    {/* Message Section */}
                    <div className="flex-1 w-[317px]">
                      <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                        Hey, I saw your works. I like it! Can we do something
                        together? Or maybe you have project for UX at the
                        moment?
                      </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex space-x-2">
                      <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase font-[Arial] font-[700] text-[#B7B7B7] text-[12px] leading-[13.8px] transition-all duration-300 hover:border-red-500 hover:text-red-500">
                        Pending
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Your Group Section */}
                <div className="space-y-2 mt-7 w-[851px] h-[558px] overflow-y-scroll bg-[#fff] rounded-[4px] your-group-scrollbar">
                  {/* Group Card 1 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 2 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 3 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 4 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 5 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 6 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 7 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 8 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 9 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group Card 10 */}
                  <div className="w-full h-[95px] flex items-center justify-between px-4 space-x-6 bg-white rounded-[4px]">
                    {/* Image and Text Section */}
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/sample/connection-profile.png"
                        height={100}
                        width={100}
                        alt="connection image"
                        className="w-[52px] h-[52px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-[Arial] font-[700] text-[#181818] text-[14px] leading-[16.1px] uppercase">
                          Group Name
                        </p>
                        <p className="font-[Arial] mt-[4px] text-[#181818] text-[14px] opacity-[60%] font-[400] leading-[15px]">
                          15,522 members
                        </p>
                      </div>
                    </div>

                    {/* Three Dots Button */}
                    <div className="flex space-x-2">
                      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[4px] mr-[1rem] cursor-pointer">
                        <Image
                          src="/assets/groups/your-group/threedots.png"
                          height={500}
                          width={500}
                          alt="three dots icon"
                        />
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
  );
}
