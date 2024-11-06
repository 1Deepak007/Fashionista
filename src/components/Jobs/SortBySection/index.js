"use client"
import React from 'react'

export default function Index(props) {
    return (
        <div>
            <div className="flex justify-center items-center my-4 space-x-4">
                <hr className="flex-grow border-gray-300" />
                <p className="text-center text-[12px] font-[Gotham] font-[600] uppercase">
                    {props.headingText}
                </p>
                <hr className="flex-grow border-gray-300" />
            </div>
        </div>
    )
}
