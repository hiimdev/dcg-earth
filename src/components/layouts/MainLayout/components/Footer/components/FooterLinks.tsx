import React from 'react';
import Link from 'next/link';
import { useGetContents } from '@/api/contents';

import { cn } from '@/lib/utils';
import { VStack } from '@/components/ui/v-stack';

import FooterLinksSkeleton from './FooterLinksSkeleton';

export interface IContentResponse {
  title: string;
  options: [
    {
      name: string;
      link: string;
    }
  ];
}

const FooterLinks = () => {
  const { data, isLoading } = useGetContents<IContentResponse[]>({ page: 'Footer', component: 'MenuFooter' });

  if (isLoading) return <FooterLinksSkeleton />;

  return (
    <div className="container mx-auto grid grid-cols-2 gap-12 pb-[1.875rem] pt-[3.125rem] lg:grid-cols-5 lg:gap-0">
      {data?.map((link, index) => (
        <VStack spacing={12} key={index} className="text-md flex-1">
          <Link href="" className="w-fit">
            <span className={cn('text-white/40')}>{link?.title || ''}</span>
          </Link>
          {link?.options?.map((l, i) => (
            <Link href={l?.link || ''} key={i} className="w-fit">
              <span className={cn('hover:text-accent text-white')}>{l?.name || ''}</span>
            </Link>
          ))}
        </VStack>
      ))}
    </div>
  );
};

export default FooterLinks;
