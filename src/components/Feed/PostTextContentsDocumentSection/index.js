"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaEllipsisH, FaShareAlt } from 'react-icons/fa'
import Modal from "../Sharepopup/Model"
import { BiLike, BiSolidLike } from "react-icons/bi";

const PostCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const [likeCount, setLikeCount] = useState(10);
  const [liked, setLiked] = useState(false);
  // Function to handle like button click
  const handleLikeClick = () => {
    if (liked) { 
      setLikeCount(likeCount - 1); // Decrement like count if already liked
    } else {
      setLikeCount(likeCount + 1); // Increment like count if not liked
    }
    setLiked(!liked); // Toggle liked state
  };
  

  const documentItems = [
    {
      title: 'Fashion guidelines for Illustration designers',
      fileSize: '324 kb',
      documentImage: '/assets/feed/document.png',
      downloadIcon: '/assets/feed/download.png',
    },
    {
      title: 'Fashion guidelines for Graphic Designer',
      fileSize: '245 kb',
      documentImage: '/assets/feed/document.png',
      downloadIcon: '/assets/feed/download.png',
    },
  ]

  return (
    <div className="bg-white h-[402px] my-4 rounded-[4px]">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-sm font-bold text-[#181818]">High rated post from your feed</p>
        <FaEllipsisH className="text-[#181818] hover:text-primary cursor-pointer w-[20px] h-[24px]" />
      </div>

      {/* Post Divider */}
      <div className="w-full h-[1px] bg-[#F4F4F4] mb-3" />

      {/* User Info */}
      <div className="flex items-center mt-3 space-x-4 px-8">
        <Image
          src="/assets/feed/profile.png"
          alt="Profile"
          width={52}
          height={52}
          className="rounded-full"
          onError={() => setSrc("/Images/Images1.png")}
        />
        <div>
          <h1 className="text-sm font-bold">Nikhil Gupta</h1>
          <span className="text-xs text-gray-500">Senior Fashion Designer</span>
        </div>
      </div>

      {/* Post Description */}
      <div className="text-gray-600 mt-4 px-8">
        <p className="text-sm font-normal leading-[21px]">There is some new guidelines for Fashion Designers</p>

        {/* Documents */}
        <div className="mt-3 space-y-4">
          {documentItems.map((item, index) => (
            <div key={index} className="w-full h-[80px] bg-[#FFE3EF] flex items-center p-[1.3rem] rounded-lg">
              <Image
                width={42}
                height={42}
                src={item.documentImage}
                alt="Document"
                className="rounded-full object-cover"
              />
              <div className="ml-4 space-y-3">
                <p className="text-base text-[#181818]">{item.title}</p>
                <span className="text-xs text-[#181818]">{item.fileSize}</span>
              </div>
              <div className="ml-auto mr-[1rem]">
                <Image
                  width={24}
                  height={24}
                  src={item.downloadIcon}
                  alt="Download"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Divider */}
      <div className="w-full h-[1px] bg-[#F4F4F4] mt-4 mb-3" />

      {/* Stats and Share Button */}
      <div className="flex justify-between items-center px-9 mb-4 mt-4">
          {/* Stats */}
          <div className="relative flex gap-[4rem]">
            {" "}
            {/* Increased spacing */}
            {/* Likes */}
            <div className="flex items-center space-x-2">
              {liked ? (
                <BiSolidLike
                  size={20}
                  className="cursor-pointer text-[#a35285]" // Color when liked
                  onClick={handleLikeClick} // Increment likes on click
                />
              ) : (
                <BiLike
                  size={20}
                  className="cursor-pointer text-[#a35285]" // Color when not liked
                  onClick={handleLikeClick} // Increment likes on click
                />
              )}
              {/* Like count */}
              <span className="text-[14px] font-semibold font-[Gotham]">
                {likeCount}
              </span>
            </div>
            {/* Stats Border */}
            <div className="absolute w-[1px] left-[4.4rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
            {/* Comments */}
            <div className="flex items-center space-x-2">
              {" "}
              {/* Adjusted icon-text spacing */}
              <Image
                height={100}
                width={100}
                alt="like"
                src="/assets/feed/comment.png"
                className="w-[13.12px] h-[13.12px]"
              />
              <span className="text-[14px] font-semibold font-[Gotham]">0</span>
            </div>
            {/* Stats Border */}
            <div className="absolute w-[1px] left-[11rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
          </div>
          {/* Share Btn */}
          <div
            className="relative flex items-center space-x-2 cursor-pointer"
            onClick={openModal}
          >
            <FaShareAlt className="text-primary text-[20px]" />
            <span className="text-sm font-semibold">SHARE</span>
          </div>
        </div>


      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default PostCard
