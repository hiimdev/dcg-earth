'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useGetContents } from '@/api/contents';

import { HStack } from '@/components/ui/h-stack';
import { Text } from '@/components/ui/text';

import HeroSectionSkeleton from '../Skeleton/HeroSectionSkeleton';

interface IContentResponse {
  title: string;
  description: string;
}

const HeroSection = () => {
  const { data, isLoading } = useGetContents<IContentResponse>({ page: 'About', component: 'HeroSection' });

  const title = useMemo(() => data?.title || '', [data?.title]);
  const description = useMemo(() => data?.description || '', [data?.description]);

  if (isLoading) return <HeroSectionSkeleton />;

  return (
    <div className="container mx-auto pb-10 pt-[3.125rem] md:pb-[3.125rem] md:pt-[4.6875rem] lg:pb-20 lg:pt-[6.25rem]">
      <div className="p-2.5">
        <Text size="sm" weight={600} className="text-accent mb-2 text-center">
          Mission
        </Text>

        <HStack pos="center">
          <Text
            size="xl"
            weight={600}
            className="w-full text-center !leading-[1.2] tracking-[-0.03em] md:max-w-[550px] lg:max-w-[809px]"
          >
            {title}
          </Text>
        </HStack>

        <HStack pos="center" className="pb-14 pt-2">
          <Text
            size="md"
            weight={500}
            className="w-full text-center leading-normal tracking-tight text-[#0c231f99] md:max-w-[550px] lg:max-w-[75%]"
          >
            {description}
          </Text>
        </HStack>

        <HStack pos="center" className="relative">
          <div className="border-5 border-accent max-w-[33%] overflow-hidden rounded-[2.5rem]">
            <video
              src="/common/videos/about-hero-section.mp4"
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
            />
          </div>

          <Image
            src="/common/images/About-Us-Hero-BG.webp"
            alt="Background Image"
            fill
            className="bottom-0 z-[-1] h-full w-full translate-y-20"
          />
        </HStack>
      </div>
    </div>
  );
};

export default HeroSection;
