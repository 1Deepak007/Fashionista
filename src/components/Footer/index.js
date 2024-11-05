"use client";

import Link from "next/link";
import React from "react";
// import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
// import { useDispatch } from "react-redux";
// import { FaQuestionCircle } from 'react-icons/fa';
// import { CiSettings } from "react-icons/ci";
import Image from "next/image";

const Footer = () => {
    // const dispatch = useDispatch();
    const use_case = [
        { title: "About", link: "/", id: "about" },
        { title: "Career", link: "/career", id: "career" },
        { title: "Advertising", link: "/advertising", id: "advertising" },
        { title: "Small Business", link: "/business", id: "business" },
    ];

    const services = [
        { title: "Talent Solutions", link: "/talent", id: "talent" },
        { title: "Marketing Solutions", link: "/marketing", id: "marketing" },
        { title: "Sales Solutions", link: "/sales", id: "sales" },
        { title: "Safety Center", link: "/safety", id: "safety" },
    ];

    const explore = [
        { title: "Community Guidelines", link: "/comunity", id: "community" },
        { title: "Privacy & Terms", link: "/terms", id: "terms" },
        { title: "Mobile App", link: "/app", id: "app" },
    ];

    return (
        <>
            <div className="line w-full mx-auto h-px bg-[#A45286]" />
            <footer className="bg-[#F7F9FB] h-[215px] flex justify-center flex-col">
                {/* Logo */}
                <div className="px-[4rem] flex justify-around">
                    <Link href="/" className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <h1 className="text-[20px] font-[400] text-[#934276] font-[Bungee] leading-[30px] uppercase">Fashionista</h1>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
                        <h1 className="font-bold text-[#333333] text-[12px] mb-5 font-[Gotham]">Navigation</h1>
                        <ul>
                            {use_case.map((link, index) => (
                                <li key={index} className="md:my-1.5 my-0 md:text-[12px] text-[#181818] text-sm font-[Gotham]">
                                    <Link
                                        href={link.link}
                                        className="py-0.5 text-black block w-full hover:text-[#A45286] duration-200 ease-in-out transition-all"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3 flex items-end">
                        <ul>
                            {services.map((link, index) => (
                                <li key={index} className="md:my-1.5 my-0 md:text-[12px] text-[#181818] text-sm font-[Gotham]">
                                    <Link
                                        href={link.link}
                                        className="py-0.5 text-black block w-full hover:text-[#A45286] duration-200 ease-in-out transition-all"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3 flex items-center">
                        <ul>
                            {explore.map((link, index) => (
                                <li key={index} className="md:my-1.5 my-0 md:text-[12px] text-[#181818] text-sm font-[Gotham]">
                                    <Link
                                        href={link.link}
                                        className="py-0.5 text-black block w-full hover:text-[#A45286] duration-200 ease-in-out transition-all"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fast Access Section */}
                    <div className="md:col-span-1 sm:col-span-2">
                        <h1 className="font-bold text-[#333333] text-[12px] mb-5 font-[Gotham]">Fast Access</h1>
                        <ul>
                            <li className="md:my-1.5 my-0 md:text-base text-sm relative">
                                <Link href="/quick-access-1" className="py-0.5 block w-full duration-200 ease-in-out transition-all">
                                    <button
                                        type="button"
                                        className="font-[Gotham] text-[#FFFFFF] bg-[#934276] border border-[#934276] w-[170px] h-[32px] gap-[3rem] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-[12px] px-3 py-2.5 inline-flex items-center me-2 mb-2 uppercase"
                                    >
                                        Questions?
                                        <Image
                                            src="/assets/footer/question.png"
                                            className="w-[16px] h-[16px]"
                                            alt="question"
                                            width={200}
                                            height={200}
                                        />
                                    </button>
                                </Link>
                            </li>
                            <li className="md:my-1.5 my-0 md:text-base text-sm relative">
                                <Link href="/quick-access-1" className="py-0.5 block w-full  duration-200 ease-in-out transition-all">
                                    <button
                                        type="button"
                                        className="font-[Gotham] text-[#934276] bg-white border border-[#934276] w-[170px] h-[32px] gap-[4.1rem] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-[12px] px-3 py-2.5 inline-flex items-center me-2 mb-2 uppercase"
                                    >
                                        Settings
                                        <Image
                                            src="/assets/footer/setting.png"
                                            className="w-[16px] h-[16px]"
                                            alt="setting"
                                            width={200}
                                            height={200}
                                        />
                                    </button>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Language Section */}
                    <div className="md:col-span-1 sm:col-span-2">
                        <h1 className="font-bold text-[#333333] text-[12px] mb-5 font-[Gotham]">Language</h1>
                        <ul>
                            <li>
                                <select
                                    className="w-[270px] h-[32px] border-[1px] border-[#F0F0F0] text-[#181818] py-1 px-2 uppercase"
                                >
                                    <option className="text-[#181818] font-[Gotham] text-[12px] leading-[11.48px] uppercase" value="">English</option>
                                    <option className="text-[#181818] font-[Gotham] text-[12px] leading-[11.48px] uppercase" value="es">Spanish</option>
                                    <option className="text-[#181818] font-[Gotham] text-[12px] leading-[11.48px] uppercase" value="fr">French</option>
                                    <option className="text-[#181818] font-[Gotham] text-[12px] leading-[11.48px] uppercase" value="de">German</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
