import React from 'react';
import { useGetContents } from '@/api/contents';
import { motion } from 'framer-motion';

import { VStack } from '@/components/ui/v-stack';
import WavyText from '@/components/WavyText';

import Offer from './components/Offer';
import OurOfferingsSkeleton from './components/OurOfferingsSkeleton';

type TOffering = {
  name: string;
  description: string;
  icon: string;
};

type TData = {
  title: string;
  description: string;
  offerings: TOffering[];
};

const OurOfferings = () => {
  const { data: offerData, isLoading } = useGetContents<TData>({ page: 'Home', component: 'OurOfferings' });

  if (isLoading) return <OurOfferingsSkeleton />;

  return (
    <VStack className="w-full rounded-[2.5rem] bg-[#0C231FF2] py-[7.5rem] text-center" spacing={64}>
      <VStack className="text-center" spacing={24}>
        <motion.p
          className="text-accent text-[.9375rem] font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          Our Offerings
        </motion.p>

        <WavyText
          className="mx-auto max-w-lg text-center text-3xl font-bold leading-10 text-white md:text-[3rem] md:leading-[3.5rem]"
          text={offerData?.title || ''}
        />

        <motion.p
          className="text-[.9375rem] font-semibold text-[#FFFFFF8F]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          {offerData?.description || ''}
        </motion.p>
      </VStack>

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
        <div className="container mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {offerData?.offerings?.map((offer, index) => (
            <Offer key={index} name={offer?.name} description={offer?.description} icon={offer?.icon} index={index} />
          ))}
        </div>
      </motion.div>
    </VStack>
  );
};

export default OurOfferings;
