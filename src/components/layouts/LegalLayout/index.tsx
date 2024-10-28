import React from 'react';
import Image from 'next/image';
import { type FCC } from '@/types';

import LegalHeading, { type ILegalHeadingProps } from './components/LegalHeading';

interface ILegalLayoutProps extends ILegalHeadingProps {
  backgroundUrl: string;
}

const LegalLayout: FCC<ILegalLayoutProps> = ({ children, backgroundUrl, ...props }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative overflow-hidden pt-[5.125rem] md:pt-[6.5625rem]">
        <LegalHeading {...props} />

        <Image src={backgroundUrl} alt="term background" fill unoptimized className="w-full object-cover" />
      </div>

      {children}
    </div>
  );
};

export default LegalLayout;
