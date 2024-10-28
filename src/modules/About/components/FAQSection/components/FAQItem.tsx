'use client';

import React, { useState, type FC } from 'react';
import { Icons } from '@/assets/icons';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';

import { type IFAQItem } from '..';

interface Props {
  faq: IFAQItem[];
}

const FAQItem: FC<Props> = ({ faq }) => {
  const [value, setValue] = useState('');

  return (
    <Accordion value={value} onValueChange={setValue} type="single" collapsible className="w-full space-y-4">
      {faq?.map((item, index) => (
        <AccordionItem value={`item-${item?.question}`} key={`${item?.question}-${index}`}>
          <AccordionTrigger
            icon={
              value === `item-${item?.question}` ? (
                <Icons.minus width={20} height={20} className="fill-accent" />
              ) : (
                <Icons.plus width={20} height={20} className="fill-accent" />
              )
            }
          >
            <span className="text-base md:text-lg lg:text-xl">{item?.question || ''}</span>
          </AccordionTrigger>
          <AccordionContent>
            <Text size="sm" className="text-white">
              {item?.answer || ''}
            </Text>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQItem;
