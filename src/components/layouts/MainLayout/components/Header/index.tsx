'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/utils/routes';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';
import { Logo } from '@/components/logo';

import LaunchButton from './LaunchButton';
import { NavbarDesktop, NavbarMobile } from './Navbar';

interface IScrollState {
  yPosition: number;
  isScrollingDown: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
}

const transparentPagePaths: string[] = [ROUTES.HOME, ROUTES.TERMS, ROUTES.PRIVACY];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrollState, setScrollState] = useState<IScrollState>({
    yPosition: 0,
    isScrollingDown: false,
    isAtTop: false,
    isAtBottom: false,
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setScrollState((prevState) => ({
      yPosition: currentScrollY,
      isScrollingDown: currentScrollY > prevState.yPosition,
      isAtTop: currentScrollY === 0,
      isAtBottom: currentScrollY + windowHeight >= documentHeight,
    }));
  }, []);

  useEffect(() => {
    const currentScrollY = window.scrollY;
    setScrollState((prevState) => ({
      ...prevState,
      isAtTop: currentScrollY === 0,
    }));
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const { isScrollingDown, isAtTop, isAtBottom } = scrollState;
  const isTransparent = isAtTop && transparentPagePaths?.includes(pathname);

  return (
    <motion.header
      initial={{ opacity: 1, transform: 'translateY(0)' }}
      animate={{
        opacity: isScrollingDown && !isAtBottom ? 0 : 1,
        transform: isScrollingDown && !isAtBottom ? 'translateY(-20px)' : 'translateY(0)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex h-[5.125rem] items-center justify-center border-b border-b-white/20 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 md:h-[6.5625rem]',
        {
          'bg-transparent shadow-none': isTransparent,
        }
      )}
    >
      <HStack
        align="center"
        className="container h-[5.125rem] flex-1 px-4 md:h-[6.5625rem] md:px-0 lg:max-w-none lg:px-[70px]"
      >
        <Link href={ROUTES.HOME}>
          <Logo src="/common/images/logo.png" className="h-6 w-6 md:h-12 md:w-12" alt="logo" />
        </Link>

        <NavbarDesktop isTransparent={isTransparent} />

        <LaunchButton isTransparent={isTransparent} />

        <NavbarMobile isTransparent={isTransparent} />
      </HStack>
    </motion.header>
  );
};

export default Header;
