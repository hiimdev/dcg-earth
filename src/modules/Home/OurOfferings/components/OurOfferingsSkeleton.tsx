import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const OurOfferingsSkeleton = () => {
  return (
    <VStack className="w-full rounded-[2.5rem] bg-[#451D1A] py-[7.5rem] text-center" spacing={64}>
      <VStack className="w-full items-center justify-center" spacing={24}>
        <Skeleton className="h-[2rem] w-[50%] bg-[#585858] text-[#585858] md:w-[10rem]"></Skeleton>

        <Skeleton className="h-[4rem] w-[80%] bg-[#585858] text-[#585858] md:w-[31.25rem]"></Skeleton>

        <Skeleton className="h-[2rem] w-[70%] bg-[#585858] text-[#585858] md:w-[25rem]"></Skeleton>
      </VStack>

      <div className="container mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 })?.map((_, index) => (
          <VStack key={index} className="items-center rounded-[1rem] p-5" spacing={24}>
            <Skeleton className="flex h-[5.5625rem] w-[5.5625rem] items-center justify-center rounded-full bg-[#585858] p-3">
              <Skeleton className="bg-primary flex h-full w-full items-center justify-center rounded-full"></Skeleton>
            </Skeleton>

            <VStack className="items-center justify-center">
              <Skeleton className="h-[2rem] w-[10rem] bg-[#585858] text-[#585858]"></Skeleton>

              <Skeleton className="h-[2rem] w-[15rem] bg-[#585858] text-[#585858]"></Skeleton>
            </VStack>
          </VStack>
        ))}
      </div>
    </VStack>
  );
};

export default OurOfferingsSkeleton;
