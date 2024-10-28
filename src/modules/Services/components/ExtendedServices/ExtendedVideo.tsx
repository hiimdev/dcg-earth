'use client';

import React, { useMemo, type FC } from 'react';
import Image from 'next/image';
import { IMAGE_TYPE } from '@/utils/const';

import { cn } from '@/lib/utils';

interface IExtendedVideoProps {
  src: string | undefined;
}

const ExtendedVideo: FC<IExtendedVideoProps> = ({ src = '' }) => {
  const type = useMemo(() => src?.split('.')[1], [src]);
  const isImage = useMemo(() => IMAGE_TYPE.includes(type), [type]);

  const render = useMemo(() => {
    if (isImage)
      return <Image src={src} alt={'Extended Services'} fill unoptimized priority className="h-full w-full" />;

    return <video src={src} autoPlay loop muted playsInline controlsList="nodownload" preload="metadata" />;
  }, [isImage, src]);

  return (
    <div className="h-full min-h-full w-full bg-white p-2.5 lg:w-[35%]">
      <div
        className={cn('relative border-8 border-transparent p-[3%]', {
          'aspect-square': isImage,
        })}
      >
        {render}
      </div>
    </div>
  );
};

export default ExtendedVideo;
