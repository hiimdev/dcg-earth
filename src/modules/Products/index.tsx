'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { Products as ProductsSection } from './Products';

const Benefits = dynamic(() => import('./Benefits'));
const HeroSection = dynamic(() => import('./HeroSection'));
const Services = dynamic(() => import('./Services'));

const Products = () => {
  return (
    <div className="mt-[2.125rem] md:mt-[6.5625rem]">
      <HeroSection />

      <ProductsSection />

      <Benefits />

      <Services />
    </div>
  );
};

export default Products;
