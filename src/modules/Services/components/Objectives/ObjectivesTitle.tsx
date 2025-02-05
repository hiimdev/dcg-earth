import React, { type FC } from 'react';
import Link from 'next/link';
import { Icons } from '@/assets/icons';
import { ROUTES } from '@/utils/routes';

import { Button } from '@/components/ui/button';

import ServiceParagraph from '../ServiceParagraph';
import ServiceTitle from '../ServiceTitle';

export interface IObjectivesTitleProps {
  title: string | undefined;
  description: string | undefined;
}

const ObjectivesTitle: FC<IObjectivesTitleProps> = ({ title = '', description = '' }) => {
  return (
    <div className="w-full p-2.5 md:w-1/2 lg:mr-20">
      <div className="mb-4 flex aspect-square w-[4.75rem] items-center justify-center rounded-full border-[0.625rem] border-[#e4ecec] bg-[#bbd3cf]">
        <Icons.wallet width={24} height={24} fill="#277768" />
      </div>

      <ServiceTitle className="mb-2 !leading-snug">{title}</ServiceTitle>

      <ServiceParagraph className="mb-6">{description}</ServiceParagraph>

      <Link href={ROUTES.CONTACT}>
        <Button className="bg-headline text-accent hover:bg-accent hover:text-headline h-fit px-[1.5625rem] py-2.5 text-sm transition-all duration-300 ease-in-out md:text-[0.9375rem] lg:text-base">
          Explore
        </Button>
      </Link>
    </div>
  );
};

export default ObjectivesTitle;
