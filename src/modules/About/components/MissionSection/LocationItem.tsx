import React, { type FC } from 'react';
import Image from 'next/image';

export interface IPoint {
  x: number;
  y: number;
}

interface ILocationItemProps {
  location: IPoint;
  src: string;
  alt?: string;
}

const LocationItem: FC<ILocationItemProps> = ({ location, src, alt }) => {
  return (
    // eslint-disable-next-line tailwindcss/classnames-order
    <div
      style={{ left: `${location.x}%`, top: `${location.y}%` }}
      className="absolute z-20 !h-8 !w-8 md:!h-11 md:!w-11"
    >
      <div className="relative h-full w-full">
        <div className="bdt-marker ">
          <Image src={src} alt={alt ?? ''} fill className="!h-8 !w-8 md:!h-11 md:!w-11" />
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
