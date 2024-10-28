import React, { forwardRef } from 'react';
import Link from 'next/link';
import { env } from '@/utils/const';

import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface ILaunchButtonProps extends ButtonProps {
  isTransparent: boolean;
}

const LaunchButton = forwardRef<HTMLButtonElement, ILaunchButtonProps>(
  ({ isTransparent, className, ...props }, ref) => {
    return (
      <Link href={env.SANDBOX_DCG_URL} target="_blank">
        <Button
          ref={ref}
          className={cn(
            'bg-primary text-accent hover:bg-accent hidden h-11 w-[10.25rem] text-base font-medium transition-all duration-300 ease-in-out hover:text-black lg:inline-flex',
            {
              'bg-white text-black': isTransparent,
            },
            className
          )}
          {...props}
        >
          Launch DCGx
        </Button>
      </Link>
    );
  }
);

export default LaunchButton;
