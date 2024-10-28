import React from 'react';

import { HStack } from '@/components/ui/h-stack';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSectionSkeleton = () => {
  return (
    <div className="container mx-auto pb-10 pt-[3.125rem] md:pb-[3.125rem] md:pt-[4.6875rem] lg:pb-20 lg:pt-[6.25rem]">
      <div className="p-2.5">
        <HStack pos="center">
          <Skeleton className="mb-2 h-6 w-28" />
        </HStack>

        <HStack pos="center">
          <Skeleton className="h-[192px] w-full max-w-[550px] md:h-[216px] lg:h-[172px] lg:max-w-[809px]" />
        </HStack>

        <HStack pos="center" className="pb-14 pt-2">
          <Skeleton className="h-[120px] w-full md:h-[76px] md:max-w-[550px] lg:h-14 lg:max-w-[75%]" />
        </HStack>

        <HStack pos="center" className="relative">
          <div className="border-5 aspect-square w-[33%] overflow-hidden rounded-[2.5rem] border-transparent">
            <Skeleton className="h-full w-full" />
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default HeroSectionSkeleton;
