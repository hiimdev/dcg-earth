'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useInView } from '@/hooks/useInView';
import { HStack } from '@/components/ui/h-stack';

import LocationItem, { type IPoint } from './LocationItem';

type IconData = {
  point: IPoint;
  src: string;
};

const iconData: IconData[] = [
  {
    point: {
      x: 18,
      y: -5,
    },
    src: '/common/images/Ecology-Icons-21.png',
  },

  {
    point: {
      x: 65,
      y: 5,
    },
    src: '/common/images/Ecology-Icons-49.png',
  },
  {
    point: {
      x: 78,
      y: 44,
    },
    src: '/common/images/Ecology-Icons-23.png',
  },
  {
    point: {
      x: 10,
      y: 30,
    },
    src: '/common/images/Ecology-Icons-34.png',
  },
  {
    point: {
      x: 40,
      y: 14,
    },
    src: '/common/images/Ecology-Icons-37.png',
  },
  {
    point: {
      x: 37,
      y: 55,
    },
    src: '/common/images/Ecology-Icons-12.png',
  },
];

const MissionMap = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  return (
    <div className="relative z-10 flex-1 p-2.5 lg:min-h-full" ref={containerRef}>
      <HStack
        pos="center"
        align="center"
        className="aspect-square h-full rounded-[2.5rem] border border-[#FFFFFF33] bg-[#FFFFFF12] md:aspect-auto lg:ml-[7.5rem] lg:mr-2.5"
      >
        <div className="relative h-4/5 w-full lg:h-full">
          <Image
            src={'/common/images/Team-Testimonial-BG.webp'}
            alt="Team-Testimonial-BG.webp"
            fill
            className="z-10 md:rounded-[2.5rem]"
          />

          {/* Icons */}
          {iconData?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
              <LocationItem location={item?.point} src={item?.src} alt={item?.src} />
            </motion.div>
          ))}
        </div>
      </HStack>
    </div>
  );
};

export default MissionMap;
