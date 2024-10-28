'use client';

import React from 'react';
import Image from 'next/image';
import { useGetContents } from '@/api/contents';

import { VStack } from '@/components/ui/v-stack';

import ExtendedServicesSkeleton from '../Skeleton/ExtendedServicesSkeleton';
import ExtendedText from './ExtendedText';
import ExtendedVideo from './ExtendedVideo';

interface IContentResponse {
  title: string;
  description: string;
  video: string;
  image: string;
}

const ExtendedServices = () => {
  const { data, isLoading } = useGetContents<IContentResponse>({ page: 'Services', component: 'ExtendedServices' });

  if (isLoading) return <ExtendedServicesSkeleton />;

  return (
    <div className="relative">
      <VStack
        align="start"
        className="container mx-auto w-full pb-[4.375rem] pt-[3.125rem] md:pb-[6.25rem] md:pt-[4.6875rem] lg:flex-row lg:flex-nowrap lg:pb-[8.75rem] lg:pt-[6.25rem]"
      >
        <ExtendedText title={data?.title} description={data?.description} />

        <ExtendedVideo src={data?.video || data?.image} />
      </VStack>

      <Image
        src="/common/images/Services-Hero-BG.webp"
        alt="Extended Services"
        fill
        className="!bottom-0 !left-1/2 z-[-1] h-full !w-1/2 lg:translate-y-[20%]"
      />
    </div>
  );
};

export default ExtendedServices;
