import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { USER_COOKIES } from '@/utils/const';
import matter from 'gray-matter';

import { replaceContent, replaceMarkdown } from './common';

const getFilePath = (locale: string, page: string, component: string, extension: string) => {
  return path.join(process.cwd(), 'public', 'locations', locale, page, `${component}.${extension}`);
};

export async function GET(request: Request) {
  const locale = cookies().get(USER_COOKIES.countryCode)?.value;
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '';
  const component = searchParams.get('component') || '';

  if (!locale) {
    const defaultLocation = process.env.DEFAULT_LOCATION || 'International';
    const jsonFilePathDefault = getFilePath(defaultLocation, page, component, 'json');
    const mdFilePathDefault = getFilePath(defaultLocation, page, component, 'md');

    if (fs.existsSync(jsonFilePathDefault)) {
      const content = JSON.parse(fs.readFileSync(jsonFilePathDefault, 'utf8'));
      return NextResponse.json(replaceContent(content));
    }

    if (fs.existsSync(mdFilePathDefault)) {
      const fileContent = fs.readFileSync(mdFilePathDefault, 'utf8');
      const matterResult = matter(fileContent);
      return NextResponse.json({
        content: replaceMarkdown(matterResult.content),
        metadata: matterResult.data,
      });
    }
  }

  const jsonFilePath = getFilePath(locale || '', page, component, 'json');
  const mdFilePath = getFilePath(locale || '', page, component, 'md');

  // Handling JSON files
  if (fs.existsSync(jsonFilePath)) {
    const content = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    return NextResponse.json(replaceContent(content));
  }

  // Handling Markdown files
  if (fs.existsSync(mdFilePath)) {
    const fileContent = fs.readFileSync(mdFilePath, 'utf8');
    const matterResult = matter(fileContent);

    // Return the raw Markdown content (with front matter if needed)
    return NextResponse.json({
      content: replaceMarkdown(matterResult.content), // You can include matterResult.data if you want the front matter as well
      metadata: matterResult.data,
    });
  }

  // If the file does not exist, check the fallback International folder
  const jsonFileInternationalPath = getFilePath('International', page, component, 'json');
  const mdFileInternationalPath = getFilePath('International', page, component, 'md');

  if (fs.existsSync(jsonFileInternationalPath)) {
    const content = JSON.parse(fs.readFileSync(jsonFileInternationalPath, 'utf8'));
    return NextResponse.json(replaceContent(content));
  }

  if (fs.existsSync(mdFileInternationalPath)) {
    const fileContent = fs.readFileSync(mdFileInternationalPath, 'utf8');
    const matterResult = matter(fileContent);
    return NextResponse.json({
      content: replaceMarkdown(matterResult.content),
      metadata: matterResult.data,
    });
  }

  return NextResponse.json({ error: 'File not found' }, { status: 404 });
}
