'use client';

import React, { useMemo } from 'react';
import { Icons } from '@/assets/icons';

import { HStack } from '@/components/ui/h-stack';
import { Skeleton } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/v-stack';

import { type IContentResponse } from '../..';
import ContactItem from './ContactItem';

const ContactInfo = ({ data, isLoading }: { data?: IContentResponse; isLoading: boolean }) => {
  const renderContent = useMemo(() => {
    if (isLoading) {
      return (
        <div className="w-full p-2.5 lg:w-[55%]">
          <Skeleton className="mb-2 h-6 w-52" />

          <Skeleton className="mb-2 h-[62px] w-full md:mx-auto md:h-[81px] md:max-w-[500px] lg:mx-0 lg:h-[115px] lg:max-w-none" />

          <Skeleton className="mb-8 h-[104px] w-full md:mx-auto md:mb-10 md:h-[110px] md:max-w-[500px] lg:mx-0 lg:mb-12 lg:h-[87px] lg:max-w-[593px]" />

          <VStack spacing={40} className="md:items-center md:gap-6 lg:items-start lg:gap-10">
            {Array.from({ length: 2 }).map((_, index) => (
              <HStack spacing={16} noWrap key={index}>
                <Skeleton className="aspect-square w-8 rounded-full" />

                <Skeleton className="h-8 w-36" />
              </HStack>
            ))}
          </VStack>
        </div>
      );
    }

    return (
      <div className="w-full p-2.5 lg:w-[55%]">
        <p className="mb-2 text-left text-sm tracking-[-0.01em] text-[#b9b9b9] md:text-center md:text-[0.9375rem] lg:text-left lg:text-base">{`The NFTs Ecosystem`}</p>

        <p className="text-headline mb-2 text-left text-[1.625rem] font-semibold !leading-[1.2] tracking-tight  md:mx-auto md:max-w-[500px] md:text-center md:text-[2.125rem] lg:mx-0 lg:max-w-none lg:text-left lg:text-5xl">
          {data?.title || ''}
        </p>

        <p className="pb-8 text-left text-base font-medium !leading-relaxed text-[#0C231FF2] md:mx-auto md:max-w-[500px] md:pb-10 md:text-center md:text-[17px] lg:mx-0 lg:max-w-[593px] lg:pb-12 lg:text-left lg:text-lg">
          {data?.description || ''}
        </p>

        <VStack spacing={40} className="md:items-center md:gap-6 lg:items-start lg:gap-10">
          <ContactItem icon={<Icons.mail className="fill-accent h-4 w-4" />} value={data?.mailContact || ''} />
          <ContactItem icon={<Icons.location className="fill-accent h-4 w-4" />} value={data?.contactAddress || ''} />
        </VStack>
      </div>
    );
  }, [data?.contactAddress, data?.description, data?.mailContact, data?.title, isLoading]);

  return renderContent;
};

export default ContactInfo;
