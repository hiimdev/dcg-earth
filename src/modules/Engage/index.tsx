'use client';

import React from 'react';
import { useGetContents } from '@/api/contents';

import Content from '@/components/Content';

type TData = {
  title: string;
  time: string;
};

const EngagePage = () => {
  const { data: engage } = useGetContents<{ content: string; metadata: any }>({
    page: 'Engage',
    component: 'EngageContent',
  });

  const { data: engageData } = useGetContents<TData>({ page: 'Engage', component: 'Engage' });

  return (
    <div className="mb-20 mt-[5.125rem] md:mt-[6.5625rem]">
      <Content data={engageData} dataContent={engage} />
    </div>
  );
};

export default EngagePage;