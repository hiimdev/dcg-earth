/* eslint-disable unused-imports/no-unused-vars */
'use client';

import React from 'react';
import { useGetContents } from '@/api/contents';
import { ROUTES } from '@/utils/routes';
import Markdown from 'react-markdown';
import rehypeFormat from 'rehype-format';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import LegalLayout from '@/components/layouts/LegalLayout';

const breadcrumb = [
  {
    href: ROUTES.HOME,
    label: 'Home',
  },
  {
    label: 'Terms of Use',
  },
];

const TermsPage = () => {
  const { data: term } = useGetContents<{ content: string; metadata: any }>({ page: 'Terms', component: 'Terms' });

  return (
    <LegalLayout title="Terms of Use" breadcrumb={breadcrumb} backgroundUrl="/common/images/latest-drops-bg3.png">
      <div className="container mx-auto px-4 py-5 text-[#000000] md:px-0">
        <Markdown
          remarkPlugins={[remarkGfm, remarkFrontmatter, remarkDirective, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight, rehypeFormat]}
          components={{
            h1: ({ node, ...props }) => <h1 className="pb-4 pt-5 text-7xl" {...props} />,
            h2: ({ node, ...props }) => <h2 className="py-4 text-[2.875rem] font-normal tracking-tight" {...props} />,
            h3: ({ node, ...props }) => <h3 className="pb-2 pt-4 text-2xl font-semibold" {...props} />,
            h4: ({ node, ...props }) => <h4 className="pb-2 pt-4 text-base font-medium" {...props} />,
            h5: ({ node, ...props }) => <h5 className="pb-2 pt-4 text-base font-medium" {...props} />,
            h6: ({ node, ...props }) => <h6 className="pb-2 pt-4 text-sm font-medium" {...props} />,
            p: ({ node, ...props }) => <p className="py-4 text-base font-medium" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="ml-6 list-disc py-2 text-base font-medium md:ml-12" {...props} />
            ),
            ol: ({ node, ...props }) => <ol className="ml-6 list-decimal md:ml-12" {...props} />,
            table: ({ node, ...props }) => <table className="border-collapse border border-gray-300" {...props} />,
            td: ({ node, ...props }) => <td className="border border-gray-300 p-2" {...props} />,
            th: ({ node, ...props }) => <th className="border border-gray-300 p-2" {...props} />,
          }}
        >
          {term?.content || ''}
        </Markdown>
      </div>
    </LegalLayout>
  );
};

export default TermsPage;
