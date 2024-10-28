import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
import Tilt from 'react-parallax-tilt';

import { Button } from '@/components/ui/button';
import { VStack } from '@/components/ui/v-stack';

const HeroSection = () => {
  return (
    <div className="to-accent relative h-[50rem] w-[100%] bg-gradient-to-br from-white via-white px-6 lg:px-0">
      <div className="absolute right-0 top-[-10%] h-full w-[45%]">
        <Image alt="" src="/common/images/Services-Hero-BG.webp" unoptimized priority fill />
      </div>
      <div className="container relative mx-auto pb-[13.75rem] pt-[6.25rem]">
        <VStack spacing={40}>
          <VStack spacing={4}>
            <p className="text-[2.5rem] font-semibold lg:text-[4.5rem]">Naturally Unrivaled</p>
            <p className="max-w-2xl text-lg font-medium text-black/50">
              The DCG world first suite of protected DLT solutions were designed to empower real-world assets, ensuring
              that compliance, provenance, and data certification are immutably secured.
            </p>
          </VStack>

          <Link href={ROUTES.CONTACT}>
            <Button className="text-md bg-accent text-primary hover:text-accent hover:bg-primary w-fit whitespace-nowrap px-[1.875rem] py-[1.5rem]">
              Get Started
            </Button>
          </Link>
        </VStack>

        <div className="absolute bottom-1/4 right-[10%] lg:top-1/3">
          <Tilt trackOnWindow>
            <div className="relative h-[2.9375rem] w-[5.125rem] rounded-[1rem] border border-[#01010117] bg-transparent shadow-xl lg:h-[5rem] lg:w-[8.5rem]">
              <Image
                alt=""
                src="/common/images/Web5-Infrastructure-Wallets-Networks-DCG-Confidential-Web3-Control-Naturally-Encrypted-Secure-Technologies-Distributed-.png"
                unoptimized
                priority
                fill
                className="object-contain"
              />
            </div>
          </Tilt>
        </div>

        <div className="absolute bottom-[5%] right-[3%] lg:top-1/2">
          <div className="relative h-[7.125rem] w-[13.125rem] rounded-[1rem] lg:h-[18.1875rem] lg:w-[33.375rem]">
            <Image
              alt=""
              src="/common/images/Naturally-Unrivaled-Photo.jpg"
              unoptimized
              priority
              fill
              className="rounded-xl object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-[10%] lg:right-1/2 lg:top-[70%]">
          <Tilt tiltReverse trackOnWindow>
            <div className="relative h-[6.3125rem] w-[6.375rem] rounded-[1rem] border border-[#01010117] bg-transparent shadow-xl lg:h-[13.9375rem] lg:w-[14.625rem]">
              <Image
                alt=""
                src="/common/images/A2_self-sovereign-Blockchain-and-Explorer-11-DCG-Web3-Wallet-_-Personal-Encryption-_-Hyper-Secu.png"
                unoptimized
                priority
                fill
                className="rounded-xl object-contain"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
