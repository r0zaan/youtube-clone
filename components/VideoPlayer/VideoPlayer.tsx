import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
    videoUrl?: string;
    posterUrl: string; // Poster image before the video starts
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, posterUrl }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    // Play/Pause functionality
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle time update (seek bar)
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    // Handle seek bar
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.currentTime = parseFloat(e.target.value);
            setCurrentTime(parseFloat(e.target.value));
        }
    };

    // Handle volume control
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    };

    // Mute/Unmute functionality
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
        setIsMuted(!isMuted);
    };

    // Handle full-screen toggle
    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current?.requestFullscreen();
            }
        }
    };

    // Set duration on video load
    const handleLoadedMetadata = () => {

        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    return (
        <div className="relative w-full bg-black rounded-lg overflow-hidden">
            {/* Video element */}
            <video
                key={videoUrl}
                ref={videoRef}
                className="w-full h-auto"
                poster={posterUrl}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
                autoPlay // Enable auto-play
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 flex items-center justify-between">
                {/* Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className="text-white text-4xl bg-transparent rounded-full p-3 hover:bg-gray-600 transition-colors"
                >
                    {isPlaying ? (
                        <i className="fas fa-pause"></i>
                    ) : (
                        <i className="fas fa-play"></i>
                    )}
                </button>

                {/* Seek Bar */}
                <div className="flex-1 mx-4">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-600 rounded-full cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-white mt-1">
                        <span>{Math.floor(currentTime)}s</span>
                        <span>{Math.floor(duration)}s</span>
                    </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center">
                    {/* Mute/Unmute Button */}
                    <button
                        onClick={toggleMute}
                        className="text-white text-xl hover:text-gray-400"
                    >
                        {isMuted ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
                    </button>

                    {/* Volume Slider */}
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 mx-4"
                    />
                </div>

                {/* Full-Screen Button */}
                <button
                    onClick={toggleFullscreen}
                    className="text-white text-2xl hover:text-gray-400"
                >
                    <i className="fas fa-expand"></i>
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
