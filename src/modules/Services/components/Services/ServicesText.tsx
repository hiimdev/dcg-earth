import React, { type FC } from 'react';

import ServiceParagraph from '../ServiceParagraph';
import ServiceTitle from '../ServiceTitle';

export interface IServicesTextProps {
  title: string | undefined;
  description: string | undefined;
}

const ServicesText: FC<IServicesTextProps> = ({ title = '', description = '' }) => {
  return (
    <div className="w-full md:w-1/2 lg:ml-[3.125rem]">
      <div className="p-2.5 ">
        <ServiceTitle className="mb-2">{title}</ServiceTitle>

        <ServiceParagraph>{description}</ServiceParagraph>
      </div>
    </div>
  );
};

export default ServicesText;
