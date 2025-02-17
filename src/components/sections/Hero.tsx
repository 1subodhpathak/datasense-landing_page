import { useState, useEffect, useRef } from "react";
import type { HeroProps } from "../../types";
import { TypeAnimation } from "react-type-animation";

const Hero = ({
  videoUrl = "/assets/videos/bg_hero.mp4",
  forwardDuration = 6,
}: HeroProps) => {
  const videoProps = {
    preload: "auto",
    playsInline: true,
    muted: true,
    width: "1280",
    height: "720",
  };
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReversing, setIsReversing] = useState<boolean>(false);
  const frameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const reverseSpeedRef = useRef<number>(1); // Controls reverse playback speed

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReverse = (now: number) => {
      if (!videoRef.current) return;

      const video = videoRef.current;

      if (!lastTimeRef.current) {
        lastTimeRef.current = now;
      }

      const deltaTime = now - lastTimeRef.current;
      lastTimeRef.current = now;

      const decrementAmount = (deltaTime / 1000) * reverseSpeedRef.current;
      video.currentTime = Math.max(0, video.currentTime - decrementAmount);

      // console.log("Reverse time:", video.currentTime);

      if (video.currentTime > 0) {
        video.requestVideoFrameCallback(handleReverse); // Request next frame
      } else {
        // console.log("Reached start, switching to forward playback.");
        setIsReversing(false);
        video.play();
      }
    };

    const handleTimeUpdate = () => {
      if (!video || isReversing) return;
      // console.log('Forward time:', video.currentTime);

      if (video.currentTime >= forwardDuration) {
        // console.log('Starting reverse playback');
        video.pause();
        lastTimeRef.current = 0;
        setIsReversing(true);
        frameRef.current = requestAnimationFrame(handleReverse);
      }
    };

    // Event listeners
    video.addEventListener("timeupdate", handleTimeUpdate);

    // Reset video when isReversing changes
    if (isReversing) {
      handleReverse(0);
    } else {
      video.play();
    }

    // Cleanup
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [isReversing, forwardDuration]);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          {...videoProps}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`object-cover w-full h-full ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Left Section - Content */}
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
              <a href="">
                <button className="bg-caribbean hover:bg-teal text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Learning Today
                </button>
              </a>
              <a href="">
                <button className="border-2 border-primary-cyan hover:bg-primary-cyan/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Join the Data Revolution
                </button>
              </a>
            </div>
          </div>

          {/* Right Section - Animation */}
          <div className="hidden md:flex items-center justify-center">
            {/* You can add an animated graphic or stats here later */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
