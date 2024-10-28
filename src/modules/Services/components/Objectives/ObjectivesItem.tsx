import React, { type FC, type HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { type IObject } from '.';
import ServiceParagraph from '../ServiceParagraph';

export interface IObjectivesItemProps extends HTMLAttributes<HTMLDivElement>, IObject {
  imageClassName?: IObjectivesItemProps['className'];
}

const ObjectivesItem: FC<IObjectivesItemProps> = ({ image, name, description, imageClassName, className }) => {
  return (
    <div className={cn('p-2.5', className)}>
      <div className="mb-2 p-1.5">
        <Image src={image} alt="green item" width={87} height={64} className={imageClassName} />
      </div>
      <p className="text-headline mb-1 text-base font-semibold md:text-[1.0625rem] lg:text-lg">{name}</p>
      <ServiceParagraph className="text-[0.9375rem] md:text-[0.9375rem] lg:text-[0.9375rem]">
        {description}
      </ServiceParagraph>
    </div>
  );
};

export default ObjectivesItem;
