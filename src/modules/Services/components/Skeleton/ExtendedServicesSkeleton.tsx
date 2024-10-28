import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const ExtendedServicesSkeleton = () => {
  return (
    <div className="relative">
      <VStack
        align="start"
        className="container mx-auto w-full pb-[4.375rem] pt-[3.125rem] md:pb-[6.25rem] md:pt-[4.6875rem] lg:flex-row lg:flex-nowrap lg:pb-[8.75rem] lg:pt-[6.25rem]"
      >
        <div className="w-full p-2.5 lg:w-[65%]">
          <Skeleton className="mb-2 h-6 w-52" />

          <Skeleton className="mb-2 h-12 w-96 md:h-[86px]" />
          <Skeleton className="mb-8 h-[84px] w-full" />

          <Skeleton className=" h-[3.125rem] w-[8.8125rem]" />
        </div>

        <div className="h-full min-h-full w-full bg-white p-2.5 lg:w-[35%]">
          <Skeleton className="aspect-square w-full lg:m-10" />
        </div>
      </VStack>
    </div>
  );
};

export default ExtendedServicesSkeleton;
