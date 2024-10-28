'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Carousel } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { Show } from '@/components/Show';

import { type IContentResponse } from '../..';
import GlobalList from './GlobalList';

const GlobalPlatforms = ({ data, isLoading }: { data?: IContentResponse; isLoading: boolean }) => {
  return (
    <div className="bg-dark relative pb-12 pt-8 md:pb-20 lg:pb-24 lg:pt-12">
      <Show when={isLoading}>
        <Skeleton className="mx-auto h-[2rem] w-[20rem] bg-[#585858] lg:w-[36.75rem]" />
      </Show>

      <Show when={!isLoading}>
        <p className="mb-2 text-center text-sm font-medium text-white/30 md:text-[0.9375rem]  lg:text-base">
          {data?.titlePlatform || ''}
        </p>
      </Show>

      <div className="relative overflow-hidden">
        <div className="clip-custom from-dark to-dark overflow-hidden bg-gradient-to-r  via-transparent">
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ playOnInit: true, delay: 10000 })]}>
            <GlobalList />
          </Carousel>
        </div>
        <span className="pointer-events-none absolute inset-0">
          <span className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <span className="clip-custom from-dark/95 to-dark/95 absolute inset-0 h-full w-full bg-gradient-to-r from-5% via-transparent to-95%"></span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default GlobalPlatforms;
