import { useState, useEffect, useRef } from "react";
import type { HeroProps } from "../../types";
import { TypeAnimation } from "react-type-animation";

const Hero = ({
  videoBaseUrl = "https://res.cloudinary.com/dn1yynudz/video/upload/v1744624952/bg_hero8_ecjby1",
  forwardDuration = 7,
}: HeroProps) => {
  const videoProps = {
    preload: "auto", 
    playsInline: true,
    muted: true,
    loading: "eager",
  };
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [activeVideo, setActiveVideo] = useState<"forward" | "reverse">("forward");
  const forwardVideoRef = useRef<HTMLVideoElement>(null);
  const reverseVideoRef = useRef<HTMLVideoElement>(null);
  
  // Forward and reverse video URLs
  const forwardVideoUrl = videoBaseUrl;
  const reverseVideoUrl = videoBaseUrl.replace("/upload/", "/upload/e_reverse/");

  useEffect(() => {
    const forwardVideo = forwardVideoRef.current;
    const reverseVideo = reverseVideoRef.current;
    if (!forwardVideo || !reverseVideo) return;

    // Preload both videos immediately
    const preloadVideos = () => {
      forwardVideo.load();
      reverseVideo.load();
      
      // Start loading reverse video data in the background
      reverseVideo.currentTime = 0.001;
      setTimeout(() => {
        reverseVideo.currentTime = 0;
      }, 100);
      
      // Start playing forward video
      forwardVideo.play().catch(e => console.log("Autoplay prevented:", e));
    };

    // Function to switch between videos with pre-buffering
    const switchToReverseVideo = () => {
      // Start transition before current video actually ends
      forwardVideo.style.opacity = "0";
      reverseVideo.style.opacity = "1";
      
      // Small delay to ensure smooth transition
      setTimeout(() => {
        // Ensure reverse video is ready and at the beginning
        if (reverseVideo.readyState >= 3) {
          reverseVideo.currentTime = 0;
          reverseVideo.play().catch(e => console.log("Playback error:", e));
          setActiveVideo("reverse");
        } else {
          // If video is not ready, try again shortly
          reverseVideo.addEventListener("canplay", () => {
            reverseVideo.currentTime = 0;
            reverseVideo.play().catch(e => console.log("Playback error:", e));
            setActiveVideo("reverse");
          }, { once: true });
        }
      }, 50);
    };

    const switchToForwardVideo = () => {
      // Start transition before current video actually ends
      reverseVideo.style.opacity = "0";
      forwardVideo.style.opacity = "1";
      
      // Small delay to ensure smooth transition
      setTimeout(() => {
        // Ensure forward video is ready
        if (forwardVideo.readyState >= 3) {
          forwardVideo.currentTime = 0;
          forwardVideo.play().catch(e => console.log("Playback error:", e));
          setActiveVideo("forward");
        } else {
          // If video is not ready, try again shortly
          forwardVideo.addEventListener("canplay", () => {
            forwardVideo.currentTime = 0;
            forwardVideo.play().catch(e => console.log("Playback error:", e));
            setActiveVideo("forward");
          }, { once: true });
        }
      }, 50);
    };

    // Start transition slightly before video ends to avoid gap
    const handleForwardTimeUpdate = () => {
      if (forwardVideo.currentTime >= forwardDuration - 0.1) {
        forwardVideo.removeEventListener("timeupdate", handleForwardTimeUpdate);
        switchToReverseVideo();
      }
    };

    // Start transition slightly before video ends to avoid gap
    const handleReverseTimeUpdate = () => {
      // For reverse video, we'll trigger the switch when it's close to ending
      if (reverseVideo.duration && reverseVideo.currentTime >= reverseVideo.duration - 0.1) {
        reverseVideo.removeEventListener("timeupdate", handleReverseTimeUpdate);
        switchToForwardVideo();
      }
    };

    // Initial setup
    if (isInitialLoad) {
      preloadVideos();
      setIsInitialLoad(false);
    }

    // Set up event listeners - use timeupdate for both videos
    forwardVideo.addEventListener("timeupdate", handleForwardTimeUpdate);
    reverseVideo.addEventListener("timeupdate", handleReverseTimeUpdate);

    return () => {
      forwardVideo.removeEventListener("timeupdate", handleForwardTimeUpdate);
      reverseVideo.removeEventListener("timeupdate", handleReverseTimeUpdate);
    };
  }, [activeVideo, forwardDuration, isInitialLoad]);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 bg-gray-900">
        {/* Forward video */}
        <video
          ref={forwardVideoRef}
          {...videoProps}
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 z-1"
          style={{ opacity: activeVideo === "forward" ? 1 : 0 }}
          aria-hidden="true"
        >
          <source src={`${forwardVideoUrl}.mp4`} type="video/mp4" />
          <source src={`${forwardVideoUrl}.webm`} type="video/webm" />
        </video>
        
        {/* Reverse video */}
        <video
          ref={reverseVideoRef}
          {...videoProps}
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 z-1"
          style={{ opacity: activeVideo === "reverse" ? 1 : 0 }}
          aria-hidden="true"
        >
          <source src={`${reverseVideoUrl}.mp4`} type="video/mp4" />
          <source src={`${reverseVideoUrl}.webm`} type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                Learn by{" "}
                <TypeAnimation
                  sequence={[
                    "Connecting",
                    1000,
                    "Interacting",
                    1000,
                    "Practicing",
                    1000,
                    "Solving",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
                />
                <br />
                <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                  Accelerate Your Career with Practical, Hands-On Learning
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-bubbles opacity-90">
              <span className="text-primary-cyan font-semibold">
                {" "}
                Engaging Live Quizzes • Interactive Learning Games • Mock Interviews • Personalized Career Support
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#courses">
                <button className="bg-caribbean hover:bg-teal text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Learning Today
                </button>
              </a>
              <a href="#join">
                <button className="border-2 border-primary-cyan hover:bg-primary-cyan/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Join the Data Revolution
                </button>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            {/* Content for right side can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;