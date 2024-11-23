"use client";

import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { MdArrowOutward } from "react-icons/md";
import OtherModal from '../Other/index'
import SearchModal from '../Search/index'

// Lazy load icons
const SlFeed = dynamic(() => import("react-icons/sl").then(mod => mod.SlFeed));
const GoPeople = dynamic(() => import("react-icons/go").then(mod => mod.GoPeople));
const FiBriefcase = dynamic(() => import("react-icons/fi").then(mod => mod.FiBriefcase));
const IoChatbubbleEllipsesOutline = dynamic(() => import("react-icons/io5").then(mod => mod.IoChatbubbleEllipsesOutline));
const IoNotificationsOutline = dynamic(() => import("react-icons/io5").then(mod => mod.IoNotificationsOutline));
const AiOutlineShop = dynamic(() => import("react-icons/ai").then(mod => mod.AiOutlineShop));
const FaSearch = dynamic(() => import("react-icons/fa").then(mod => mod.FaSearch));
const FaHome = dynamic(() => import("react-icons/fa").then(mod => mod.FaHome));
const FaUsers = dynamic(() => import("react-icons/fa").then(mod => mod.FaUsers));
const FaBriefcase = dynamic(() => import("react-icons/fa").then(mod => mod.FaBriefcase));
const FaComments = dynamic(() => import("react-icons/fa").then(mod => mod.FaComments));
const FaBell = dynamic(() => import("react-icons/fa").then(mod => mod.FaBell));
const FaStore = dynamic(() => import("react-icons/fa").then(mod => mod.FaStore));
const FaEllipsisH = dynamic(() => import("react-icons/fa").then(mod => mod.FaEllipsisH));

