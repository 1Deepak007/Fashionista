"use client";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import images from "../../../public/Images/Images1.png";
import { IoClose } from "react-icons/io5";
import Premium from "../Premiun/page"

function OtherModal({ isModalOpen, closeModal }) {
  const router = useRouter();

  // Logout function
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/auth");
      setTimeout(() => {
        toast.success("Logout successfully");
      }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
    {/* Modal Overlay (Transparent Background) */}
    <div
        className={`${
            isModalOpen ? 'flex' : 'hidden'
        } fixed inset-0 bg-black bg-opacity-50 z-40`}
    >
        {/* Profile Content Container */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-[342pxpx] max-h-[440px] fixed top-[120px] right-5 z-50">
            {/* Close Button */}
            <button
                type="button"
                className="absolute -left-11 top-0 bg-white text-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-200 hover:text-gray-900"
                onClick={closeModal}
            >
                <IoClose />
                <span className="sr-only">Close modal</span>
            </button>

            {/* Profile Section */}
            <div className="text-center space-y-4">
                <div className="flex items-center space-x-4">
                    <Image
                        src={images}
                        alt="Profile"
                        className="rounded-full h-20 w-20 object-cover"
                    />    
                    <div className="text-left">
                        <h1 className="text-[16px] font-semibold">Aditya Kumar Kanaujiya</h1>
                        <span className="text-[12px] text-gray-500">
                            Fashion Designer | Illustration Designer
                        </span>
                    </div>
                </div>

                {/* View Profile Button */}
                <button
                    type="button"
                    style={{
                        background: 'linear-gradient(180deg, #D675B2 0%, #A45286 100%)',
                    }}
                    className="text-white w-full h-[37px] font-medium rounded-lg text-sm inline-flex items-center justify-center px-5 py-2"
                    onClick={closeModal}
                >
                    View your profile
                </button>

                {/* Settings and Management Section */}
                <div className="space-y-4 text-left">
                    <div className="space-y-2">
                        <p onClick={() => router.push('../Premiun')} className="text-[11px] cursor-pointer">Premium</p>
                        <p className="text-[11px]">Setting</p>
                        <p className="text-[11px]">Help</p>
                        <p className="text-[11px]">Language</p>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <h1 className="font-medium text-[14px]">Manage</h1>
                        <div className="space-y-1">
                            <p className="text-[11px]">Posts & Activities</p>
                            <p className="text-[11px]">Job post account</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => {
                            closeModal();
                            logout();
                        }}
                        type="button"
                        style={{
                            background: 'linear-gradient(180deg, #D675B2 0%, #A45286 100%)',
                        }}
                        className="text-white w-[111px] h-[32px] text-[12px] font-medium rounded-lg flex items-center justify-center"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>




  );
}

export default OtherModal;
