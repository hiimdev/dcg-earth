import React from 'react';
import { useGetContents } from '@/api/contents';
import { motion } from 'framer-motion';

import { VStack } from '@/components/ui/v-stack';

import BenefitsReview from './components/BenefitsReview';
import BenefitsSkeleton from './components/BenefitsSkeleton';

export type TData = {
  title: string;
  description: string;
  image: string;
  video: string;
  icon: string;
}[];

const Benefits = () => {
  const { data: benefitsData, isLoading } = useGetContents<TData>({ page: 'Products', component: 'Benefits' });

  if (isLoading) return <BenefitsSkeleton />;

  return (
    <div className="container mx-auto space-y-10 px-6 py-24 lg:space-y-20 lg:px-0">
      <VStack>
        <motion.p
          className="text-headline text-[2rem] font-semibold lg:text-[3rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          The amazing NFT
        </motion.p>

        <motion.p
          className="text-md max-w-lg font-medium text-black/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
        </motion.p>
      </VStack>

      <div className="relative h-[70rem] lg:h-[40rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <BenefitsReview benefitsData={benefitsData ?? []} />
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
