import React from 'react';

import { HStack } from '@/components/ui/h-stack';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const FooterPartnerSkeleton = () => {
  return (
    <HStack className="container mx-auto flex-col pt-6 md:flex-row lg:pt-2">
      <HStack className="w-full flex-1">
        <VStack className="flex-1 text-[.625rem] font-normal text-white/40">
          <Skeleton className="h-[4rem] w-[15rem] bg-[#585858] md:w-[25rem]"></Skeleton>

          <Skeleton className="h-[2rem] w-[15rem] bg-[#585858] md:w-[25rem]"></Skeleton>
        </VStack>

        <div className="flex-1"></div>
      </HStack>

      <HStack className="w-full flex-1 justify-center md:justify-end lg:gap-8">
        {Array.from({ length: 5 })?.map((_, index) => (
          <Skeleton key={index} className="h-[3.25rem] w-[10%] bg-[#585858]"></Skeleton>
        ))}
      </HStack>
    </HStack>
  );
};

export default FooterPartnerSkeleton;
