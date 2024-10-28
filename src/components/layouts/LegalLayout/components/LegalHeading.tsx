import React, { type FC } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

export interface IBreadcrumbItem {
  href?: string;
  label: string;
}

export interface ILegalHeadingProps {
  breadcrumb: IBreadcrumbItem[];
  title: string;
}

const LegalHeading: FC<ILegalHeadingProps> = ({ breadcrumb, title }) => {
  return (
    <div className="container relative z-10 mx-auto px-2.5 py-[50px] md:py-[75px] lg:py-[100px]">
      <VStack spacing={0}>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumb?.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href}>
                      <Text weight={500} size="sm" className="text-white opacity-60">
                        {item.label}
                      </Text>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>
                      <Text weight={500} size="sm" className="text-white">
                        {item.label}
                      </Text>
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumb?.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <Text weight={600} size="xl" className="my-4 !leading-tight text-white md:my-6 lg:my-7">
          {title}
        </Text>
      </VStack>
    </div>
  );
};

export default LegalHeading;
