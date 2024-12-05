"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { FaEllipsisH, FaShareAlt } from "react-icons/fa";
import Modal from "../Sharepopup/Model";
import { BiLike, BiSolidLike } from "react-icons/bi";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [likeCount, setLikeCount] = useState(28);
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

  return (
    <div className="bg-white w-[850px] h-auto my-4 rounded-[4px]">
      {/* Header Post */}
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-[10px] font-[Gotham] leading-[15px]">
          <span className="text-[#A45286]">Audrey Alexander</span> commented this
        </p>
        {/* Share Pointers */}
        <FaEllipsisH className="text-[#181818] cursor-pointer hover:text-primary w-[20px] h-[24px]" />
      </div>

      {/* Border Top of Post */}
      <div className="w-[850px] h-[1px] bg-[#F4F4F4] mb-3"></div>

      {/* User Info */}
      <div className="flex items-center mt-3 space-x-4 px-8">
        <Image
          src="/assets/feed/profile.png"
          alt="Profile"
          width={52}
          height={52}
          className="rounded-full"
          onError={() => console.log("Error loading image")}
        />
        <div className="flex flex-col">
          <h1 className="text-[14px] font-semibold">Prashant</h1>
          <span className="text-[10px] text-gray-500">Product Designer at Fashionista</span>
        </div>
      </div>

      {/* Description Post */}
      <div className="mt-1 text-gray-600 relative px-8">
        <div className="text-[14px] overflow-hidden max-h-[100px] transition-all duration-500 ease-in-out">
          How’s your day going, guys?
        </div>
      </div>

      {/* Image */}
      <div className="mt-5">
        <Image
          src="/assets/feed/bc.png"
          alt="Post Image"
          width={790}
          height={300}
          className="object-cover mx-auto w-full h-[300px]"
        />
      </div>

      {/* Border Bottom of Post */}
      <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-1 mb-3"></div>

      {/* Stats Post */}
      <div className="flex justify-between items-center pb-[16px] px-9 mb-4 mt-4">
        <div className="flex gap-16 relative">
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

          {/* Comments */}
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/feed/comment.png"
              alt="comment"
              width={13}
              height={13}
              className="w-[13.12px] h-[13.12px]"
            />
            <span className="text-[14px] font-semibold">79</span>
          </div>
        </div>

        {/* Share Button */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={openModal}
        >
          <FaShareAlt className="text-primary text-lg" />
          <span className="text-sm font-semibold text-gray-800">SHARE</span>
        </div>
      </div>

      {/* Modal for Sharing */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Post;
