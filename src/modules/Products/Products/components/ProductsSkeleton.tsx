import React from 'react';

import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const ProductsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 })?.map((_, index) => (
        <div key={index}>
          <div
            className={cn(
              'flex w-full flex-col items-start justify-start gap-3 px-4 lg:flex-row lg:gap-9 lg:p-0',
              (index + 1) % 2 === 0 && 'lg:flex-row-reverse'
            )}
          >
            <VStack spacing={24} className={cn('flex-1 p-[1.875rem]')}>
              <Skeleton className="h-[3rem] w-[15rem] bg-[#585858] md:w-[25rem]"></Skeleton>
              <Skeleton className="h-[2rem] w-[15rem] bg-[#585858] md:w-[30rem]"></Skeleton>
            </VStack>

            <VStack className="flex w-full flex-1 gap-8 p-[1.875rem] lg:justify-center">
              {Array.from({ length: 3 })?.map((_, i) => (
                <div key={i} className="flex items-start gap-6 lg:items-center">
                  <Skeleton className="bg-accent/50 flex h-[3.625rem] w-[3.625rem] items-center justify-center rounded-full p-2"></Skeleton>
                  <VStack>
                    <Skeleton className="h-[2rem] w-[10rem] bg-[#585858] md:w-[20rem]"></Skeleton>
                    <Skeleton className="h-[2rem] w-[10rem] bg-[#585858] md:w-[20rem]"></Skeleton>
                  </VStack>
                </div>
              ))}
            </VStack>
          </div>

          <hr className="mx-auto w-full border-white/20" />
        </div>
      ))}
    </>
  );
};

export default ProductsSkeleton;
