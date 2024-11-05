"use client"

import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="bg-white h-[265px] p-4 mb-3">
                <p className="font-[600] text-[12px] uppercase leading-[11.48px] font-[Gotham]">Followed hashtags</p>

                {/* Divider */}
                <hr className="border-t border-[#F4F4F4] mt-4" />

                <div className="flex flex-wrap items-center w-[240px] mt-4 gap-[0.5rem]">
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#work</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#business</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#hr</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#userinterface</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#digital</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#userexperience</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#ux</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#ui</div>
                    <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#freelance</div>
                </div>
            </div>
        </div>
    )
}
