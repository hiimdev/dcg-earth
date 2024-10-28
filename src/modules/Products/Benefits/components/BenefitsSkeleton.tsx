import React from 'react';

import { HStack } from '@/components/ui/h-stack';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const BenefitsSkeleton = () => {
  return (
    <div className="container mx-auto space-y-10 px-6 py-24 lg:space-y-20 lg:px-0">
      <VStack spacing={16}>
        <Skeleton className="h-[4rem] w-[20rem] bg-[#585858] lg:w-[30rem]"></Skeleton>

        <Skeleton className="h-[4rem] w-[20rem] bg-[#585858] lg:w-[36.75rem]"></Skeleton>
      </VStack>
      <VStack>
        <HStack className="flex-col lg:flex-row">
          <Skeleton className="h-[36.75rem] w-[20rem] flex-1 bg-[#585858] lg:w-[36.75rem]"></Skeleton>

          <VStack className="w-full flex-1 items-center justify-center gap-1">
            {Array.from({ length: 4 })?.map((_, index) => (
              <Skeleton key={index} className="h-[10.25rem] w-[90%] bg-[#585858] lg:w-[26.625rem]"></Skeleton>
            ))}
          </VStack>
        </HStack>
      </VStack>
    </div>
  );
};

export default BenefitsSkeleton;
