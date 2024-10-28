import React from 'react';
import Image from 'next/image';

import MissionMain from './MissionMain';
import ProudlyUncommon from './ProudlyUncommon';

const MissionSection = () => {
  return (
    <div className="bg-dark relative z-[-1] rounded-t-[2.5rem]">
      <div className="pb-10 pt-[3.75rem] md:pb-[3.75rem] md:pt-[5.625rem] lg:pb-0 lg:pt-[7.5rem]">
        <div className="relative">
          <Image
            src="/common/images/About-Us-Mision-BG.webp"
            alt="About Us"
            fill
            className="!left-0 !top-0 z-0 !h-full !w-1/2 lg:-translate-x-1/3"
          />
          <Image
            src="/common/images/About-Us-Mision-BG-2.webp"
            alt="About Us"
            fill
            className="!left-1/2 !top-0 z-0 !h-full !w-1/2 lg:translate-x-1/3"
          />
          <div className="container mx-auto">
            <MissionMain />
          </div>
        </div>
        <div className="container mx-auto">
          <ProudlyUncommon />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
