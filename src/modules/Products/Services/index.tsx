import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGetContents } from '@/api/contents';
import { ROUTES } from '@/utils/routes';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { HStack } from '@/components/ui/h-stack';
import { VStack } from '@/components/ui/v-stack';

import ServicesSkeleton from './components/ServicesSkeleton';

type Service = {
  name: string;
  description: string;
  image: string;
};

type TData = {
  title: string;
  description: string;
  services: Service[];
};

const Services = () => {
  const { data: servicesData, isLoading } = useGetContents<TData>({ page: 'Products', component: 'Services' });

  if (isLoading) return <ServicesSkeleton />;

  return (
    <div id="distributed" className="bg-light p-6 pb-[9.375rem] pt-[6.25rem]">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 },
        }}
      >
        <HStack className="flex-col items-start gap-10 lg:flex-row lg:gap-0">
          <VStack className="flex-1" spacing={32}>
            <p className="text-headline text-[2rem] font-bold leading-10 lg:text-[3rem] lg:leading-[3.5rem]">
              {servicesData?.title || ''}
            </p>
            <p className="font-medium text-black/50">{servicesData?.description || ''}</p>

            <Link href={ROUTES.CONTACT}>
              <Button className="lg:text-md max-w-[8.4375rem] whitespace-nowrap rounded-[.5rem] bg-[#303030] px-[.5rem] py-[1.25rem] text-sm transition-all hover:bg-[#BFBFBF] hover:text-[#292929] lg:px-[1.5625rem] lg:py-[1.5rem]">
                Get It Now
              </Button>
            </Link>
          </VStack>

          <div className="grid flex-1 grid-cols-2 gap-16">
            {servicesData?.services?.map((detail, i) => (
              <VStack key={i} className="items-center text-center" spacing={16}>
                <div className="shadow-custom relative h-[3.0625rem] w-[3.0625rem] rounded-[1.3125rem] border border-[#F0F0F0DB] p-[2.5rem] lg:h-[5.0625rem] lg:w-[5.0625rem] lg:p-[3rem]">
                  <Image alt="" src={detail?.image || ''} unoptimized priority fill className="object-contain" />
                </div>

                <VStack spacing={8}>
                  <p className="text-headline text-lg font-semibold">{detail?.name || ''}</p>
                  <p className="text-sm text-[#0C231F99]">{detail?.description || ''}</p>
                </VStack>
              </VStack>
            ))}
          </div>
        </HStack>
      </motion.div>
    </div>
  );
};

export default Services;
