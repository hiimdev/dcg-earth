import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { VStack } from '@/components/ui/v-stack';

type Product = {
  title: string;
  description: string;
  services: Array<{
    name: string;
    description: string;
    icon: any;
  }>;
};

interface Props {
  product: Product;
  index: number;
}

const Product = ({ product, index }: Props) => {
  return (
    <>
      <div
        className={cn(
          'flex w-full flex-col items-start justify-start gap-3 px-4 lg:flex-row lg:gap-9 lg:p-0',
          (index + 1) % 2 === 0 && 'lg:flex-row-reverse'
        )}
      >
        <VStack spacing={24} className={cn('flex-1 p-[1.875rem]')}>
          <p className="max-w-lg text-3xl font-semibold leading-[3.5rem] text-white md:text-[3rem]">
            {product?.title || ''}
          </p>
          <p className="font-light text-white/50 lg:max-w-md">{product?.description || ''}</p>
        </VStack>

        <VStack className="flex w-full flex-1 gap-8 p-[1.875rem] lg:justify-center">
          {product?.services?.map((detail, i) => (
            <div key={i} className="flex items-start gap-6 lg:items-center">
              <div className="bg-accent/50 flex items-center justify-center rounded-full p-2">
                <div className="relative h-[2.375rem] w-[2.375rem]">
                  <Image alt="" src={detail?.icon || ''} priority unoptimized fill className="object-contain" />
                </div>
              </div>
              <VStack>
                <p className="text-lg font-semibold text-white">{detail?.name ?? ''}</p>
                <p className="text-md text-white/50">{detail?.description || ''}</p>
              </VStack>
            </div>
          ))}
        </VStack>
      </div>

      <hr className="mx-auto w-full border-white/20" />
    </>
  );
};

export default Product;
