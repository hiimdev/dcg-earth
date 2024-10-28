'use client';

import React, { useMemo } from 'react';
import { useGetContents } from '@/api/contents';

import { Skeleton } from '@/components/ui/skeleton';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

import FAQItem from './components/FAQItem';

export interface IFAQItem {
  question: string;
  answer: string;
}

export type IContentResponse = IFAQItem[];

// const FAQList: IFAQItem[] = [
//   {
//     question: 'What is DCG?',
//     answer: `DCG provides a cutting-edge, multichain, quantum-proof encrypted platform in relation to Green projects.`,
//   },
//   {
//     question: 'Who uses the DCG platform?',
//     answer: `The DCG platform caters to two primary user types: corporate entity and verifiers looking to control green projects and access various dMRV methods.`,
//   },
//   {
//     question: 'Why use the platform?',
//     answer: `The DCG platform offers direct, secured, and compliant access to Green projects, ensuring anonymity. It is a user-friendly, no-code interface.`,
//   },
//   {
//     question: 'How is this different?',
//     answer: `DCG integrates Green projects, resulting in an 80% cost reduction in the verification market. It empowers real-world asset with compliance, provenance, and data certification.`,
//   },
//   {
//     question: 'What does this do?',
//     answer: `DCG utilizes bespoke technologies to create a seamless ecosystem for the exploration of green projects. It ensures compliance, analytics, and prevention of greenwashing through efficient reporting.`,
//   },
// ];

const FAQSection = () => {
  const { data, isLoading } = useGetContents<IContentResponse>({ page: 'About', component: 'FAQ' });

  const faq = useMemo(() => data || [], [data]);

  return (
    <div className="bg-dark py-[50px] md:py-[75px] lg:py-[100px]">
      <VStack className="container mx-auto lg:flex-row lg:flex-nowrap">
        <div className="flex-1 p-2.5">
          <Text weight={600} size="sm" className="text-accent mb-4">
            FAQ
          </Text>
          <Text weight={600} size="lg" className="mb-4 text-white">
            Frequently Asked Questions
          </Text>
          <Text weight={500} size="sm" className="text-[#FFFFFF96]">
            Request a Demo and Experience the Power of DCG Firsthand. Our team is happy to guide you through the
            platform features and functionalities, as well as answer any questions.
          </Text>
        </div>
        <div className="flex-1 space-y-4 p-2.5">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-[76px] w-full bg-white/70" />
            ))
          ) : (
            <FAQItem faq={faq} />
          )}
        </div>
      </VStack>
    </div>
  );
};

export default FAQSection;
