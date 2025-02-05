import React from 'react';
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
  heroTitle2: string;
  description: string;
};

const HeroSection = () => {
  const { data: HeroData } = useGetContents<TData>({ page: 'Home', component: 'HeroSection' });

  return (
    <div id="overview">
      <WavyBackground className="mx-auto">
        <VStack className="mx-auto h-[33rem] justify-center md:h-[35rem] lg:h-[47rem]">
          <VStack className="space-y-3 md:space-y-6">
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

            <VStack spacing={4}>
              <WavyText
                className="inter-var drop-shadow-black-gradual text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
                text={HeroData?.heroTitle || ''}
              />

              <WavyText
                className="inter-var drop-shadow-black-gradual text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
                text={HeroData?.heroTitle2 || ''}
              />
            </VStack>

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
        </VStack>
      </WavyBackground>
    </div>
  );
};

export default HeroSection;
