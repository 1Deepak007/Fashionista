import React, { useEffect } from "react";

function SearchModal({ isSearchOpen, closeModal }) {
  useEffect(() => {
    // Disable body scroll when modal is open
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen]);

  return (
    <div>
      {/* Modal Overlay */}
      <div
        className={`${
          isSearchOpen ? "flex" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 z-40 justify-center items-start`}
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-lg shadow-lg p-6 absolute top-[86px] z-50"
          style={{
            width: "370px",
            height: "591px", // Fixed modal height
            marginLeft: "20rem",
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-1 -right-11 bg-white text-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-200 hover:text-gray-900"
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

          {/* Header */}
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Related Search
          </h2>

          {/* Scrollable Content */}
          <div
            className="overflow-y-auto"
            style={{
              maxHeight: "calc(100% - 60px)",
            }}
          >
            {/* Jobs Section */}
            <div className="space-y-4">
              <p className="font-medium text-gray-700">Jobs</p>
              <div className="space-y-3">
                <div className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/56f4/f3b2/45c3d4fa08edf0f75f777758c3716f59?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oHCEIwBXlPqVvLNiam2MpGJgwFfyxW-cWGXov2J7uBLfxBbC825b4IxtoKU3I-ISb49IB10JlfIhpn7bW2ghr0Nfr-DR30nEFjt9uBfdeiF8XSt4mMJJTa7nF12xv2bUDdrgRosTq4~tOVCF8XdW-fIUYGIJQd5yWyMSNQFyShSUpBBTr4~1QcffAZ5e13j9B~FmHQtpjPTRpvjysvxY2eJvnIaG0lWLvotw2SHstTMJguyjt-ryW4OVINoPVXn6BdovTo112xMNoOhfuQkz9oLR0ZIi7VbELypjTAV9C3bfVddh7XwHYTNUKxNi59FJ9GEEukHd4DRMZtziAB6Jrg__"
                    alt="Job 1"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">
                      UX/UI Designer
                    </p>
                    <p className="text-sm text-gray-500">Upwork</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3aab/992d/7a6145822373091e9304935999e0fe7f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iV0vMReJaLfDdKUyTCPaRxvokRYbffMPX0ZsEvkvu~Kk1EeH6l3rKTqVIdeZR1J6eEEd7R6ccfZJ5MoTiR~p7PFgdz73nbOUTYju8dnsp60eWfMVSjnpzj7DoBBgPZ8mpW~YXxv-7JnoE-gPAhNAarl1vFKAU2LAnMsBBTlVPBstrgvXiEZ0QR~msas0OPU~rz97TXpf-E9fJu1rVXDaRWSayPm7OP1BDRHfJ0jBI6ydf~iSXT86Vt~~cpS0CldTfDakYMOleCNX4BLF0jBEyj8fPp1YZ4lkk11DLe1dwlEbC73f65dr32nb9lQbUkeM3PbaxMp4mMkqigc8z-6dHQ__"
                    alt="Job 2"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">
                      Part-time UX Designer
                    </p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
              <p className="text-blue-500 mt-2 cursor-pointer">ALL JOBS (84)</p>
            </div>

            {/* Users Section */}
            <div className="space-y-4 mt-6">
              <p className="font-medium text-gray-700">Users</p>
              <div className="space-y-3">
                <div className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__"
                    alt="User 1"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">
                      Brandon Wilson
                    </p>
                    <p className="text-sm text-gray-500">Senior UX Designer</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__"
                    alt="User 2"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">Emily Carter</p>
                    <p className="text-sm text-gray-500">Freelancer</p>
                  </div>
                </div>
              </div>
              <p className="text-blue-500 mt-2 cursor-pointer">
                All users (1,530)
              </p>
            </div>

            {/* Articles */}
            <div className="space-y-4 mt-6">
              <p className="font-medium text-gray-700">ARTICLES</p>
              <div className="space-y-3">
                <div
                  className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm"
                  style={{
                    width: "306px",
                    height: "86px",
                  }}
                >
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8625/0f47/f6c3929980da4b58161098d6af774d2b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENduWEgShtZYZM7We8cFVZjQ-LqtJ2XeFbnDhA9FyodDvu29bMQu1Yf4V2z7DD5q~tBwLJTrLGmsbt3K3aGSULbS7ly9xAKagKYsgleca6L70uxs7ZqeWCkXXUIqHCtmrSVTLPFvFsCxXY3bNhFkMoam9kXyxs4484UH0kntVNk3f3Fawr7pLyMHAdmLFqYd244t1ShkrlNrdbR0zg7zN3kT4VDObctRmSlrpmTBDnqZgIpHfgHoJPxbGFopMbPesAVLD5tDSLs8uqB9TIUfxXsZm5-XilTXfQBUnZIjTwq7SGghTF~sh1zlAaxpG-rGJkdtsqzPM-nFWsmjRGZtBw__"
                    alt="User 1"
                    className="w-[80px] h-[52px] rounded object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">
                      Brandon Wilson
                    </p>
                    <p className="text-sm text-gray-500">Senior UX Designer</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm">
                  <img
                    src="https://example.com/user-image2.png"
                    alt="User 2"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">Emily Carter</p>
                    <p className="text-sm text-gray-500">Freelancer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
