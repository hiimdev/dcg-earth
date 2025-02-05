import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

const HiringSection = () => {
  return (
    <div className="pb-[19px] pt-[27px] md:pb-0 lg:pt-7">
      <div className="bg-secondary container relative mx-auto mt-2.5 rounded-[20px] px-[25px] py-[50px] md:px-0 md:py-[90px] lg:py-[120px]">
        <div className="to-accent/50 absolute inset-x-0 top-0 z-10 h-full w-full bg-gradient-to-b from-[#E1FFA000] to-95%" />
        <Image
          src={'/common/images/About-Us-CTA-BG.webp'}
          alt="Hiring"
          fill
          className="!bottom-0 !left-1/2 !top-1/3 z-20 !h-2/3 !w-2/3 -translate-x-1/2"
        />
        <div className="relative z-30">
          <Text size="lg" className="mb-2 text-center text-white">
            We’re hiring!
          </Text>
          <VStack align="center" spacing={24}>
            <Text size="sm" className="text-center text-[#ffffff94] md:max-w-[550px] lg:max-w-[650px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
            </Text>

            <Link href={ROUTES.CONTACT}>
              <Button className="bg-accent text-headline hover:text-accent hover:bg-headline transition-all duration-300 ease-in-out">
                Get In Touch
              </Button>
            </Link>
          </VStack>
        </div>
      </div>
    </div>
  );
};

export default HiringSection;
