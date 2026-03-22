import { exec as execProcess } from 'node:child_process';
import { promisify } from 'util';

import {
  type CollectionContext,
  defineCollection,
  defineConfig,
  type Schema,
} from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

const exec = promisify(execProcess);

const postSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters long')
    .max(100, 'Title must be at most 100 characters long')
    .describe('The title of the post, between 5 and 100 characters.'),
  description: z
    .string()
    .min(16, 'Description must be at least 16 characters long')
    .max(160, 'Description must be at most 160 characters long')
    .describe('A brief summary of the post, between 16 and 160 characters.'),
  cover: z.string().describe('A URL pointing to the cover image for the post.'),
  coverAlt: z.string().describe('Alternative text for the cover image.'),
  categories: z
    .array(z.string())
    .describe('The categories or tags associated with the post.'),
  author: z.string().describe('The name of the author of the post.'),
  avatar: z
    .string()
    .describe('A URL pointing to the avatar image of the author.'),
  featured: z
    .boolean()
    .describe('Whether the post is featured or not.')
    .default(false),
  content: z.string(),
  draft: z
    .boolean()
    .describe('Whether the post is a draft or not.')
    .default(false),
});

export type PostValues = z.infer<typeof postSchema>;

export type PostDocument = Schema<'frontmatter', typeof postSchema>;

export type Transformed = CollectionContext<PostValues>['collection'];

function calcReadTime(document: PostDocument) {
  const wordsPerMinute = 150; // Average reading speed
  const text = document.content;
  const wordCount = text.split(/\s+/).length;

  return Math.ceil(wordCount / wordsPerMinute);
}

const posts = defineCollection({
  name: 'posts',
  directory: 'src/contents',
  include: '**/*.md',
  schema: postSchema,
  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft');
    }
    // return document;

    // Transform the content to a MDX component
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
    });

    // Get last modification date from Git
    const lastModified = await context.cache(
      document._meta.filePath,
      async (filePath) => {
        const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`);
        if (stdout) {
          return new Date(stdout.trim()).toISOString();
        }
        return new Date().toISOString();
      },
    );

    // Assuming 200 words per minute reading speed
    // const wordLimit = 200;
    // const readTime = Math.ceil(document.content.split(' ').length / wordLimit);
    const readTime = calcReadTime(document);

    return {
      ...document,
      mdx,
      lastModified,
      slug: document.title.toLowerCase().replace(/ /g, '-'),
      readTime,
    };
  },
  onSuccess: (post) => {
    console.log(`Successfully validated post: ${post.length}`);
  },
});

export default defineConfig({
  content: [posts],
});
