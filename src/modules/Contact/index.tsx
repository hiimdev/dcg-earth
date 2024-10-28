'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useGetContents } from '@/api/contents';

const ContactMain = dynamic(() => import('./components/ContactMain'));
const GlobalPlatforms = dynamic(() => import('./components/GlobalPlatforms'));

export interface IContentResponse {
  title: string;
  description: string;
  mailContact: string;
  contactAddress: string;
  titlePlatform: string;
}

const ContactPage = () => {
  const { data, isLoading } = useGetContents<IContentResponse>({ page: 'Contact', component: 'ContactInfo' });

  return (
    <div className="overflow-hidden">
      <ContactMain data={data} isLoading={isLoading} />

      <GlobalPlatforms data={data} isLoading={isLoading} />
    </div>
  );
};

export default ContactPage;
