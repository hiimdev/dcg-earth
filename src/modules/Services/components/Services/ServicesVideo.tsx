'use client';

import React, { useMemo, type FC } from 'react';
import Image from 'next/image';
import { IMAGE_TYPE } from '@/utils/const';

import { cn } from '@/lib/utils';

interface IServicesVideoProps {
  src: string | undefined;
}

const ServicesVideo: FC<IServicesVideoProps> = ({ src = '' }) => {
  const type = useMemo(() => src?.split('.')[1], [src]);
  const isImage = useMemo(() => IMAGE_TYPE.includes(type), [type]);

  const render = useMemo(() => {
    if (isImage)
      return <Image src={src} alt={'Advisory Services'} fill unoptimized priority className="h-full w-full" />;

    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload"
        className="lg:min-w-[26.75rem]"
        preload="metadata"
      />
    );
  }, [isImage, src]);

  return (
    <div className="w-full md:w-1/2">
      <div className="bg-light m-[0.625rem] rounded-2xl  p-10 lg:px-20 lg:py-[3.75rem]">
        <div
          className={cn('relative overflow-hidden rounded-[2.5rem]', {
            'aspect-square': isImage,
          })}
        >
          {render}
        </div>
      </div>
    </div>
  );
};

export default ServicesVideo;
