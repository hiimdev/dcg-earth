import React, { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface IServiceTitleProps extends HTMLAttributes<HTMLParagraphElement> {}

const ServiceTitle = forwardRef<HTMLParagraphElement, IServiceTitleProps>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'text-headline text-[1.625rem] font-semibold leading-tight md:text-[2.125rem] lg:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

ServiceTitle.displayName = 'ServiceTitle';

export default ServiceTitle;
