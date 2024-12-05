"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { PiLinkSimpleBold } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import { PiVideoBold } from "react-icons/pi";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState([]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 3) {
      alert("You can only upload up to 3 files.");
      return;
    }

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

    // Simulating upload progress
    const progressArray = files.map(() => 0); // Initially set all progress to 0
    setUploadProgress((prevProgress) => [...prevProgress, ...progressArray]);

    files.forEach((_, index) => {
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = [...prev];
          if (newProgress[selectedFiles.length + index] < 100) {
            newProgress[selectedFiles.length + index] += 5;
          } else {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 500);
    });
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setUploadProgress((prevProgress) =>
      prevProgress.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <div className="bg-white h-[135px] p-5 my-4 rounded-[4px]">
        <div className="flex items-center space-x-4">
          <p className="text-[12px] pl-3 font-semibold font-[Gotham] text-[#181818] uppercase">
            NEW POST
          </p>
        </div>
        <hr className="w-[790px] h-[1px] mx-auto mt-4 bg-[#D7D7D7] mb-4" />
        <div className="flex items-center px-2 justify-between text-[18px]">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-grow mt-[-11px] p-1 text-[18px] rounded-md focus:outline-none placeholder:text-[#18181833] placeholder:text-[18px]"
          />
          <div className="flex space-x-4 items-center">
            {/* Link Icon */}
            <div>
              <div
                className="cursor-pointer rounded-full justify-center"
                onClick={handleModalToggle}
              >
                <PiLinkSimpleBold
                  size={24}
                  className="text-[#e3e3e3] hover:text-gray-500"
                />
              </div>
              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white w-[90%] sm:w-[394px] md:w-[550px] rounded-lg shadow-lg p-6 relative">
                    {/* Close Button */}
                    <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
                      onClick={handleModalToggle}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                      Media Upload
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                      Add your documents here, and you can upload up to 5 files
                      max
                    </p>
                    {/* Upload Box */}
                    <div className="border-2 border-dashed border-pink-300 rounded-lg p-4 flex flex-col items-center">
                      <img
                        src="/assets/feed/upload.png"
                        alt="upload-icon"
                        className="mb-4 w-[42px] h-[42px]"
                      />
                      <p className="text-sm text-gray-500 mb-4">
                        Drag your file(s) to start uploading
                      </p>
                      <label
                        htmlFor="file-upload"
                        className="text-[#A45286] px-4 py-2 rounded-md text-sm border border-[#A45286] hover:bg-[#A45286] hover:text-white transition cursor-pointer"
                      >
                        Browse files
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        accept=".jpg,.png,.svg,.zip"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-4">
                      Only supports .jpg, .png, .svg, and .zip files
                    </p>
                    {/* Selected Files List */}
                    <div className="mt-4">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2"
                        >
                          <div className="flex items-center">
                            {file.type.startsWith("image/") ? (
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-8 h-8 rounded-md mr-2"
                              />
                            ) : (
                              <img
                                src="/assets/feed/zip.png"
                                alt="zip-icon"
                                className="w-8 h-8 rounded-md mr-2"
                              />
                            )}
                            <div>
                              <p className="text-sm text-gray-700">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                              <p className="text-xs text-gray-500">
                                {uploadProgress[index]}% uploaded
                              </p>
                              <div className="w-[100px] h-2 bg-gray-300 rounded-md overflow-hidden">
                                <div
                                  className="bg-[#a35285] h-full"
                                  style={{ width: `${uploadProgress[index]}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="text-gray-400 hover:text-red-600"
                            onClick={() => removeFile(index)}
                            aria-label="Remove file"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                    {/* Footer Buttons */}
                    <div className="flex justify-end mt-6">
                      <button
                        className="text-gray-500 bg-gray-100 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition mr-2"
                        onClick={handleModalToggle}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-[#A45286] text-white px-4 py-2 rounded-md text-sm transition"
                        disabled={selectedFiles.length === 0}
                        onClick={() => alert("Next button clicked!")}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Image Icon */}
            <div
                className="cursor-pointer rounded-full justify-center"
                onClick={handleModalToggle}
              >
                <AiOutlinePicture
                  size={24}
                  className="text-[#e3e3e3] hover:text-gray-500"
                />
              </div>
            {/* Video Icon */}
            <div
                className="cursor-pointer rounded-full justify-center"
                onClick={handleModalToggle}
              >
                <PiVideoBold
                  size={24}
                  className="text-[#e3e3e3] hover:text-gray-500"
                />
              </div>
            {/* Send Icon */}
            <div className="flex cursor-pointer justify-center items-center w-[32px] h-[32px] bg-[#bb679c] rounded-[4px] hover:bg-pink-500">
              <BsFillSendFill className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
