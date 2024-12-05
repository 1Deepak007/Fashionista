"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaEllipsisH, FaShareAlt } from "react-icons/fa";
import Modal from '../Sharepopup/Model'; // Assuming Modal component is imported
import { BiLike, BiSolidLike } from "react-icons/bi";

export default function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [src, setSrc] = useState("/assets/feed/profile.png");

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

  const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, enim sunt nobis, iste quidem nam mollitia placeat optio sapiente, quam explicabo distinctio reprehenderit excepturi aliquam! Rem at cum neque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, enim sunt nobis, iste quidem nam mollitia placeat optio sapiente, quam explicabo distinctio reprehenderit excepturi aliquam! Rem at cum neque.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, odio eget luctus sodales, turpis ligula volutpat urna, nec efficitur dolor libero non erat. Aenean sit amet quam facilisis, commodo nisi ut, convallis erat.
  `;

  const trimmedText = text.substring(0, 340); // Show first 340 characters
  

  return (
    <div className="bg-white w-[850px] my-4 rounded-[4px]">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-[10px] font-[Gotham] leading-[15px]">
          <span className="text-[#A45286]">Ted Bell, Annette Nguyen</span> and
          <span className="text-[#A45286]"> Cody Hawkins</span> liked this
        </p>
        <FaEllipsisH className="text-[#181818] cursor-pointer hover:text-primary w-[20px] h-[24px]" />
      </div>

      <div className="w-[850px] h-[1px] bg-[#F4F4F4] mb-3" />

      {/* User Info */}
      <div className="flex items-center mt-3 space-x-4 px-8">
        <Image
          src={src}
          alt="Profile"
          width={52}
          height={52}
          className="rounded-full w-[52px] h-[52px]"
          onError={() => setSrc("/Images/Images1.png")}
        />
        <div className="flex flex-col">
          <h1 className="text-[14px] font-[Arial] font-bold">Aditya Kumar</h1>
          <span className="text-[10px] font-[Arial] font-light">Illustration Designer</span>
        </div>
      </div>

      {/* Post Description */}
      <div className="mt-1 text-gray-600 relative">
        <div
          className={`px-8 mt-4 text-[14px] transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? "max-h-[1000px]" : "max-h-[100px]"
          }`}
        >
          {expanded ? text : trimmedText + "..."}
        </div>
        <button
          className="px-8 my-2 mt-4 text-[#A45286] text-[12px] font-[Gotham] font-semibold uppercase cursor-pointer transition-all duration-300"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-1 mb-3" />

      {/* Stats & Share */}
      <div className="flex justify-between items-center pb-[16px] px-9 mb-4 mt-4">
        <div className="relative flex gap-[4rem]">
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

          {/* Divider */}
          <div className="absolute w-[1px] left-[4.4rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]" />

          {/* Comments */}
          <div className="flex items-center space-x-2">
            <Image
              height={13.12}
              width={13.12}
              alt="comment"
              src="/assets/feed/comment.png"
              className="w-[13.12px] h-[13.12px]"
            />
            <span className="text-[14px] font-semibold font-[Gotham]">79</span>
          </div>

          {/* Divider */}
          <div className="absolute w-[1px] left-[11rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]" />
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

      {/* Share Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
