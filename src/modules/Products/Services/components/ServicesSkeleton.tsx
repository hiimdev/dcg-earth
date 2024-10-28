import React from 'react';

import { HStack } from '@/components/ui/h-stack';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const ServicesSkeleton = () => {
  return (
    <div className="bg-light p-6 pb-[9.375rem] pt-[6.25rem]">
      <HStack className="container mx-auto flex-col items-start gap-10 lg:flex-row lg:gap-0">
        <VStack className="flex-1" spacing={24}>
          <Skeleton className="h-[4rem] w-[20rem] bg-[#585858] md:w-[32.6875rem]"></Skeleton>
          <Skeleton className="h-[2rem] w-[20rem] bg-[#585858] md:w-[32.6875rem]"></Skeleton>

          <Skeleton className="lg:text-md max-w-[8.4375rem] whitespace-nowrap rounded-[.5rem] bg-[#585858] px-[.5rem] py-[1.25rem] text-sm transition-all lg:px-[1.5625rem] lg:py-[1.5rem]"></Skeleton>
        </VStack>

        <div className="grid w-full flex-1 grid-cols-2 gap-16">
          {Array.from({ length: 6 })?.map((_, index) => (
            <VStack key={index} className="items-center text-center" spacing={16}>
              <Skeleton className="shadow-custom relative h-[3.0625rem] w-[3.0625rem] rounded-[1.3125rem] border border-[#F0F0F0DB] p-[2.5rem] lg:h-[5.0625rem] lg:w-[5.0625rem] lg:p-[3rem]"></Skeleton>

              <VStack spacing={8}>
                <Skeleton className="h-[2rem] w-[6rem] bg-[#585858] md:w-[10rem]"></Skeleton>
                <Skeleton className="h-[3rem] w-[6rem] bg-[#585858] md:w-[10rem]"></Skeleton>
              </VStack>
            </VStack>
          ))}
        </div>
      </HStack>
    </div>
  );
};

export default ServicesSkeleton;
