import React from 'react';
import Image from 'next/image'; // Don't forget to import Image from Next.js
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function OtherModal({ isModalOpen, closeModal }) {

    const router = useRouter();

    // Logout function
    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/auth');
            setTimeout(() => {
                toast.success('Logout successfully');
            }, 2000);
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    return (
        <div>
            {/* Other Modal content */}
            <div
                id="popup-modal"
                tabIndex="-1"
                className={`${isModalOpen ? 'flex' : 'hidden'} overflow-y-hidden w-[399px] fixed top-[88px] right-9 z-50 max-w-md h-[420px] max-h-full`}
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        {/* Close Button */}
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={closeModal} // Close modal on click
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
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Modal Content */}
                        <div className="p-4 md:p-6 text-center space-y-4"> {/* Adjusted padding and spacing */}
                            {/* Profile Section */}
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/profile.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full h-[71px] w-[71px]"
                                />
                                <div className="text-left">
                                    <h1 className="text-[16px] font-semibold">Befog</h1>
                                    <span className='text-[10px]'>Illustration Designer</span>
                                </div>
                            </div>

                            {/* View Profile Button */}
                            <button
                                onClick={closeModal} // Close modal on button click
                                type="button"
                                style={{ background: 'linear-gradient(180deg, #D675B2 0%, #A45286 100%)' }}
                                className="text-white w-[308px] h-[37px] font-medium rounded-lg text-sm inline-flex items-center justify-center px-5 py-2"
                            >
                                View your profile
                            </button>

                            {/* Settings and Management Section */}
                            <div className="space-y-4 text-left">
                                <div className="space-y-2">
                                    <p className='text-[11px]'>Settings and Privacy</p>
                                    <p className='text-[11px]'>Help</p>
                                    <p className='text-[11px]'>Language</p>
                                </div>
                                <hr />
                                <div className="space-y-2">
                                    <h1 className="font-medium text-[14px]">Manage</h1>
                                    <div className="space-y-1">
                                        <p className='text-[11px]'>Past Activities</p>
                                        <p className='text-[11px]'>Job and Account</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            {/* Sign Out Button */}
                            <div className="flex justify-center mt-4"> {/* Centered with margin */}
                                <button
                                    onClick={() => {
                                        closeModal(); // Close modal on button click
                                        logout(); // Call logout function
                                    }}
                                    type="button"
                                    style={{ background: 'linear-gradient(180deg, #D675B2 0%, #A45286 100%)' }}
                                    className="text-white w-[111px] h-[32px] justify-center text-[12px] focus:ring-4 focus:outline-none font-medium rounded-lg inline-flex items-center px-5 py-2.5"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherModal;
