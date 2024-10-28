'use client';

import React from 'react';
import { useGetContents } from '@/api/contents';

import { VStack } from '@/components/ui/v-stack';

import ObjectivesSkeleton from '../Skeleton/ObjectivesSkeleton';
import ObjectivesList from './ObjectivesList';
import ObjectivesTitle from './ObjectivesTitle';

interface IContentResponse {
  title: string;
  description: string;
  objectives: IObject[];
}

export interface IObject {
  name: string;
  description: string;
  image: string;
}

const Objectives = () => {
  const { data, isLoading } = useGetContents<IContentResponse>({ page: 'Services', component: 'Objectives' });

  if (isLoading) return <ObjectivesSkeleton />;

  return (
    <VStack
      spacing={0}
      className="container mx-auto items-center pb-[4.375rem] pt-[3.125rem] md:flex-row md:pb-[7rem] md:pt-[4.375rem] lg:pb-[9.375rem] lg:pt-[6.25rem]"
    >
      <ObjectivesTitle title={data?.title} description={data?.description} />

      <ObjectivesList objectives={data?.objectives} />
    </VStack>
  );
};

export default Objectives;
