// pages/index.tsx
import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import VideoThumbnail from '../../components/Video/VideoThumbnail';
import thumbnail from '../image/thumbnail/thumbnail-1.avif';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
interface VideoData {
  id: number;
  title: string;
  thumbnailUrl: StaticImageData;
}

const HomePage: React.FC = () => {
  const videoData: VideoData[] = [
    { id: 1, title: 'How to Learn React', thumbnailUrl: thumbnail },
    { id: 2, title: 'JavaScript Tutorial', thumbnailUrl: thumbnail },
    { id: 3, title: 'JavaScript Tutorial 2', thumbnailUrl: thumbnail },
    { id: 4, title: 'JavaScript Tutorial 3', thumbnailUrl: thumbnail },
    { id: 5, title: 'JavaScript Tutorial 3', thumbnailUrl: thumbnail },
    { id: 6, title: 'JavaScript Tutorial 4', thumbnailUrl: thumbnail },
    { id: 7, title: 'JavaScript Tutorial 5', thumbnailUrl: thumbnail },
    { id: 8, title: 'JavaScript Tutorial 6', thumbnailUrl: thumbnail },
    { id: 9, title: 'JavaScript Tutorial 7', thumbnailUrl: thumbnail },
    { id: 10, title: 'JavaScript Tutorial 8', thumbnailUrl: thumbnail },
    { id: 11, title: 'JavaScript Tutorial 9', thumbnailUrl: thumbnail },
    { id: 12, title: 'JavaScript Tutorial 10', thumbnailUrl: thumbnail },
    { id: 13, title: 'JavaScript Tutorial 11', thumbnailUrl: thumbnail },
    { id: 14, title: 'JavaScript Tutorial 12', thumbnailUrl: thumbnail },
    { id: 15, title: 'JavaScript Tutorial 13', thumbnailUrl: thumbnail },
    { id: 16, title: 'JavaScript Tutorial 14', thumbnailUrl: thumbnail },
    { id: 17, title: 'JavaScript Tutorial 15', thumbnailUrl: thumbnail },
    // Add more video data as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 bg-white">
        <Sidebar />
        <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
          {videoData.map((video) => (
            <Link key={video.id} href={`/video/${video.id}`}>
              <VideoThumbnail title={video.title} thumbnailUrl={video.thumbnailUrl} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;