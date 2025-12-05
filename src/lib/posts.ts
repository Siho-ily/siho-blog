import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'posts');

export type PostMeta = {
  title: string;
  date: string;
  summary: string;
  thumbnail?: string;
  tags?: string[];
  category: string;
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

export function getPostFilePath(category: string, slug: string) {
  return path.join(POSTS_PATH, category, slug, 'index.mdx');
}

export function getPost(category: string, slug: string): Post {
  const filePath = getPostFilePath(category, slug);
  const file = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(file);

  return {
    title: data.title,
    date: data.date,
    summary: data.summary,
    thumbnail: data.thumbnail,
    tags: data.tags ?? [],
    category,
    slug,
    content
  };
}

export function getAllPostsMeta(): PostMeta[] {
  const categories = fs
    .readdirSync(POSTS_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const postsMeta: PostMeta[] = [];

  categories.forEach(category => {
    const categoryPath = path.join(POSTS_PATH, category);
    const slugs = fs.readdirSync(categoryPath).filter(dirent => {
      const fullPath = path.join(categoryPath, dirent);
      return fs.statSync(fullPath).isDirectory();
    });

    slugs.forEach(slug => {
      const filePath = getPostFilePath(category, slug);
      const file = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(file);

      postsMeta.push({
        title: data.title,
        date: data.date,
        summary: data.summary,
        thumbnail: data.thumbnail,
        tags: data.tags ?? [],
        category,
        slug
      });
    });
  });
  return postsMeta;
}
