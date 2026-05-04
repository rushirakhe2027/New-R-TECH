import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in SaaS Ecosystems",
      category: "AI & ML",
      date: "May 10, 2026",
      author: "Rushikesh Rakhe",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      desc: "Exploring how generative AI is transforming the way businesses automate their core operations."
    },
    {
      title: "Modern Web Architectures: Why We Chose MERN",
      category: "Development",
      date: "May 5, 2026",
      author: "Aniket Shinde",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      desc: "A deep dive into why the MERN stack remains the gold standard for scalable business applications."
    },
    {
      title: "UI/UX Trends That Drive User Conversion",
      category: "Design",
      date: "April 28, 2026",
      author: "Snehal Patil",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
      desc: "How micro-interactions and minimalist design can significantly boost your product engagement."
    }
  ];

  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="badge">Insights</span>
          <h2 className="section-title">Latest From <span className="text-gradient-premium">Tech Lab</span></h2>
          <p className="section-subtitle">
            Stay updated with the latest trends, tutorials, and success stories from the frontlines of innovation.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="blog-card glass-premium">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} />
                <span className="blog-cat">{post.category}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span><Clock size={14} /> {post.date}</span>
                  <span><User size={14} /> {post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <a href="#" className="read-more">Read Article <ArrowRight size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
