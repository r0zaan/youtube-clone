// pages/video/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { StaticImageData } from 'next/image';

import thumbnail from '../../image/thumbnail/thumbnail-1.avif';
import Link from 'next/link';
import RecommendationThumbnail from '../../../components/Video/RecommendationThumbnail';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
interface VideoData {
    title: string;
    description: string;
    views?: string;
    videoUrl?: string;
    thumbnailUrl: string;
}

interface RecommendedVideoData {
    id: number;
    title: string;
    description?: string;
    views?: string;
    thumbnailUrl: StaticImageData;
}

const VideoDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [video, setVideo] = useState<VideoData | null>(null);
    const videoData: { [key: string]: VideoData } = {
        '1': { title: 'How to Learn React', description: 'Learn React from scratch!', views: '1M', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-1.mp4" },
        '2': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial.', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '3': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 2', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '4': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 3', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '5': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 4', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-1.mp4" },
        '6': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 5', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '7': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 6', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-1.mp4" },
        '8': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 7', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '9': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 8', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-1.mp4" },
        '10': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 9', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '11': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 10', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-1.mp4" },
        '12': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 11', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '13': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 12', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '14': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 13', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-1.mp4" },
        '15': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 14', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '16': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 15', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-2.mp4" },
        '17': { title: 'JavaScript Tutorial', description: 'A complete JavaScript tutorial. 16', views: '500K', thumbnailUrl: '../../image/thumbnail-1.avif', videoUrl: "/video/video-1.mp4" },
    };

    const recommendedVideoData: RecommendedVideoData[] = [
        { id: 1, title: 'How to Learn React', thumbnailUrl: thumbnail, views: "500k" },
        { id: 2, title: 'JavaScript Tutorial', thumbnailUrl: thumbnail, views: "220k" },
        { id: 2, title: 'JavaScript Tutorial', thumbnailUrl: thumbnail, views: "220k" },
        { id: 3, title: 'JavaScript Tutorial 2', thumbnailUrl: thumbnail, views: "220k" },
        { id: 4, title: 'JavaScript Tutorial 3', thumbnailUrl: thumbnail, views: "220k" },
        { id: 5, title: 'JavaScript Tutorial 3', thumbnailUrl: thumbnail, views: "220k" },
        { id: 6, title: 'JavaScript Tutorial 4', thumbnailUrl: thumbnail, views: "220k" },
        { id: 7, title: 'JavaScript Tutorial 5', thumbnailUrl: thumbnail, views: "220k" },
        { id: 8, title: 'JavaScript Tutorial 6', thumbnailUrl: thumbnail, views: "220k" },
        { id: 9, title: 'JavaScript Tutorial 7', thumbnailUrl: thumbnail, views: "220k" },
        { id: 10, title: 'JavaScript Tutorial 8', thumbnailUrl: thumbnail, views: "220k" },
        { id: 11, title: 'JavaScript Tutorial 9', thumbnailUrl: thumbnail, views: "220k" },
        { id: 12, title: 'JavaScript Tutorial 10', thumbnailUrl: thumbnail, views: "220k" },
        { id: 13, title: 'JavaScript Tutorial 11', thumbnailUrl: thumbnail, views: "220k" },
        { id: 14, title: 'JavaScript Tutorial 12', thumbnailUrl: thumbnail, views: "220k" },
        { id: 15, title: 'JavaScript Tutorial 13', thumbnailUrl: thumbnail, views: "220k" },
        { id: 16, title: 'JavaScript Tutorial 14', thumbnailUrl: thumbnail, views: "220k" },
        { id: 17, title: 'JavaScript Tutorial 154', thumbnailUrl: thumbnail, views: "220k" },
        // Add more video data as needed
    ];
    useEffect(() => {
        if (id && videoData[id as string]) {
            setVideo(videoData[id as string]);
        }
    }, [id]);
    return (
        <div className="flex flex-col h-screen bg-white">
            <Header />
            <div className="flex flex-1 bg-white justify-center ">
                <Sidebar fixed={true} />
                {video ? (
                    <div className='container'>
                        <div className="flex flex-1 p-6 gap-3">
                            {/* Left Section: Video Player */}
                            <div className="flex-1 text-black">
                                {/* <video key={video.videoUrl} controls width="100%" className="rounded-lg mb-4 h-[540px]" autoPlay >
                                    <source src={video.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}
                                <VideoPlayer
                                    videoUrl={video.videoUrl}
                                    posterUrl={video.thumbnailUrl}
                                />
                                <h1 className="text-xl font-bold">{video.title}</h1>
                                <p className="text-gray-600 mt-2">{video.description}</p>
                                <p className="text-gray-500 mt-2">{video.views} views</p>
                                <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                                    Subscribe
                                </button>

                                {/* Comment Section */}
                                <div className="mt-6 text-black">
                                    <h3 className="text-lg font-semibold">Comments</h3>
                                    <textarea placeholder="Add a comment..." className="w-full p-2 mt-2 border border-gray-300 rounded-lg"></textarea>
                                    <button className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg">Post Comment</button>
                                    <div className="mt-4">
                                        <div className="border-t pt-4">
                                            <div className="comment">This is a great video!</div>
                                            {/* More comments */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section: Recommended Videos */}
                            <div className="w-1/4  p-4 text-black">
                                <h3 className="text-xl font-semibold mb-4">Recommended</h3>
                                {/* Recommended Videos (this could be dynamic data) */}
                                <div className="space-y-4">
                                    {/* Recommended Video 1 */}
                                    {recommendedVideoData.map((video) => (
                                        <Link key={video.id} href={`/video/${video.id}`} className="flex  space-x-3">
                                            <RecommendationThumbnail title={video.title} thumbnailUrl={video.thumbnailUrl} views={video.views} />
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default VideoDetailPage;
