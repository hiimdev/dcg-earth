import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

interface Props {
  name: string;
  icon: string;
  description: string;
  index: number;
}

const Offer = ({ name, icon, description, index }: Props) => {
  return (
    <Link href={'#'}>
      <VStack
        className="cursor-pointer items-center rounded-[1rem] p-5 transition-all hover:bg-[#FFFFFF0F]"
        spacing={24}
      >
        <div className="bg-accent/20 flex h-[5.5625rem] w-[5.5625rem] items-center justify-center rounded-full p-3">
          <div
            className={cn(
              'bg-primary flex h-full w-full items-center justify-center rounded-full',
              (index + 1) % 2 === 0 ? 'bg-accent' : 'bg-primary'
            )}
          >
            <div className="relative h-8 w-8">
              <Image alt="" src={icon || ''} priority unoptimized fill className="object-contain" />
            </div>
          </div>
        </div>

        <VStack>
          <Text size="md" weight={600} className="text-white">
            {name || ''}
          </Text>

          <p className="text-[.9375rem] text-[#FFFFFF8F]">{description || ''}</p>
        </VStack>
      </VStack>
    </Link>
  );
};

export default Offer;
