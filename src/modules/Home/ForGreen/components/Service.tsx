import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HStack } from '@/components/ui/h-stack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

interface Props {
  title: string;
  sub: string;
  imgSrc: string;
  isReverse: boolean;
  buttons: {
    name: string;
    link: string;
    style: {
      color: string;
      backgroundColor: string;
      border: string;
      hover: {
        color: string;
        backgroundColor: string;
      };
    };
  }[];
}

const Service = ({ imgSrc, title, sub, isReverse = false, buttons }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -20 },
      }}
    >
      <div
        className={cn(
          'flex w-full flex-col justify-between gap-9 px-4 lg:flex-row lg:items-center lg:p-0',
          isReverse && 'lg:flex-row-reverse'
        )}
      >
        <VStack spacing={24} className={cn('flex-1 lg:mr-[6.25rem]', isReverse && 'lg:ml-[.625rem] lg:pl-[1.875rem]')}>
          <Text size="lg" weight={600}>
            {title || ''}
          </Text>

          <Text size="sm" weight={300} className="pl-4 text-[#585858] lg:max-w-lg">
            {sub || ''}
          </Text>

          <HStack spacing={16}>
            {buttons?.map((btn, index) => (
              <Link key={index} href={btn?.link || ''}>
                <Button
                  style={{
                    color: btn?.style?.color || '#6EDC7B',
                    backgroundColor: btn?.style?.backgroundColor || '#003000',
                    border: btn?.style?.border || 'none',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = btn?.style?.hover?.color || '#003000';
                    e.currentTarget.style.backgroundColor = btn?.style?.hover?.backgroundColor || '#6EDC7B';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = btn?.style?.color || '#6EDC7B';
                    e.currentTarget.style.backgroundColor = btn?.style?.backgroundColor || '#003000';
                  }}
                  className={`text-md w-fit whitespace-nowrap px-[1.875rem] py-[1.5rem]`}
                >
                  {btn?.name || ''}
                </Button>
              </Link>
            ))}
          </HStack>
        </VStack>

        <div className="flex w-full flex-1 items-center justify-center rounded-2xl bg-[#00300026] p-[3rem] md:h-[22.6875rem] lg:max-w-[37.5rem]">
          <div className="relative h-[10rem] w-full md:h-[14.125rem] md:w-[29.375rem]">
            <Image src={imgSrc || ''} alt="green-image" fill unoptimized className="rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
