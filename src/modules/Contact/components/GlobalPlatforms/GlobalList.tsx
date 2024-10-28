'use client';

import React from 'react';

import { useCommonCarousel } from '@/hooks/useCommonCarousel';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';

import GlobalItem from './GlobalItem';

const itemList = [
  {
    src: '/common/images/1_platform.png',
  },
  {
    src: '/common/images/2_platform.png',
  },
  {
    src: '/common/images/3_platform.png',
  },
  {
    src: '/common/images/4_platform.png',
  },
  {
    src: '/common/images/5_platform.png',
  },
  {
    src: '/common/images/6_platform.png',
  },
  {
    src: '/common/images/7_platform.png',
  },
  {
    src: '/common/images/8_platform.png',
  },
  {
    src: '/common/images/9_platform.png',
  },
  {
    src: '/common/images/10_platform.png',
  },
];

const GlobalList = () => {
  const { carouselRef } = useCommonCarousel();

  return (
    <CarouselContent ref={carouselRef} className="my-[0.9375rem] md:my-5 lg:my-[1.5625rem]">
      {itemList?.map((item, index) => (
        <CarouselItem key={index} className="basis-1/3 md:basis-1/5 lg:basis-[13%]">
          <GlobalItem src={item?.src} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};
export default GlobalList;
