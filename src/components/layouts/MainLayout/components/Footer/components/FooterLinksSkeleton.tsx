import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const FooterLinksSkeleton = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-12 pb-[1.875rem] pt-[3.125rem] lg:grid-cols-5 lg:gap-0">
      {Array.from({ length: 4 })?.map((_, index) => (
        <VStack spacing={12} key={index} className="flex-1 gap-6">
          <Skeleton key={index} className="h-[1.25rem] w-[70%] bg-[#585858] md:w-[40%]"></Skeleton>

          {Array.from({ length: 3 })?.map((_, index) => (
            <Skeleton key={index} className="h-[1.25rem] w-[70%] bg-[#585858] md:w-[40%]"></Skeleton>
          ))}
        </VStack>
      ))}
    </div>
  );
};

export default FooterLinksSkeleton;
