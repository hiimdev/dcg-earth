'use client';

import React from 'react';
import { useGetContents } from '@/api/contents';

import Content from '@/components/Content';

type TData = {
  title: string;
  time: string;
};

const CancelPage = () => {
  const { data: cancel } = useGetContents<{ content: string; metadata: any }>({
    page: 'Cancel',
    component: 'CancelContent',
  });

  const { data: cancelData } = useGetContents<TData>({ page: 'Cancel', component: 'Cancel' });

  return (
    <div className="mb-20 mt-[5.125rem] md:mt-[6.5625rem]">
      <Content data={cancelData} dataContent={cancel} />
    </div>
  );
};

export default CancelPage;
