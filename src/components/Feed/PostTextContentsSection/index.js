"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEllipsisH, FaShareAlt } from "react-icons/fa";
import Modal from "../Sharepopup/Model";
import { BiLike, BiSolidLike } from "react-icons/bi";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
  return (
    <div>
      <div className="bg-white h-[259px] my-4 rounded-[4px]">
        <div className="flex justify-between items-center px-4 py-2">
          <p className="leading-[15px] text-[10px] font-[Gotham] text-[#181818]">
            First post from{" "}
            <span className="text-primary">Audrey Alexander</span>
          </p>
          {/* Share Pointers */}
          <FaEllipsisH className="text-[#181818] hover:text-primary cursor-pointer w-[20px] h-[24px]" />
        </div>

        {/* Border Top of Post */}
        <div className="w-[850px] h-[1px] bg-[#F4F4F4] mb-3"></div>

        {/* User Info */}
        <div className="flex items-center mt-3 space-x-4 px-8">
          <Image
            src="/assets/feed/profile.png"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full w-[52px] h-[52px]"
            onError={() => setSrc("/Images/Images1.png")}
          />
          <div className="flex flex-col">
            <h1 className="text-[14px] font-[Arial] font-[700]">
              Aditya Kumar Kanaujiya
            </h1>
            <span className="text-[10px] font-[Arial] font-[400]">
              Team lead at Fashionista
            </span>
          </div>
        </div>

        {/* Post Description */}
        <div className="text-gray-600 mt-4 px-8">
          <p className="text-[14px] font-[400] leading-[21px] font-[Arial] mb-[1.4rem]">
            The bun runs along the road and meets a wolf. «Little bun, little
            bun, I want to eat you!» says the wolf. «I ran away from
            Grandfather, I ran away from Grandmother, I ran away from the hare.
            And I can run away from you, grey wolf!» says the bun and runs away.
          </p>
        </div>

        {/* Border Bottom of Post */}
        <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-4 mb-3"></div>

        {/* Stats Post */}
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
    </div>
  );
}
