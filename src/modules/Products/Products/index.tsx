import React from 'react';
import Image from 'next/image';
import { useGetContents } from '@/api/contents';

import { VStack } from '@/components/ui/v-stack';
import HexagonVideo from '@/components/HexagonVideo';
import { Show } from '@/components/Show';

import Product from './components/Product';
import ProductsSkeleton from './components/ProductsSkeleton';

type Service = {
  name: string;
  description: string;
  icon: string;
};

type TData = {
  title: string;
  description: string;
  services: Service[];
}[];

const Products = () => {
  const { data: productsData, isLoading } = useGetContents<TData>({ page: 'Products', component: 'Products' });

  return (
    <div className="relative mx-auto -translate-y-8 rounded-t-[2.5rem] bg-[#0C231F] py-[3rem] lg:py-[7.5rem]">
      <div className="absolute left-[-10%] top-1/4 h-[50%] w-[50%] select-none">
        <Image alt="" src="/common/images/About-Us-Mision-BG-2.webp" unoptimized priority fill />
      </div>

      <div className="absolute right-0 top-1/4 h-[50%] w-[50%] select-none">
        <Image alt="" src="/common/images/About-Us-Mision-BG.webp" unoptimized priority fill />
      </div>

      <VStack className="container mx-auto gap-10 lg:gap-20">
        <Show when={isLoading}>
          <ProductsSkeleton />
        </Show>

        <Show when={!isLoading && !!productsData}>
          {productsData?.map((product, index) => (
            <Product key={index} product={product} index={index} />
          ))}
        </Show>
      </VStack>

      <div className="pt-20">
        <HexagonVideo />
      </div>
    </div>
  );
};

export { Products };
