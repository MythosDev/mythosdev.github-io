import { useParams } from 'react-router-dom';
import BlogPost from '../../components/BlogPost'; // Adjust path if needed

export default function BlogPostPage() {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
}
