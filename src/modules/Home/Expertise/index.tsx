import React from 'react';
import { useGetContents } from '@/api/contents';

import { VStack } from '@/components/ui/v-stack';

import ExpertiseItem from './components/ExpertiseItem';
import ExpertiseSkeleton from './components/ExpertiseSkeleton';

type TExpertise = {
  name: string;
  icon: string;
};

type TData = {
  title: string;
  description: string;
  expertises: TExpertise[];
};

const Expertise = () => {
  const { data: expertiseData, isLoading } = useGetContents<TData>({ page: 'Home', component: 'Expertise' });

  if (isLoading) return <ExpertiseSkeleton />;

  return (
    <VStack className="mx-auto text-center" spacing={48}>
      <VStack className="mx-auto max-w-2xl">
        <p className="text-headline text-[3rem] font-semibold">{expertiseData?.title || ''}</p>

        <p className="text-md font-medium text-[#0C231FF299]">{expertiseData?.description || ''}</p>
      </VStack>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {expertiseData?.expertises?.map((e, index) => (
          <ExpertiseItem key={index} name={e?.name} icon={e?.icon} />
        ))}
      </div>
    </VStack>
  );
};

export default Expertise;
