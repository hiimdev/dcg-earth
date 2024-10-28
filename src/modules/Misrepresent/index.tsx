'use client';

import React from 'react';
import { useGetContents } from '@/api/contents';

import Content from '@/components/Content';

type TData = {
  title: string;
  time: string;
};

const MisrepresentPage = () => {
  const { data: misrepresent } = useGetContents<{ content: string; metadata: any }>({
    page: 'Misrepresent',
    component: 'MisrepresentContent',
  });

  const { data: misrepresentData } = useGetContents<TData>({ page: 'Misrepresent', component: 'Misrepresent' });

  return (
    <div className="mb-20 mt-[5.125rem] md:mt-[6.5625rem]">
      <Content data={misrepresentData} dataContent={misrepresent} />
    </div>
  );
};

export default MisrepresentPage;