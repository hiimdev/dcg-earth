import React from 'react';
import { Icons } from '@/assets/icons';

import { HStack } from '@/components/ui/h-stack';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

const FooterSkeleton = () => {
  return (
    <HStack className="gap container mx-auto mt-[3.125rem] w-full flex-col items-start gap-12 pb-[3.125rem] pt-[1.125rem]  md:flex-row md:items-center md:gap-0">
      <VStack className="flex-1" spacing={12}>
        <Skeleton className="h-[2rem] w-[18rem] bg-[#585858]"></Skeleton>
        <Skeleton className="h-[2rem] w-[10rem] bg-[#585858]"></Skeleton>
      </VStack>

      <VStack className="text-[.9375rem] text-white lg:w-[35%]">
        <div className="flex items-center gap-4">
          <span>
            <Icons.mail className="h-4 w-4" fill="#6EDC7B" />
          </span>{' '}
          <Skeleton className="h-[2rem] w-[15rem] bg-[#585858]"></Skeleton>
        </div>

        <div className="flex items-center gap-4">
          <span>
            <Icons.location className="h-4 w-4" fill="#6EDC7B" />
          </span>{' '}
          <Skeleton className="h-[2rem] w-[15rem] bg-[#585858]"></Skeleton>
        </div>
      </VStack>
    </HStack>
  );
};

export default FooterSkeleton;
