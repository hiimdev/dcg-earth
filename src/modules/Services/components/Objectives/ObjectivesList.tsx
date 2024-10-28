import React, { type FC } from 'react';

import { cn } from '@/lib/utils';

import { type IObject } from '.';
import ObjectivesItem from './ObjectivesItem';

interface Props {
  objectives: IObject[] | undefined;
}

const ObjectivesList: FC<Props> = ({ objectives = [] }) => {
  return (
    <div className="grid w-full grid-cols-2 md:w-1/2">
      {objectives?.map((item, index) => (
        <ObjectivesItem
          key={item?.name}
          imageClassName="md:w-[5.4375rem] w-[6.1875rem]"
          className={cn('py-2.5 lg:py-0 lg:pl-2.5', {
            'lg:pr-2.5': index % 2 === 0,
          })}
          {...item}
        />
      ))}
    </div>
  );
};

export default ObjectivesList;
