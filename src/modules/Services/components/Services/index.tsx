'use client';

import React from 'react';
import { useGetContents } from '@/api/contents';

import { VStack } from '@/components/ui/v-stack';

import ServicesSkeleton from '../Skeleton/ServicesSkeleton';
import ServicesText from './ServicesText';
import ServicesVideo from './ServicesVideo';

interface IContentResponse {
  title: string;
  description: string;
  video: string;
  image: string;
}

const Services = () => {
  const { data, isLoading } = useGetContents<IContentResponse>({ page: 'Services', component: 'Services' });

  if (isLoading) return <ServicesSkeleton />;

  return (
    <VStack
      spacing={0}
      align="center"
      className="container mx-auto w-full py-[3.125rem] md:flex-row md:flex-nowrap md:py-[5.625rem] lg:py-[7.5rem]"
    >
      <ServicesVideo src={data?.video || data?.image} />

      <ServicesText title={data?.title} description={data?.description} />
    </VStack>
  );
};

export default Services;
