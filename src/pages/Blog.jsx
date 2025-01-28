import React from 'react';

const Blog = () => {
  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-semibold">Our Blog</h1>
      <div className="mt-8">
        <article className="mb-6">
          <h2 className="text-2xl font-semibold">Latest Tech Trends in 2025</h2>
          <p className="text-lg text-gray-700 mt-4">
            The tech industry is evolving faster than ever. In 2025, we expect to see incredible advancements in AI, augmented reality, and wearable tech. Stay tuned to our blog for the latest updates on these trends!
          </p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold">Top 10 Gadgets to Watch in 2025</h2>
          <p className="text-lg text-gray-700 mt-4">
            From foldable smartphones to cutting-edge smartwatches, our list of the top 10 gadgets to watch in 2025 is here. Get a glimpse of what's coming next!
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;

