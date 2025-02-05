import React from 'react';
import dynamic from 'next/dynamic';

const CoreTeam = dynamic(() => import('./components/CoreTeam'));
const FAQSection = dynamic(() => import('./components/FAQSection'));
const HeroSection = dynamic(() => import('./components/HeroSection'));
const HiringSection = dynamic(() => import('./components/HiringSection'));
const MissionSection = dynamic(() => import('./components/MissionSection'));

const AboutPage = () => {
  return (
    <div className="mt-[5.125rem] min-h-screen overflow-hidden md:mt-[6.5625rem]">
      <HeroSection />

      <MissionSection />

      {/* <CoreTeam /> */}

      <FAQSection />

      <HiringSection />
    </div>
  );
};

export default AboutPage;
