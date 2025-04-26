import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  onUpvote: (id: string) => void;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onUpvote }) => {
  const handleUpvote = (e: React.MouseEvent) => {
    e.preventDefault();
    onUpvote(post.id);
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {post.image && (
        <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
          <div className="flex items-center space-x-1">
            <button 
              onClick={handleUpvote}
              className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Upvote this post"
            >
              <ThumbsUp size={16} />
              <span className="text-sm">{post.upvotes}</span>
            </button>
          </div>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/blog/${post.id}`}
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};