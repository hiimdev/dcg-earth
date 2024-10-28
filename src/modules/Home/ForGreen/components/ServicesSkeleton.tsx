import React from 'react';

import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const ServicesSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 })?.map((_, index) => (
        <div
          key={index}
          className={cn(
            'container mx-auto flex w-full flex-col justify-between gap-9 px-4 lg:flex-row lg:items-center lg:p-0',
            (index + 1) % 2 === 0 && 'lg:flex-row-reverse'
          )}
        >
          <VStack
            spacing={24}
            className={cn('flex-1 lg:mr-[6.25rem]', (index + 1) % 2 === 0 && 'lg:ml-[.625rem] lg:pl-[1.875rem]')}
          >
            <Skeleton className="w-lg h-[4.5rem] text-[#585858]"></Skeleton>

            <Skeleton className="w-lg h-[3rem] text-[#585858]"></Skeleton>

            <Skeleton className="h-[3rem] w-[10rem] text-[#585858]"></Skeleton>
          </VStack>

          <Skeleton className="flex w-full flex-1 items-center justify-center rounded-2xl bg-[#00300026] p-[3rem] md:h-[22.6875rem] lg:max-w-[37.5rem]"></Skeleton>
        </div>
      ))}
    </>
  );
};

export default ServicesSkeleton;
