import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const ServicesSkeleton = () => {
  return (
    <VStack
      spacing={0}
      align="center"
      className="container mx-auto w-full py-[3.125rem] md:flex-row md:flex-nowrap md:py-[5.625rem] lg:py-[7.5rem]"
    >
      <div className="w-full md:w-1/2">
        <div className="bg-light m-[0.625rem] rounded-2xl  p-10 lg:px-20 lg:py-[3.75rem]">
          <Skeleton className="relative aspect-square w-full overflow-hidden rounded-[2.5rem]" />
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:ml-[3.125rem]">
        <div className="p-2.5 ">
          <Skeleton className="mb-2 h-12 w-full" />

          <Skeleton className="h-[72px] w-full" />
        </div>
      </div>
    </VStack>
  );
};

export default ServicesSkeleton;
