import {
  BsYoutube,
  BsLinkedin,
  BsInstagram,
  BsPlayCircle,
  BsX,
} from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

// useCountAnimation hook remains the same
const useCountAnimation = (
  end: number,
  duration: number = 1000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<number>(start);
  const timeRef = useRef<number>();

  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      countRef.current = start + Math.floor((end - start) * progress);
      setCount(countRef.current);

      if (progress < 1) {
        timeRef.current = requestAnimationFrame(animate);
      }
    };

    timeRef.current = requestAnimationFrame(animate);

    return () => {
      if (timeRef.current) {
        cancelAnimationFrame(timeRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
};

const socialMediaData = {
  stats: [
    { count: "50K+", label: "YouTube Subscribers", numericValue: 50 },
    { count: "100K+", label: "LinkedIn Followers", numericValue: 100 },
    { count: "25K+", label: "Instagram Followers", numericValue: 25 },
  ],
  featuredContent: [
    {
      title: "SQL Interview Questions",
      views: "250K",
      platform: "YouTube",
      icon: BsYoutube,
      color: "text-red-500",
    },
    {
      title: "Data Analytics Career Guide",
      views: "180K",
      platform: "LinkedIn",
      icon: BsLinkedin,
      color: "text-blue-500",
    },
    {
      title: "Python Tips & Tricks",
      views: "120K",
      platform: "Instagram",
      icon: BsInstagram,
      color: "text-pink-500",
    },
  ],
  videos: [
    {
      title: "Don't Get Scammed!",
      thumbnail: "/assets/images/thumbnails/it.jpg",
      views: "12K",
      youtubeId: "PtzWRgcN-w0",
    },
    {
      title: "Power BI for Beginners",
      thumbnail: "/assets/images/thumbnails/powerbi.jpg",
      views: "15K",
      youtubeId: "W-jQg5D1RoE",
    },
    {
      title: "Midnight Python Coding Challenge",
      thumbnail: "/assets/images/thumbnails/python.jpg",
      views: "18K",
      youtubeId: "v_Dpyj7AEIg",
    },
  ],
};

function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // State to track the current playing video
  const [currentVideo, setCurrentVideo] = useState<{
    title: string;
    youtubeId: string;
  } | null>(null);

  // Function to handle video click - now opens the overlay player
  const handleVideoClick = (youtubeId: string, title: string) => {
    setCurrentVideo({ youtubeId, title });
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Function to close the video player
  const closeVideoPlayer = () => {
    setCurrentVideo(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  // Handle escape key to close the player
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && currentVideo) {
        closeVideoPlayer();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [currentVideo]);

  const AnimatedStat = ({
    stat,
  }: {
    stat: (typeof socialMediaData.stats)[0];
  }) => {
    const count = useCountAnimation(stat.numericValue, 1000, 0);

    return (
      <div className="p-6 bg-slate-800/30 rounded-xl text-center border border-cyan-900/20 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
        <div className="text-3xl font-bold text-cyan-100 mb-2">
          {isInView ? `${count}K+` : "0K+"}
        </div>
        <div className="text-cyan-300 text-sm">{stat.label}</div>
      </div>
    );
  };

  const VideoCard = ({
    video,
    isMain = false,
  }: {
    video: (typeof socialMediaData.videos)[0];
    isMain?: boolean;
  }) => (
    <div
      className={`cursor-pointer rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-sm
        h-full w-full`}
      onClick={() => handleVideoClick(video.youtubeId, video.title)}
    >
      <div className="relative aspect-video w-full">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h4
              className={`font-bold text-white mb-2 ${
                isMain ? "text-2xl" : "text-lg"
              }`}
            >
              {video.title}
            </h4>
            <div className="flex items-center text-cyan-400 text-sm">
              <BsYoutube className="mr-2 text-lg" />
              {/* {video.views} views */}
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center 
              hover:bg-cyan-300 transition-colors duration-300"
            >
              <BsPlayCircle className="text-4xl text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Video Player Overlay Component
  const VideoPlayerOverlay = () => {
    if (!currentVideo) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl">
          {/* Close button */}
          <button
            className="absolute -top-12 right-0 text-white z-10 hover:text-cyan-400 transition-colors"
            onClick={closeVideoPlayer}
            aria-label="Close video"
          >
            <BsX className="text-4xl" />
          </button>

          {/* Video player container */}
          <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Fixed aspect ratio container */}
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1`}
                title={currentVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Our Social Media Presence
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Join our growing community of data enthusiasts across platforms
        </p>

        {/* Social Media Stats with Animation */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialMediaData.stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} />
          ))}
        </div>

        {/* Featured Content */}
        <h3 className="text-2xl font-bold text-center text-cyan-100 mb-8">
          Featured Content
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialMediaData.featuredContent.map((content, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/30 rounded-xl
                hover:bg-slate-700/40 transition-all duration-300
                border border-cyan-900/20 hover:border-cyan-500/30
                backdrop-blur-sm hover:-translate-y-1"
            >
              <content.icon
                className={`text-4xl ${content.color} mb-4 
                  group-hover:scale-110 transition-transform`}
              />
              <h4 className="text-lg font-semibold text-cyan-100 mb-2">
                {content.title}
              </h4>
              <p className="text-cyan-300 text-sm">
                {content.platform} • {content.views} views
              </p>
            </div>
          ))}
        </div>

        {/* Featured Videos */}
        <div className="mt-20 mb-16">
          <h3 className="text-2xl font-bold text-center text-cyan-100 mb-12">
            Featured Videos
          </h3>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main large video card */}
              <div className="md:col-span-2">
                <VideoCard video={socialMediaData.videos[0]} isMain={true} />
              </div>

              {/* Stack of smaller video cards */}
              <div className="flex flex-col gap-6">
                {socialMediaData.videos.slice(1).map((video, index) => (
                  <VideoCard key={index + 1} video={video} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block bg-caribbean hover:bg-teal text-white 
              font-bold py-3 px-8 rounded-lg transition-all duration-300 
              transform hover:scale-105"
          >
            Join Our Community
          </a>
        </div>
      </div>

      {/* Video Player Overlay - renders conditionally */}
      <VideoPlayerOverlay />
    </section>
  );
}

export default Social;
