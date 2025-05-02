import Image, { StaticImageData } from 'next/image';
import React from 'react';
interface VideoThumbnailProps {
    title: string;
    thumbnailUrl: StaticImageData;
    views?: string;
}

const RecommendationThumbnail: React.FC<VideoThumbnailProps> = ({ title, thumbnailUrl, views }) => {
    return (
        <>
            <div className='w-42 h-24'>

                <div className="relative pb-[56.25%] ">
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        layout="fill"
                        className=" object-cover rounded-lg"
                    />
                </div>
            </div>


            <div className="text-sm">
                <p className="font-semibold mb-1">{title}</p>
                {views && <p className="text-gray-500 text-xs">{views} views • 1 month ago</p>}
            </div>
        </>
    );
};

export default RecommendationThumbnail;
