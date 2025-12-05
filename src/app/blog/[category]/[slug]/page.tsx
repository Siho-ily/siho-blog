import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost } from '@/lib/posts';

type Params = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  const params_res = await Promise.resolve(params).catch(err => {
    console.error('Error resolving params:', err);
    return { category: 'unknown', slug: 'unknown' };
  });
  const { category, slug } = params_res;
  console.log('category, slug:', category, slug);
  const post = getPost(category, slug);

  return (
    <article className="prose prose-coral max-w-3xl mx-auto py-8">
      <h1 className="mb-2">{post.title}</h1>
      <p className="text-sm text-slate-500 mb-8">
        {post.date} · {post.tags?.join(', ')}
      </p>

      <MDXRemote
        source={post.content}
        components={
          {
            // 커스텀 컴포넌트 매핑하는 위치
            // h1: (props) => <h1 className="text-4xl" {...props} />,
            // p: (props) => <p className="text-lg" {...props} />,
          }
        }
      />
    </article>
  );
}
