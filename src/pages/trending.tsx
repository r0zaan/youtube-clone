// pages/trending.tsx
import Link from 'next/link';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import VideoThumbnail from '../../components/Video/VideoThumbnail';
import thumbnail from '../image/thumbnail/thumbnail-1.avif';

const TrendingPage: React.FC = () => {
    const videoData = [
        { id: 1, title: 'How to Learn React', thumbnailUrl: thumbnail },
        { id: 2, title: 'JavaScript Tutorial', thumbnailUrl: thumbnail },
        // Add more subscription videos
    ];

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
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

export default TrendingPage;
