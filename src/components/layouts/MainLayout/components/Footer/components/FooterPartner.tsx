import React from 'react';
import Image from 'next/image';
import { useGetContents } from '@/api/contents';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';
import { VStack } from '@/components/ui/v-stack';

import FooterPartnerSkeleton from './FooterPartnerSkeleton';

type TData = {
  contents: string[];
  certifications: [
    {
      name: string;
      imagePath: string;
    }
  ];
};

const FooterPartner = () => {
  const { data: data, isLoading } = useGetContents<TData>({ page: 'Footer', component: 'DisclaimerFooter' });

  if (isLoading) return <FooterPartnerSkeleton />;

  return (
    <HStack className="container mx-auto flex-col pt-6 md:flex-row lg:pt-2">
      <HStack className="flex-1">
        <VStack className="flex-1 text-[.625rem] font-normal text-white/40">
          <p>{data?.contents[0] || ''}</p>

          <p className="md:whitespace-nowrap">{data?.contents[1] || ''}</p>
        </VStack>

        <div className="flex-1"></div>
      </HStack>

      <HStack className="flex-1 justify-end lg:gap-8">
        {data?.certifications?.map((partner, index) => (
          <div
            key={index}
            className={cn(
              'relative h-[3.375rem] w-[3rem]'
              // partner.type === 'svg' && 'w-[1.5rem] md:w-[2.25rem]'
            )}
          >
            <Image alt="" src={partner?.imagePath || ''} unoptimized fill priority className="object-contain" />
          </div>
        ))}
      </HStack>
    </HStack>
  );
};

export default FooterPartner;
