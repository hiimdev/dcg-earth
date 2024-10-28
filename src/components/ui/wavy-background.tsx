'use client';

import React from 'react';

import Canvas from '@/lib/Canvas';
import { cn } from '@/lib/utils';

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn('relative h-full bg-[#134341]', containerClassName)}>
      <Canvas className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#134341] to-[#13434100] opacity-100 transition-all"></div>
      <div className={cn('relative z-10 h-full', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
