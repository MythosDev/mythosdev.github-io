import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const files = import.meta.glob('../posts/*.md', { as: 'raw' }); // <- Tell Vite to give raw content as string

      const entries = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const slug = path.split('/').pop().replace('.md', '');
          const content = await resolver(); // Returns raw markdown as string
          return { slug, content };
        })
      );

      setPosts(entries);
    };

    fetchPosts();
  }, []);

  return (
    <div className="prose max-w-3xl mx-auto">
      <h1>Blog</h1>
      <ul>
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                {post.slug} {/* Could replace with a title parsed from the content */}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
