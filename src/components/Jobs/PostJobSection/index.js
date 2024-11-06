"use client"
import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="w-[290px] h-[75px] flex justify-center bg-white mb-3 rounded-[4px]">
                <button
                    className="flex items-center justify-center w-[230px] my-auto h-[32px] rounded-[4px]"
                    style={{ background: 'linear-gradient(0deg, #A45286 0%, #DC85BC 100%)' }}
                >
                    <span className='font-[Gotham] text-[12px] text-white leading-[11.48px] uppercase'>Post a Job</span>
                </button>
            </div>
        </div>
    )
}
