import React from 'react';
import { motion } from 'framer-motion';
import { BsPlay, BsClock, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import type { Video } from '../../data/sqlVideos';

interface VideoListProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
  selectedVideoId?: string;
  className?: string;
}

const VideoList: React.FC<VideoListProps> = ({
  videos,
  onVideoSelect,
  selectedVideoId,
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => !video.isLocked && onVideoSelect(video)}
          className={`relative cursor-pointer rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
            selectedVideoId === video.id
              ? 'border-cyan-500 bg-cyan-500/10'
              : 'border-cyan-900/30 bg-slate-800/30 hover:border-cyan-500/50 hover:bg-slate-700/40'
          } ${video.isLocked ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center p-4">
            {/* Thumbnail */}
            <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-slate-700 flex-shrink-0">
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <BsPlay className="text-cyan-400 text-xl" />
                </div>
              )}
              
              {/* Play Button Overlay */}
              {!video.isLocked && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <BsPlay className="text-white text-xl" />
                </div>
              )}
              
              {/* Lock Icon */}
              {video.isLocked && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {/* Completion Check */}
              {video.isCompleted && (
                <div className="absolute top-1 right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <BsCheckCircle className="text-white text-xs" />
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="ml-4 flex-1 min-w-0">
              <h3 className="text-cyan-100 font-medium text-sm mb-1 truncate">
                {video.title}
              </h3>
              <p className="text-cyan-300/70 text-xs mb-2 line-clamp-2">
                {video.description}
              </p>
              
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-cyan-400/60 text-xs">
                <div className="flex items-center gap-1">
                  <BsClock />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <AiOutlineEye />
                  <span>HD</span>
                </div>
                {video.isCompleted && (
                  <div className="flex items-center gap-1 text-green-400">
                    <BsCheckCircle />
                    <span>Completed</span>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Indicator */}
            {!video.isLocked && (
              <div className="ml-4 w-16">
                <div className="w-full bg-slate-700/50 rounded-full h-1 mb-1">
                  <div 
                    className="bg-cyan-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: video.isCompleted ? '100%' : '0%' }}
                  />
                </div>
                <div className="text-cyan-300/70 text-xs text-center">
                  {video.isCompleted ? '100%' : '0%'}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoList; 