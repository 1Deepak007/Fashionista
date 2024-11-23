import React from "react";
import Image from "next/image"; // Don't forget to import Image from Next.js
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
        <div className="bg-white rounded-lg shadow-lg p-6 w-[342pxpx] max-h-[420px] fixed top-[120px] right-5 z-50">
            {/* Close Button */}
            <button
                type="button"
                className="absolute -left-11 top-0 bg-white text-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-200 hover:text-gray-900"
                onClick={closeModal}
            >
                <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>

            {/* Profile Section */}
            <div className="text-center space-y-4">
                <div className="flex items-center space-x-4">
                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="rounded-full h-[71px] w-[71px]"
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
                        <p className="text-[11px]">Setting and Privacy</p>
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

                {/* Sign Out Button */}
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
