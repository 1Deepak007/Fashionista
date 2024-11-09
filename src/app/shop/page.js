import React from 'react';
import Image from 'next/image';

function Page() {
    return (
        <div className='h-auto mt-[10px] justify-center'>
            <div className="w-[1440px] h-[599px] flex flex-col items-center justify-center">
                <div className="w-[1224px] h-[54px] space-x-7 flex justify-center">
                    <button
                        className="w-[589px] border-gray-300 border-2"
                        style={{ background: 'linear-gradient(90deg, #D36BAD 0%, #A45286 100%)', color: 'white' }}
                    >
                        Button 1
                    </button>
                    <button
                        className="w-[589px] border-gray-300 border-2"
                        style={{ background: 'linear-gradient(90deg, #D36BAD 0%, #A45286 100%)', color: 'white' }}
                    >
                        Button 2
                    </button>
                </div>

                <div className="mt-[124px] w-[966px] h-auto flex flex-col items-center">
                    <p className='w-[966px] h-auto text-[#A45286] text-[30px] text-center'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                    </p>

                    <p className='w-[755px] h-auto text-[#8F8F8F] mt-7 text-center'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                    </p>
                </div>

                {/* Search Box with Icon */}
                <div className="mt-12 w-[966px] flex justify-center relative">
                    <input
                        type="text"
                        placeholder='Search'
                        className="w-[501px] h-[44px] border-2 border-gray-300 rounded-full p-2 pl-10 pr-10 focus:outline-none focus:border-[#D36BAD] transition-colors"
                    />
                    {/* Search Icon */}
                    <span className="absolute ml-[26rem] top-1/2 transform -translate-y-1/2 text-gray-500">
                        {/* Example SVG Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 3a8 8 0 100 16 8 8 0 000-16zM21 21l-4.35-4.35"
                            />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="w-[1442px] py-10 px-14 h-auto mb-2">
                <div className="flex justify-between mx-auto mb-2">
                    <p className="font-semibold text-xl">Featured Products</p>
                    <p className="text-right text-gray-500">More Products</p>
                </div>
                <div className="flex justify-center space-x-9"> {/* Centering the image cards */}
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="w-[286px] h-[424px] mt-6 transition-transform transform hover:scale-105">
                            <div className="relative w-full h-[366px] border-2 border-gray-300 mb-2 overflow-hidden rounded-lg shadow-md">
                                <span className="absolute top-2 left-2 bg-[#A45286] text-white text-xs font-bold px-2 py-1 rounded">-50%</span>
                                <Image
                                    src='/path/to/your/image.jpg' // Replace with actual image paths
                                    alt='Product Image'
                                    layout="fill" // Ensures the image covers the entire div
                                    objectFit="cover" // Maintains aspect ratio
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="p-4 rounded-lg">
                                <p className="text-lg font-semibold">Waterproof Watch | FireBolt</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-gray-600">$120  <span className="">$150</span> </span>
                                    <span className="text-[#A45286] font-bold">icon </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[1440px] h-[599px] flex flex-col items-center justify-center">
                <div className=" w-[966px] h-auto flex flex-col items-center">
                    <p className='w-[966px] h-auto text-[#A45286] text-[30px] text-center'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                    </p>

                    <p className='w-[755px] h-auto text-[#8F8F8F] mt-7 text-center'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Page;
