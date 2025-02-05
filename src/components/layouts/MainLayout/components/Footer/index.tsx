'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGetContents } from '@/api/contents';
import { Icons } from '@/assets/icons';
import { env } from '@/utils/const';
import { ROUTES } from '@/utils/routes';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';
import { VStack } from '@/components/ui/v-stack';
import { Show } from '@/components/Show';

import FooterLinks from './components/FooterLinks';
import FooterSkeleton from './components/FooterSkeleton';

type TData = {
  title: string;
  description: string;
  mailContact: string;
  contactAddress: string;
  mailTo: string;
};

const Footer = () => {
  const pathname = usePathname();
  const { data: footerData, isLoading } = useGetContents<TData>({ page: 'Footer', component: 'Footer' });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ccEmails = env.DCG_MAIL_CC;
    const realUrl = `mailto:${footerData?.mailTo}?cc=${ccEmails}`;

    if (realUrl) {
      window.location.href = realUrl;
    }
  };

  return (
    <footer
      className={cn({
        'bg-dark': pathname === ROUTES.CONTACT,
      })}
    >
      <div className="from-secondary to-secondary rounded-t-[2.5rem] bg-gradient-to-r via-[#604234] p-8 font-semibold md:p-[.625rem]">
        <Show when={isLoading}>
          <FooterSkeleton />
        </Show>

        <Show when={!isLoading && !!footerData}>
          <HStack className="gap container mx-auto mt-[3.125rem] w-full flex-col items-start gap-12 pb-[3.125rem] pt-[1.125rem]  md:flex-row md:items-center md:gap-0">
            <VStack className="flex-1" spacing={12}>
              <p className="text-2xl font-bold text-white md:text-[2.25rem]">{footerData?.title || ''}</p>
              <p className="text-md text-accent">{footerData?.description || ''}</p>
            </VStack>

            <VStack className="text-[.9375rem] text-white lg:w-[35%]">
              <a
                href={`mailto:${footerData?.mailTo}`}
                onClick={handleClick}
                className="hover:text-accent flex w-fit flex-nowrap items-center gap-4"
              >
                <span>
                  <Icons.mail className="h-4 w-4" fill="#6EDC7B" />
                </span>{' '}
                <span>{footerData?.mailContact || ''}</span>
              </a>

              <Link href={ROUTES.CONTACT} className="hover:text-accent flex w-fit flex-nowrap items-center gap-4">
                <span>
                  <Icons.location className="h-4 w-4" fill="#6EDC7B" />
                </span>{' '}
                <span>{footerData?.contactAddress || ''}</span>
              </Link>
            </VStack>
          </HStack>
        </Show>

        <hr className="mx-auto w-[99.5%] border-white/20" />

        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
