import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ slug }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        const files = import.meta.glob('../posts/*.md', { as: 'raw' });

        const fileKey = `../posts/${slug}.md`;

        if (files[fileKey]) {
          const raw = await files[fileKey](); // load content as string
          setContent(raw);
        } else {
          console.warn(`File not found: ${fileKey}`);
          setContent(`# 404 - Post not found\nCould not find ${slug}.md`);
        }
      } catch (error) {
        console.error('Error loading markdown:', error);
        setContent('# Error loading post.');
      }
    };

    loadPost();
  }, [slug]);

  return (
    <div className="prose max-w-3xl mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