const Navbar = () => {
    // eslint-disable-next-line
    const [menuOpen, setMenuOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState("Search");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeLink, setActiveLink] = useState('/feed'); // Track the active link
    const [scrollerStyle, setScrollerStyle] = useState({});

    // Refs for each link to track position
    const feedRef = useRef(null);
    const networkRef = useRef(null);
    const jobsRef = useRef(null);
    const chatRef = useRef(null);
    const notificationsRef = useRef(null);
    const shopRef = useRef(null);

    const handleLinkClick = (link, ref) => {
        setActiveLink(link); // Set the active link
        const offsetLeft = ref.current.offsetLeft;
        const width = ref.current.offsetWidth;
        setScrollerStyle({
            left: `${offsetLeft - 19}px`, // Move the scroller to the clicked link
            width: `${width + 36}px`      // Adjust the width of the scroller
        });
    };

    useEffect(() => {
        // Set initial scroller position when the component mounts
        const activeRefMap = {
            '/feed': feedRef,
            '/network': networkRef,
            '/jobs': jobsRef,
            '/chat': chatRef,
            '/notifications': notificationsRef,
            '/shop': shopRef,
        };

        const activeRef = activeRefMap[activeLink];
        if (activeRef && activeRef.current) {
            const { offsetLeft, offsetWidth } = activeRef.current;
            setScrollerStyle({
                left: `${offsetLeft - 19}px`,
                width: `${offsetWidth + 36}px`,
            });
        }
    }, [activeLink]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsSearchOpen(false);
        setIsPostShare(false);
    };

    // Debounce search input
    useEffect(() => {
        const handler = setTimeout(() => {
            // Execute search logic here
            console.log(searchQuery); // Placeholder for search functionality
        }, 300); // Adjust debounce time as needed

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    return (
        <>
            <nav className="bg-white shadow-md w-full relative top-[2px] text-[20px] h-[80px] py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center  space-x-4">
                        <div className="relative w-[130px] ">
                            <Link href='/'>
                                <h1 className="uppercase text-[20px] font-[400] text-primary font-[Bungee] pl-[0.55rem]">Modewelt</h1>
                            </Link>
                            <div className="absolute border-r-2 h-[90px] border-[#DDDDDD] top-[-2.1rem] left-[10.5rem]"></div>
                        </div>
                        <ul className="relative hidden w-[519px] left-[1.3rem] md:flex space-x-6 justify-around mt-[-7px]">
                            <div className="absolute bottom-0 h-[3px] rounded-t-[50px] bg-gradient-to-r bg-[#A45286] top-[4rem] shadow-lg transition-all duration-300 ease-in-out" style={scrollerStyle}></div>
                            
                            {/* Navigation Links */}
                            <li ref={feedRef} onClick={() => handleLinkClick('/feed', feedRef)} className="text-[#181818] hover:text-primary text-[12px] font-[600] font-[Arial] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/feed" className="flex flex-col items-center">
                                    <SlFeed className="my-2 w-[24px] h-[24px]" />
                                    Feed
                                </Link>
                            </li>
                            <li ref={networkRef} onClick={() => handleLinkClick('/network', networkRef)} className="text-[#181818] hover:text-primary text-[12px] font-[600] font-[Arial] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/network" className="flex flex-col items-center">
                                    <GoPeople className="my-2 w-[24px] h-[24px]" />
                                    Network
                                </Link>
                            </li>
                            <li ref={jobsRef} onClick={() => handleLinkClick('/jobs', jobsRef)} className="text-[#181818] hover:text-primary text-[12px] font-[600] font-[Arial] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/jobs" className="flex flex-col items-center">
                                    <FiBriefcase className="my-2 w-[24px] h-[24px]" />
                                    Jobs
                                </Link>
                            </li>
                            <li ref={chatRef} onClick={() => handleLinkClick('/chat', chatRef)} className="text-[#181818] hover:text-primary text-[12px] font-[600] font-[Arial] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/chat" className="flex flex-col items-center">
                                    <IoChatbubbleEllipsesOutline className="my-2 w-[24px] h-[24px]" />
                                    Chat
                                </Link>
                            </li>
                            <li ref={notificationsRef} onClick={() => handleLinkClick('/notifications', notificationsRef)} className="text-[#181818] hover:text-primary text-[12px] font-[600] font-[Arial] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/notifications" className="flex flex-col items-center">
                                    <IoNotificationsOutline className="my-2 w-[24px] h-[24px]" />
                                    Notices
                                </Link>
                            </li>
                            <li ref={shopRef} onClick={() => handleLinkClick('/shop', shopRef)} className="text-[#181818] hover:text-primary text-[12px] font-[600] font-[Arial] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/shop" className="flex flex-col items-center">
                                    <AiOutlineShop className="my-2 w-[24px] h-[24px]" />
                                    Shop
                                </Link>
                            </li>
                            <div className="absolute border-r-2 h-[81px] top-[-7px] border-[#DDDDDD] left-[32.5rem]"></div>
                        </ul>
                    </div>

                    <div className="relative ml-[5rem] flex w-[270px]">
                        <FaSearch className="w-[24px] h-[24px] absolute left-1 top-1/2 transform -translate-y-1/2 text-[#bb679c]" /> {/* Positioned Search Icon */}
                        <input
                            type="text"
                            className="placeholder:text-left w-[12rem] ml-[1.875rem] h-[24px] text-[16px] font-[Gotham] text-[#CECECE] right-10 font-[100] pl-4 border-none outline-none" // Added padding to the left for the icon
                            placeholder={placeholder}
                            onFocus={() => setPlaceholder('')}
                            onBlur={() => setPlaceholder('Search')}
                            onClick={toggleSearch}
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                        <SearchModal isSearchOpen={isSearchOpen} closeModal={closeModal} />
                    </div>


                    <div className="absolute border-r-2 h-[81px] top-[-1px] border-[#DDDDDD] left-[62rem]"></div>
                    <div className="flex w-[330px] mr-[5rem] ">
                        <div className="relative flex items-center ">
                            <Link href="/profile" className="flex items-center gap-[0.5rem] space-x-2">
                                <Image
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    width={100}
                                    height={100}
                                    alt="Profile"
                                    className="w-[42px] h-[42px] rounded-full"
                                />
                                <div>
                                    <div className='flex gap-[0.5rem]'>
                                        <div className="text-[#181818] font-[600] font-[Arial] text-[12px] cursor-pointer uppercase">Aditya Kumar </div>
                                        <div className="text-[#A4528633] text-[12px] uppercase font-[Gotham]">You</div>
                                    </div>
                                    <div className='flex gap-[0.5rem]'>
                                        <div className='text-[#747474] text-[12px] font-[Gotham]'>375  views today</div>
                                        <div className="text-[#02B033] text-[12px] flex font-[Gotham]">+32 <MdArrowOutward className='relative w-[12px] h-[12px] top-[3px]' /></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute border-r-2 h-[81px] top-[-1px] border-[#DDDDDD] left-[83rem]"></div>
                    <div className='relative right-[5rem] bottom-[3px] flex flex-col items-center w-[90px] justify-center' onClick={toggleModal}>
                        <OtherModal isModalOpen={isModalOpen} closeModal={closeModal} />
                        <FaEllipsisH className="text-gray-700 hover:text-primary text-[20px] cursor-pointer w-[24px] h-[24px] " />
                        <button className="text-[#181818] text-[12px] w-[44px] h-[11px] hover:text-primary font-[600]">
                            OTHER
                        </button>
                    </div>
                    <div className="absolute border-r-2 h-[81px] top-[-1px] border-[#DDDDDD] left-[91.5rem]"></div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col space-y-2 px-4 py-2">
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/feed" className="flex items-center" prefetch>
                                <FaHome className="mr-2 w-[24px] h-[24px]" /> Feed
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/network" className="flex items-center" prefetch>
                                <FaUsers className="mr-2 w-[24px] h-[24px]" /> Network
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/jobs" className="flex items-center" prefetch>
                                <FaBriefcase className="mr-2 w-[24px] h-[24px]" /> Jobs
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/chat" className="flex items-center" prefetch>
                                <FaComments className="mr-2 w-[24px] h-[24px]" /> Chat
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/notifications" className="flex items-center" prefetch>
                                <FaBell className="mr-2 w-[24px] h-[24px]" /> Notices
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/shop" className="flex items-center" prefetch>
                                <FaStore className="mr-2 w-[24px] h-[24px] " /> Shop
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
