"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaEllipsisH, FaShareAlt } from 'react-icons/fa'
import Modal from "../Sharepopup/Model"

const PostCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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

  const stats = [
    { icon: '/assets/feed/like.png', count: 28, label: 'Likes' },
    { icon: '/assets/feed/comment.png', count: 79, label: 'Comments' },
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
        <div className="relative flex gap-[4rem]">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Image
                height={13}
                width={13}
                alt={stat.label}
                src={stat.icon}
                className="w-[13px] h-[13px]"
              />
              <span className="text-sm font-semibold">{stat.count}</span>
            </div>
          ))}
        </div>
        <div className="relative flex items-center space-x-2 cursor-pointer" onClick={openModal}>
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
