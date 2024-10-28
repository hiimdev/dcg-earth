import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGetContents } from '@/api/contents';
import { ROUTES } from '@/utils/routes';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';
import { WavyBackground } from '@/components/ui/wavy-background';
import WavyText from '@/components/WavyText';

type TData = {
  title: string;
  heroTitle: string;
  description: string;
};

const HeroSection = () => {
  const { data: HeroData } = useGetContents<TData>({ page: 'Home', component: 'HeroSection' });

  return (
    <div id="overview">
      <WavyBackground className="mx-auto">
        <VStack spacing={32} className="mx-auto h-[33rem] justify-end md:h-[35rem] lg:h-[62rem]">
          <VStack className="space-y-3 md:space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -20 },
              }}
            >
              <Text
                size="sm"
                weight={600}
                className="inter-var text-accent text-center text-[.9375rem] font-semibold md:mt-6"
              >
                {HeroData?.title || ''}
              </Text>
            </motion.div>

            <WavyText
              className="inter-var drop-shadow-black-gradual text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
              text={HeroData?.heroTitle || ''}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              <Text size="sm" className="inter-var mt-4 text-center text-white/60">
                {HeroData?.description || ''}
              </Text>
            </motion.div>

            <Link href={ROUTES.CONTACT} className="mx-auto">
              <Button className="text-md max-w-fit bg-[#303030] px-[1.5625rem] py-[1.5rem] transition-all hover:bg-[#BFBFBF] hover:text-[#292929]">
                Contact Us
              </Button>
            </Link>
          </VStack>

          <motion.div
            className="relative mx-auto h-[8rem] w-[20rem] md:w-[40rem] lg:h-[28.1875rem] lg:w-[62.5rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: -20, scale: 0.8 },
            }}
          >
            <Image alt="" unoptimized src={'common/images/Vector.webp'} fill className="object-contain" />
            <Image
              alt=""
              unoptimized
              src={'common/images/header-logo-marble-14b-ateeel.png'}
              fill
              className="object-contain"
            />
          </motion.div>
        </VStack>
      </WavyBackground>
    </div>
  );
};

export default HeroSection;
