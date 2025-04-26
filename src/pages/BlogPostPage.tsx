import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ThumbsUp } from 'lucide-react';
import { blogPosts } from '../data/blogs';
import { BlogPost } from '../types';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [upvoted, setUpvoted] = useState(false);
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/blog', { replace: true });
    }
  }, [id, navigate]);
  
  const handleUpvote = () => {
    if (!post || upvoted) return;
    
    setPost({
      ...post,
      upvotes: post.upvotes + 1
    });
    setUpvoted(true);
  };
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    );
  }
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
        
        {post.image && (
          <div className="rounded-lg overflow-hidden mb-8 h-64 md:h-96">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <Calendar size={16} className="mr-2" />
            <span>{formattedDate}</span>
          </div>
          
          <button
            onClick={handleUpvote}
            disabled={upvoted}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
              upvoted
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 cursor-default'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <ThumbsUp size={16} />
            <span>{post.upvotes}</span>
          </button>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* This would be Markdown content in a real app */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Link 
                key={index} 
                to={`/blog?tag=${tag}`}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};