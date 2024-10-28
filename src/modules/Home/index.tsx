'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { VStack } from '@/components/ui/v-stack';

const Expertise = dynamic(() => import('./Expertise'));
const ForGreen = dynamic(() => import('./ForGreen'));
const HeroSection = dynamic(() => import('./HeroSection'));
const OurOfferings = dynamic(() => import('./OurOfferings'));

const HomePage = () => {
  return (
    <VStack spacing={64} className="mb-24 space-y-2 md:space-y-12">
      <HeroSection />

      <ForGreen />

      <OurOfferings />

      <Expertise />
    </VStack>
  );
};

export default HomePage;
