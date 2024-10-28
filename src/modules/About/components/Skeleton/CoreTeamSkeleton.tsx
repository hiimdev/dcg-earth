import React from 'react';

import { HStack } from '@/components/ui/h-stack';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const CoreTeamSkeleton = () => {
  return (
    <div className="container mx-auto pb-[8.75rem] pt-[6.25rem]">
      <VStack className="text-center" spacing={64}>
        <VStack spacing={16} align="center">
          <Skeleton className="h-12 w-96" />
          <Skeleton className="h-12 w-96" />
        </VStack>
        {Array?.from({ length: 2 })?.map((_, index) => (
          <VStack spacing={16} key={index}>
            <Skeleton className="mx-auto h-6 w-80" />

            <div className="relative mx-auto h-[10rem] w-[10rem]">
              <Skeleton className="h-full w-full" />
            </div>

            <HStack className="items-center justify-center">
              {Array?.from({ length: index * 2 + 4 })?.map((_, index) => (
                <VStack key={index} className="w-[8rem] justify-start md:min-w-[11.25rem]" spacing={24}>
                  <div className="relative mx-auto h-[4.5rem] w-[4.5rem]">
                    <Skeleton className="aspect-square w-[72px]" />
                  </div>

                  <VStack align="center">
                    <Skeleton className="h-7 w-28" />
                    <Skeleton className="h-6 w-24" />
                  </VStack>
                </VStack>
              ))}
            </HStack>
          </VStack>
        ))}
      </VStack>
    </div>
  );
};

export default CoreTeamSkeleton;
