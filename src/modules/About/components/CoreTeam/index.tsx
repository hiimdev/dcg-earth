'use client';

import React, { useMemo } from 'react';
import { useGetContents } from '@/api/contents';

import { HStack } from '@/components/ui/h-stack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

import CoreTeamSkeleton from '../Skeleton/CoreTeamSkeleton';
import GroupReview from './components/GroupReview';

export interface IMember {
  name: string;
  position: string;
  avatar: string;
}

export interface IGroup {
  name: string;
  logo: string;
  members: IMember[];
}

export interface IContentResponse {
  title: string;
  description: string;
  groups: IGroup[];
}

const CoreTeam = () => {
  const { data, isLoading } = useGetContents<IContentResponse>({ page: 'About', component: 'CoreTeam' });

  const group = useMemo(() => data?.groups || [], [data?.groups]);

  if (isLoading) return <CoreTeamSkeleton />;

  return (
    <div className="container mx-auto pb-[8.75rem] pt-[6.25rem]">
      <VStack className="text-center" spacing={64}>
        <VStack spacing={16}>
          <Text size="lg" weight={600}>
            {data?.title || ''}
          </Text>
          <Text size="sm" weight={500} className="text-dark/50 mx-auto max-w-lg">
            {data?.description || ''}
          </Text>
        </VStack>
        {group?.slice(0, 2)?.map((group) => (
          <GroupReview key={group?.name} {...group} />
        ))}

        <HStack className="items-start justify-center" spacing={32}>
          {group?.length > 2 &&
            group?.slice(2, group?.length)?.map((group) => <GroupReview key={group?.name} {...group} />)}
        </HStack>
      </VStack>
    </div>
  );
};

export default CoreTeam;
