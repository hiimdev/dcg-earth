import React from 'react';
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./components/Services'));
const Objectives = dynamic(() => import('./components/Objectives'));
const ExtendedServices = dynamic(() => import('./components/ExtendedServices'));

const ServicesPage = () => {
  return (
    <div className="relative mt-[5.125rem] md:mt-[6.5625rem]">
      <ExtendedServices />

      <Services />

      <Objectives />
    </div>
  );
};

export default ServicesPage;
