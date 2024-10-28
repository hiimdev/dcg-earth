import React, { type FC } from 'react';
import Image from 'next/image';

interface IGlobalItemProps {
  src: string;
}

const GlobalItem: FC<IGlobalItemProps> = ({ src }) => {
  return <Image src={src} alt={src} width={101} height={101} />;
};

export default GlobalItem;
