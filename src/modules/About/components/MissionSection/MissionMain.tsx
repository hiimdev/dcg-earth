import React from 'react';

import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/v-stack';

import MissionMap from './MissionMap';

const MissionMain = () => {
  return (
    <VStack>
      <VStack
        spacing={0}
        className="w-full pb-[5.1875rem] md:flex-row md:flex-nowrap md:items-center md:pb-[8.1875rem] lg:pb-[12.9375rem]"
      >
        <Text weight={600} size="lg" className="p-2.5 !leading-tight text-white md:w-[66%]">
          The amazing NFT art of the world here.
        </Text>

        <Text weight={500} size="sm" className="p-2.5 text-[#ffffff96] md:w-[34%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
        </Text>
      </VStack>

      <VStack spacing={0} className="w-full md:flex-row md:flex-nowrap md:items-stretch lg:min-h-[19.5625rem]">
        <VStack className="flex-1 p-2.5">
          <Text weight={600} size="lg" className="mb-5 !leading-tight text-white">
            The amazing NFT art of the world here
          </Text>
          <Text weight={500} size="sm" className="!leading-relaxed text-[#ffffff96]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
          </Text>
        </VStack>

        <MissionMap />
      </VStack>
    </VStack>
  );
};

export default MissionMain;
