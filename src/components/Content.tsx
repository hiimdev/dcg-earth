/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';
import Markdown from 'react-markdown';
import rehypeFormat from 'rehype-format';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { HStack } from './ui/h-stack';
import { Text } from './ui/text';
import { VStack } from './ui/v-stack';

type Props = {
  data?: {
    title: string;
    time: string;
  };
  dataContent?: { content: string; metadata: any };
};

const Content = ({ data, dataContent }: Props) => {
  return (
    <HStack className="container mx-auto flex-col px-4 py-5 md:flex-row md:px-0" align="start">
      <VStack className="flex-1 gap-2 md:sticky md:top-[9rem] md:gap-4">
        <Text weight={500} size="sm">
          {data?.time || ''}
        </Text>

        <Text weight={600} size="lg" className="max-w-lg md:!leading-[3.5rem]">
          {data?.title || ''}
        </Text>
      </VStack>

      <div className="flex-1 text-[#000000]">
        <Markdown
          remarkPlugins={[remarkGfm, remarkFrontmatter, remarkDirective, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight, rehypeFormat]}
          components={{
            h1: ({ node, ...props }) => <h1 className="pb-4 pt-5 text-7xl" {...props} />,
            h2: ({ node, ...props }) => (
              <h2
                className="py-4 text-[2rem] font-medium leading-10 tracking-tight md:text-[2.875rem] md:leading-[3.5rem]"
                {...props}
              />
            ),
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
          {dataContent?.content || ''}
        </Markdown>
      </div>
    </HStack>
  );
};

export default Content;
