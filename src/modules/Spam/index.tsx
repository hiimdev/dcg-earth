'use client';

import React from 'react';
import { useGetContents } from '@/api/contents';

import Content from '@/components/Content';

type TData = {
  title: string;
  time: string;
};

const SpamPage = () => {
  const { data: spam } = useGetContents<{ content: string; metadata: any }>({
    page: 'Spam',
    component: 'SpamContent',
  });

  const { data: spamData } = useGetContents<TData>({ page: 'Spam', component: 'Spam' });

  return (
    <div className="mb-20 mt-[5.125rem] md:mt-[6.5625rem]">
      <Content data={spamData} dataContent={spam} />
    </div>
  );
};

export default SpamPage;
