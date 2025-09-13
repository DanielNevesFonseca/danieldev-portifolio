import React, { useRef, useState, useEffect } from "react";

type VideoPlayerProps = {
  videoUrl: string;
  mimeType: string;
  tooltipMessage: string; // The message for the tooltip
  thumbnailUrl?: string; // Optional thumbnail image URL
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  mimeType,
  tooltipMessage,
  thumbnailUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      // Check if the video element is the current fullscreen element
      const isCurrentlyFullscreen =
        document.fullscreenElement === videoRef.current;
      setIsFullscreen(isCurrentlyFullscreen);
    };

    // Add event listener for fullscreen changes
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Use a promise to wait for the video to start playing
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented.
        console.warn("Video play prevented:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleOnClick = () => {
    if (videoRef.current && document.fullscreenEnabled) {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    }
  };

  return (
    // This parent div is now responsive and centered
    <div
      className="relative group w-full max-w-xl mx-auto" // Responsive width, max-width, and centered
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <video
        ref={videoRef}
        poster={thumbnailUrl} // Use the thumbnail as the poster image
        // Conditionally change object-fit based on fullscreen state.
        // 'object-cover' crops to fill the container (good for the preview).
        // 'object-contain' fits the whole video inside (good for fullscreen).
        className={`w-full h-auto rounded-lg ${
          isFullscreen ? "object-contain" : "object-cover"
        } aspect-video cursor-pointer transition-all duration-300 ease-in-out group-hover:shadow-slate-500 group-hover:shadow-2xl`}
        muted
        loop
        playsInline // Important for autoplay on mobile browsers
        controlsList="nodownload"
      >
        <source src={videoUrl} type={mimeType} />
        Your browser does not support the video tag.
      </video>

      {/* Tooltip Element - Hidden in fullscreen */}
      {tooltipMessage && !isFullscreen && (
        <div
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                     px-3 py-1.5 bg-gray-800 text-white text-sm rounded-md shadow-lg 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                     pointer-events-none whitespace-nowrap"
        >
          {tooltipMessage}
          {/* Tooltip Arrow */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 
                        border-x-4 border-x-transparent 
                        border-t-4 border-t-gray-800"
          ></div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
