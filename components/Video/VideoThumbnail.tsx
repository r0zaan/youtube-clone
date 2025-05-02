import Image, { StaticImageData } from 'next/image';
import React from 'react';

import User from "../../src/image/user.svg";
interface VideoThumbnailProps {
  title: string;
  thumbnailUrl: StaticImageData;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ title, thumbnailUrl }) => {
  return (
    <div className="w-full  overflow-hidden transition-all">
      {/* Thumbnail Image (16:9 Aspect Ratio) */}
      <div className="relative w-full pb-[56.25%]">
        <Image
          src={thumbnailUrl}
          alt={title}
          layout="fill"
          className="object-cover rounded-[12px] "
        />
      </div>

      {/* Video Title and Channel Name */}
      <div className="py-3 flex gap-2">
        <div style={{ position: 'relative', width: "40px", height: "40px" }} className="h-10 w-10 rounded-full border-2 border-gray-300">
          <Image src={User} alt="User Avatar" fill className="h-10 w-10" />
        </div>
        <div>
          <div className="font-semibold text-md text-black truncate">{title}</div>
          <p className="text-xs text-gray-600 mt-1">Channel Name</p>
          <p className="text-xs text-gray-600 mt-1">538K views • 1 month ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
