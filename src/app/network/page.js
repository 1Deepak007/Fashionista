'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Connections from '../../components/Network/connection'
import Invitations from '../../components/Network/invitation'
import Pages from '../../components/Network/pages'
import Groups from '../../components/Network/groups'
import Teammates from '../../components/Network/teammates'
import Hashtags from '../../components/Network/hashtag'

export default function Network() {
    // State to control which section is active
    const [activeSection, setActiveSection] = useState('connections');
    const scrollerRef = useRef(null);

    // References for each link item
    const connectionsRef = useRef(null);
    const invitationsRef = useRef(null);
    const teammatesRef = useRef(null);
    const groupsRef = useRef(null);
    const pagesRef = useRef(null);
    const hashtagsRef = useRef(null);

    // Mapping active section to corresponding ref
    const sectionRefs = {
        connections: connectionsRef,
        invitations: invitationsRef,
        teammates: teammatesRef,
        groups: groupsRef,
        pages: pagesRef,
        hashtags: hashtagsRef,
    };

    // Move scroller to selected link
    useEffect(() => {
        const activeRef = sectionRefs[activeSection];
        if (activeRef.current && scrollerRef.current) {
            const topPosition = activeRef.current.offsetTop;
            scrollerRef.current.style.top = `${topPosition + 0.6}px`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSection]);

    return (
        <div className="mt-[45px] ml-[134px] flex">
            {/* Left Sidebar */}
            <div className="w-[290px] h-[306px] bg-[#FFFFFF]">
                <ul className="relative space-y-0">
                    {/* Scroller */}
                    <div
                        ref={scrollerRef}
                        className="absolute bottom-0 w-[5px] h-[48px] top-[0.6px] rounded-r-[50px] bg-gradient-to-r bg-[#A45286] shadow-lg transition-all duration-300 ease-in-out">
                    </div>

                    {/* Connection Links */}
                    <li
                        ref={connectionsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                        onClick={() => setActiveSection('connections')}
                    >
                        <div className={`w-full flex justify-between items-center`} >
                            <div className={`flex transition transition-300 ${activeSection === 'connections' && 'relative left-[0.7rem] opacity-[0.6]'}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    className='w-[16px] h-[16px]'
                                    src="/assets/network/connection.png"
                                    alt='connection'
                                />
                                <span className="font-[Arial] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">Connections</span>
                            </div>

                            <div className='flex gap-2'>
                                <Image className='w-[9px] h-[9px]' height={100} width={100} alt='active' src='/assets/network/active.png' />
                                <span className='font-[Gotham] text-[12px] bg-clip-text text-transparent bg-gradient-to-r from-[#ED8F03] to-[#FBAE4A] font-[700] leading-[11.48px]'>1,038</span>
                            </div>
                        </div>
                    </li>

                    {/* Invitation Links */}
                    <li
                        ref={invitationsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'invitations' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('invitations')}
                    >
                        <div className={`flex transition transition-300 ${activeSection === 'invitations' && 'relative left-[0.7rem]'}`}>
                            <Image
                                width={100}
                                height={100}
                                className='w-[16px] h-[16px]'
                                src="/assets/network/invitation.png"
                                alt='invitation'
                            />
                            <span className="font-[Arial] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">INVITATIONS</span>
                        </div>
                        <span className="ml-auto font-[Gotham] text-[#000000] text-[12px] font-[700] leading-[11.48px]">2</span>
                    </li>

                    {/* Teammate Links */}
                    <li
                        ref={teammatesRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'teammates' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('teammates')}
                    >
                        <div className={`flex transition transition-300 ${activeSection === 'teammates' && 'relative left-[0.7rem]'}`}>
                            <Image
                                width={100}
                                height={100}
                                className='w-[16px] h-[16px]'
                                src="/assets/network/teammate.png"
                                alt='teammate'
                            />
                            <span className="font-[Gotham] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">TEAMMATES</span>
                        </div>
                        <span className="ml-auto font-[Gotham] text-[#000000] text-[12px] font-[700] leading-[11.48px]"></span>
                    </li>

                    {/* Group Links */}
                    <li
                        ref={groupsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'groups' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('groups')}
                    >
                        <div className={`flex transition transition-300 ${activeSection === 'groups' && 'relative left-[0.7rem]'}`}>
                            <Image
                                width={100}
                                height={100}
                                className='w-[16px] h-[16px]'
                                src="/assets/network/group.png"
                                alt='group'
                            />
                            <span className="font-[Gotham] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">GROUPS</span>
                        </div>
                        <span className="ml-auto font-[Gotham] text-[#000000] text-[12px] font-[700] leading-[11.48px]">6</span>
                    </li>

                    {/* Page Links */}
                    <li
                        ref={pagesRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'pages' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('pages')}
                    >
                        <div className={`flex transition transition-300 ${activeSection === 'pages' && 'relative left-[0.7rem]'}`}>
                            <Image
                                width={100}
                                height={100}
                                className='w-[16px] h-[16px]'
                                src="/assets/network/page.png"
                                alt='page'
                            />
                            <span className="font-[Gotham] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">PAGES</span>
                        </div>
                        <span className="ml-auto font-[Gotham] text-[#000000] text-[12px] font-[700] leading-[11.48px]">28</span>
                    </li>

                    {/* Hashtag Links */}
                    <li
                        ref={hashtagsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'hashtags' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('hashtags')}
                    >
                        <div className={`flex transition transition-300 ${activeSection === 'hashtags' && 'relative left-[0.7rem]'}`}>
                            <Image
                                width={100}
                                height={100}
                                className='w-[16px] h-[16px]'
                                src="/assets/network/hashtag.png"
                                alt='hashtag'
                            />
                            <span className="font-[Arial] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">HASHTAGS</span>
                        </div>
                        <span className="ml-auto font-[Gotham] text-[#000000] text-[12px] font-[700] leading-[11.48px]">8</span>
                    </li>
                </ul>
            </div>

            {/* Right Content */}
            <div className="ml-16 mb-10 space-y-8">
                {activeSection === 'connections' && (
                    <Connections />
                )}

                {activeSection === 'invitations' && (
                    <Invitations />
                )}

                {activeSection === 'pages' && (
                    <Pages />
                )}

                {activeSection === 'groups' && (
                    <Groups />
                )}

                {activeSection === 'teammates' && (
                    <Teammates />
                )}

                {activeSection === 'hashtags' && (
                    <Hashtags />
                )}
            </div>
        </div>
    );
}

