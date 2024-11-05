import React from 'react';

function Profile() {
    return (
        <div className="">
            <div className="mt-12 w-[850px] h-[170px] shadow-lg">
                <div className="p-6 h-full flex flex-col ">
                    {/* Title Section */}
                    <h1 className="font-bold mb-3 w-[58px] font-[Gotham] h-[18px]">About</h1>
                    {/* Paragraph Section */}
                    <p className="text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nobis quo veritatis ullam doloribus,
                        earum cupiditate minima provident officia ex eveniet debitis aliquam mollitia fuga praesentium veniam.
                        Iste, illo delectus officia ex eveniet debitis aliquam mollitia fuga praesentium veniam.
                        Iste, illo delectus  fuga praesentium veniam.
                        Iste, illo delectus  fuga praesentium veniam.
                        Iste, illo delectus.
                    </p>

                    {/* See More Section */}
                    <span className="text-blue-500 cursor-pointer">See more</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
