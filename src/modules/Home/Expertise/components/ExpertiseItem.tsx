import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { VStack } from '@/components/ui/v-stack';

interface Props {
  name: string;
  icon: string;
}

const ExpertiseItem = ({ name, icon }: Props) => {
  return (
    <VStack className="items-center rounded-[1rem] p-5 transition-all" spacing={24}>
      <div className="flex h-[6.1875rem] w-[6.1875rem] items-center justify-center rounded-full bg-[#E9F1F0] p-3">
        <div className={cn('flex h-full w-full items-center justify-center rounded-full bg-[#BFD7D2]')}>
          <div className="relative h-[3rem] w-[3rem]">
            <Image src={icon || ''} alt="" unoptimized fill priority className="object-contain" />
          </div>
        </div>
      </div>

      <p className="text-lg font-semibold text-black">{name || ''}</p>
    </VStack>
  );
};

export default ExpertiseItem;
