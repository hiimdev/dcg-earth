import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const ExpertiseSkeleton = () => {
  return (
    <VStack className="mx-auto text-center" spacing={48}>
      <VStack className="items-center justify-center">
        <Skeleton className="h-[3rem] w-[50%] bg-[#585858] text-[#585858] md:w-[15rem]"></Skeleton>

        <Skeleton className="h-[3rem] w-[70%] bg-[#585858] text-[#585858] md:w-[30rem]"></Skeleton>
      </VStack>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {Array.from({ length: 4 })?.map((_, index) => (
          <VStack key={index} className="items-center rounded-[1rem] p-5 transition-all" spacing={24}>
            <Skeleton className="flex h-[6.1875rem] w-[6.1875rem] items-center justify-center rounded-full bg-[#E9F1F0] p-3">
              <Skeleton
                className={'flex h-full w-full items-center justify-center rounded-full bg-[#585858]'}
              ></Skeleton>
            </Skeleton>

            <Skeleton className="h-[2rem] w-[50%] bg-[#585858] text-[#585858] md:w-[10rem]"></Skeleton>
          </VStack>
        ))}
      </div>
    </VStack>
  );
};

export default ExpertiseSkeleton;
