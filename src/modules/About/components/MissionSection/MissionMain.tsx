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
          Dedicated to Regenerative & Impact Projects.
        </Text>

        <Text weight={500} size="sm" className="p-2.5 text-[#ffffff96] md:w-[34%]">
          By utilizing bespoke technologies DCG creates a seamless ecosystem for customized green projects, while
          providing transparent and reliable data on environmental impact.
        </Text>
      </VStack>

      <VStack spacing={0} className="w-full md:flex-row md:flex-nowrap md:items-stretch lg:min-h-[19.5625rem]">
        <VStack className="flex-1 p-2.5">
          <Text weight={600} size="lg" className="mb-5 !leading-tight text-white">
            Integrated Technology and Services.
          </Text>
          <Text weight={500} size="sm" className="!leading-relaxed text-[#ffffff96]">
            More than just transparency, it is about integrity. DCG ensures certified compliance plus analytics,
            preventing greenwashing through efficient, real-time reporting. DCG supports green projects that support
            carbon development.
          </Text>
        </VStack>

        <MissionMap />
      </VStack>
    </VStack>
  );
};

export default MissionMain;
