import { env } from '@/utils/const';

const replaceContent = (content: any): any => {
  const updatedContent = JSON.stringify(content)
    .replaceAll(/{{APP_URL}}/g, env.APP_URL || '')
    .replaceAll(/{{DCG_MAIL_CONTACT}}/g, env.DCG_MAIL_CONTACT || '');

  const parsedContent = JSON.parse(updatedContent);

  return parsedContent;
};

const replaceMarkdown = (markdown: string): string => {
  let copyMarkdown = markdown;

  if (copyMarkdown.includes('{{mailContact}}')) {
    copyMarkdown = copyMarkdown.replaceAll('{{mailContact}}', env.DCG_MAIL_CONTACT || '');
  }

  if (copyMarkdown.includes('{{APP_URL}}')) {
    copyMarkdown = copyMarkdown.replaceAll('{{APP_URL}}', env.APP_URL || '');
  }

  return copyMarkdown;
};

export { replaceContent, replaceMarkdown };
