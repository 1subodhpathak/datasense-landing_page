import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BsPlay, BsPause, BsVolumeUp, BsVolumeMute, BsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import { AiOutlineClockCircle, AiOutlineEye } from 'react-icons/ai';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
  description?: string;
  duration?: string;
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title,
  description,
  duration: durationProp,
  onProgress,
  onComplete,
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setVideoDuration(total);
      
      if (total > 0) {
        const progressPercent = (current / total) * 100;
        setProgress(progressPercent);
        onProgress?.(progressPercent);
      }
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => onComplete?.();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-900/30 overflow-hidden ${className}`}
    >
      {/* Video Header */}
      <div className="p-4 border-b border-cyan-900/20">
        <h3 className="text-xl font-semibold text-cyan-100 mb-2">{title}</h3>
        {description && (
          <p className="text-cyan-300/80 text-sm mb-2">{description}</p>
        )}
        <div className="flex items-center gap-4 text-cyan-400/70 text-sm">
          {durationProp && (
            <div className="flex items-center gap-1">
              <AiOutlineClockCircle />
              <span>{durationProp}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <AiOutlineEye />
            <span>HD Quality</span>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative group">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg"
          poster={posterUrl}
          onTimeUpdate={handleTimeUpdate}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              setVideoDuration(videoRef.current.duration);
            }
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                {isPlaying ? <BsPause size={20} /> : <BsPlay size={20} />}
              </button>
              
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                {isMuted ? <BsVolumeMute size={18} /> : <BsVolumeUp size={18} />}
              </button>
              
              <div className="text-sm">
                {formatTime(currentTime)} / {formatTime(videoDuration)}
              </div>
            </div>
            
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {isFullscreen ? <BsFullscreenExit size={18} /> : <BsFullscreen size={18} />}
            </button>
          </div>
          
          {/* Volume Slider */}
          <div className="flex items-center gap-2 mt-2">
            <BsVolumeUp size={14} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="p-4">
        <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
          <div 
            className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-cyan-300/70 text-sm">
          <span>{Math.round(progress)}% Complete</span>
          <span>{formatTime(currentTime)} / {formatTime(videoDuration)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;