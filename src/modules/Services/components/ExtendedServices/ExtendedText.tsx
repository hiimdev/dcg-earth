import React, { type FC } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';

import { Button } from '@/components/ui/button';

import ServiceParagraph from '../ServiceParagraph';

export interface IExtendedTextProps {
  title: string | undefined;
  description: string | undefined;
}

const ExtendedText: FC<IExtendedTextProps> = ({ title = '', description = '' }) => {
  return (
    <div className="w-full p-2.5 lg:w-[65%]">
      <ServiceParagraph className="text-primary mb-2 font-semibold leading-relaxed tracking-[-0.02em]">
        Extended Services
      </ServiceParagraph>
      <p className="text-headline mb-2 text-[2.5rem] font-semibold !leading-[1.2] tracking-tight md:text-6xl lg:text-7xl lg:leading-[5.375rem]">
        {title}
      </p>
      <p className="mb-8 max-w-full text-base font-medium leading-[1.6] text-[#0c231f99] md:max-w-[34.375rem] md:text-[1.0625rem] lg:max-w-[39.375rem] lg:text-lg">
        {description}
      </p>

      <Link href={ROUTES.CONTACT}>
        <Button className="bg-accent text-primary-800 hover:bg-headline  hover:text-accent h-[3.125rem] w-[8.8125rem] text-base font-medium transition-all duration-300 ease-in-out">
          Get Green
        </Button>
      </Link>
    </div>
  );
};

export default ExtendedText;
