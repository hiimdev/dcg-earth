import React from 'react';
import Image from 'next/image';

import { HStack } from '@/components/ui/h-stack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

import { type IMember } from '..';

type Props = {
  members: IMember[];
  logo: string;
  name: string;
};

const GroupReview = ({ members, logo, name }: Props) => {
  return (
    <VStack spacing={16}>
      <Text weight={600} className="!text-[2rem]">
        {name}
      </Text>

      <div className="relative mx-auto h-[10rem] w-[10rem]">
        <Image alt="" src={logo} unoptimized priority fill className="object-contain" />
      </div>

      <HStack className="items-center justify-center">
        {members.map((member) => (
          <VStack key={member.name} className="w-[8rem] justify-start md:min-w-[11.25rem]" spacing={24}>
            <div className="relative mx-auto h-[4.5rem] w-[4.5rem]">
              <Image alt="" src={member.avatar} unoptimized priority fill className="rounded-[1rem] object-contain" />
            </div>

            <VStack className="min-h-[7rem]" spacing={0}>
              <Text size="md" weight={600}>
                {member.name}
              </Text>
              <Text size="sm" weight={500} className="text-dark/50">
                {member.position}
              </Text>
            </VStack>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
};

export default GroupReview;
