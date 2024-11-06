"use client"

import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="bg-white w-[290px] h-[75px] text-center mb-3 rounded-[4px]">
                <div className="flex justify-center w-[290px] h-[75px] mb-3">
                    <button
                        className="rounded-md px-4 w-[269px] my-auto text-[12px] h-[32px] font-[700] font-[Arial] leading-[13.8px] text-white uppercase"
                        style={{ background: 'linear-gradient(0deg, #A45286 0%, #DC85BC 100%)' }}
                    >
                        Write new article
                    </button>
                </div>
            </div>
        </div>
    )
}
