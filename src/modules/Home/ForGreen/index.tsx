import React from 'react';
import { useGetContents } from '@/api/contents';

import { VStack } from '@/components/ui/v-stack';

import Service from './components/Service';
import ServicesSkeleton from './components/ServicesSkeleton';

type TData = {
  title: string;
  description: string;
  image: string;
  buttons: {
    name: string;
    link: string;
    style: {
      color: string;
      backgroundColor: string;
      border: string;
      hover: {
        color: string;
        backgroundColor: string;
      };
    };
  }[];
}[];

const ForGreen = () => {
  const { data: forGreenData, isLoading } = useGetContents<TData>({ page: 'Home', component: 'ForGreen' });

  if (isLoading) return <ServicesSkeleton />;

  return (
    <VStack id="features" className="container mx-auto gap-20 md:gap-40">
      {forGreenData?.map((green, index) => (
        <Service
          key={index}
          title={green?.title}
          isReverse={(index + 1) % 2 === 0}
          sub={green?.description}
          imgSrc={green?.image}
          buttons={green?.buttons}
        />
      ))}
    </VStack>
  );
};

export default ForGreen;
