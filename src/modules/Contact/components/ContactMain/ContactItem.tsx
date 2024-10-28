import React, { type FC } from 'react';

import { HStack } from '@/components/ui/h-stack';

interface IContactItemProps {
  icon: React.ReactNode;
  value: string;
}

const ContactItem: FC<IContactItemProps> = ({ icon, value }) => {
  return (
    <HStack spacing={16} noWrap>
      <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-[#0c231f]">{icon}</div>

      <p className="text-base  font-medium md:text-[17px] lg:text-lg">{value}</p>
    </HStack>
  );
};

export default ContactItem;
