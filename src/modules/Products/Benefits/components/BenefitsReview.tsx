import React, { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';
import { VStack } from '@/components/ui/v-stack';

import { type TData } from '..';

const BenefitsReview = ({ benefitsData }: { benefitsData: TData }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      {benefitsData?.map((benefit, index) => (
        <div key={index} className="container absolute left-0 top-0 h-full">
          <HStack className="flex-col items-start gap-8 lg:flex-row lg:gap-24">
            <VStack
              spacing={24}
              align="center"
              className={cn(
                `h-[22.75rem] w-full rounded-2xl bg-[#EBEBEB] p-10 transition-all md:w-fit lg:h-auto lg:px-[5rem] lg:py-[3.8125rem]`,
                active === index ? 'opacity-1 z-10' : 'z-0 opacity-0',
                !benefit?.video && '!pb-0'
              )}
            >
              <div
                className={cn(
                  'relative w-[18.8125rem] lg:w-[26.75rem]',
                  benefit?.video ? 'h-[7.125rem] lg:h-[12.8125rem]' : 'h-[20rem] lg:h-[26.75rem]'
                )}
              >
                <Image
                  alt=""
                  src={benefit?.image || ''}
                  unoptimized
                  priority
                  fill
                  className={cn('object-contain', benefit?.video ? 'rounded-2xl' : 'lg:rounded-t-2xl')}
                />
              </div>

              {/* <Show when={active === index && !!benefit?.video}>
                <div className="relative mb-8 h-[7.125rem] w-[14.8125rem] lg:h-[12.8125rem] lg:w-[26.75rem]">
                  <video
                    src={benefit?.video || ''}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                    className="rounded-2xl"
                  />
                </div>
              </Show> */}
            </VStack>

            <VStack
              className={cn(
                'z-10 max-w-md flex-1 select-none border-l-4 border-[#E1FFA07A] p-6 transition-all hover:cursor-pointer lg:-translate-y-10',
                {
                  'translate-y-[calc(50%+110px)] lg:translate-y-[calc(50%+55px)]': index === 1,
                  'translate-y-[calc(100%+175px)] lg:translate-y-[calc(100%+130px)]': index === 2,
                  'translate-y-[calc(150%+300px)] lg:translate-y-[calc(150%+205px)]': index === 3,
                },
                active === index && 'border-primary bg-[#E1FFA07A]'
              )}
              onClick={() => setActive(index)}
            >
              <HStack className="justify-between">
                <p className="text-headline inline-block text-lg font-semibold">{benefit?.title || ''} </p>{' '}
                <div className="relative h-[2.125rem] w-[1.125rem]">
                  <Image
                    alt=""
                    src={benefit?.icon || ''}
                    unoptimized
                    priority
                    fill
                    className="rounded-2xl object-contain"
                  />
                </div>
              </HStack>

              <p className="text-sm text-black/70">{benefit?.description || ''}</p>
            </VStack>
          </HStack>
        </div>
      ))}
    </>
  );
};

export default BenefitsReview;
