import React from 'react';
import { Icons } from '@/assets/icons';

import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const ObjectivesSkeleton = () => {
  return (
    <VStack
      spacing={0}
      className="container mx-auto items-center pb-[4.375rem] pt-[3.125rem] md:flex-row md:pb-[7rem] md:pt-[4.375rem] lg:pb-[9.375rem] lg:pt-[6.25rem]"
    >
      <div className="w-full p-2.5 md:w-1/2 lg:mr-20">
        <div className="mb-4 flex aspect-square w-[4.75rem] items-center justify-center rounded-full border-[0.625rem] border-[#e4ecec] bg-[#bbd3cf]">
          <Icons.wallet width={24} height={24} fill="#277768" />
        </div>

        <Skeleton className="mb-2 h-9 w-full lg:h-[66px]" />

        <Skeleton className="mb-6 h-[120px] w-full" />

        <Skeleton className="h-11 w-[131px]" />
      </div>

      <div className="grid w-full grid-cols-2 md:w-1/2">
        {Array.from({ length: 4 })?.map((_, index) => (
          <div className="p-2.5" key={index}>
            <div className="mb-2 p-1.5">
              <Skeleton className="aspect-square w-[6.1875rem] md:w-[5.4375rem]" />
            </div>
            <Skeleton className="h-7 w-full" />
            <Skeleton className="h-28 w-full" />
          </div>
        ))}
      </div>
    </VStack>
  );
};

export default ObjectivesSkeleton;
