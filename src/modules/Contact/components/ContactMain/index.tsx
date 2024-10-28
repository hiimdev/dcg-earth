import React from 'react';
import Image from 'next/image';

import { VStack } from '@/components/ui/v-stack';

import { type IContentResponse } from '../..';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactMain = ({ data, isLoading }: { data?: IContentResponse; isLoading: boolean }) => {
  return (
    <div className="to-accent via-accent/20 relative  mt-[5.125rem] bg-gradient-to-br from-[#E1FFA000] from-35% via-50% md:mt-[6.5625rem] ">
      <VStack
        spacing={0}
        className="container relative mx-auto w-full pb-[4.375rem] pt-[3.125rem] md:pb-[6.25rem] md:pt-[4.6875rem] lg:flex-row lg:flex-nowrap lg:pb-[8.75rem] lg:pt-[6.25rem]"
      >
        <ContactInfo data={data} isLoading={isLoading} />

        <ContactForm />

        <Image
          src="/common/images/Services-Hero-BG.webp"
          alt="Extended Services"
          fill
          className="!bottom-0 !left-1/2 z-[-1] h-full !w-full scale-90 object-cover"
        />
      </VStack>
    </div>
  );
};

export default ContactMain;
