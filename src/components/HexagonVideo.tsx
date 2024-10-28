import React from 'react';

const HexagonVideo: React.FC = () => {
  return (
    <div className="relative mx-auto h-[7.5rem] w-[10rem] md:h-[10rem] md:w-[12.5rem] lg:h-[16.25rem] lg:w-[18.75rem]">
      {/* Outer Hexagon Shape */}
      <div className="clip-hexagon absolute inset-0 flex items-center justify-center bg-gray-800">
        {/* Video element inside the outer hexagon */}
        <video
          className="h-full w-full object-cover"
          src="/common/videos/DCG _ WIDESCREEN ROTATING BLOCKS_ARThyRvH0.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Inner Hexagon Shape overlay */}
        <div className="clip-inner-hexagon absolute flex items-center justify-center bg-black"></div>
      </div>
    </div>
  );
};

export default HexagonVideo;
