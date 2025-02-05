import React, { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface IServiceParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const ServiceParagraph = forwardRef<HTMLParagraphElement, IServiceParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm font-medium text-[#0C231FF299] md:text-[0.9375rem] lg:text-base', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

ServiceParagraph.displayName = 'ServiceParagraph';

export default ServiceParagraph;
