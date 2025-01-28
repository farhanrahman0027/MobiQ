import React from "react";
import phones from "../assets/Blog/Phones.jfif";
import computers from "../assets/Blog/computers.jfif";
import watches from "../assets/Blog/watches.jfif";
import earbuds from "../assets/Blog/earbuds.jfif";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Smartphones to Buy in 2025 📱",
      description:
        "Discover the best smartphones with cutting-edge features, performance, and battery life.",
      image: phones,
      date: "Jan 28, 2025",
    },
    {
      id: 2,
      title: "Smartwatches: Are They Worth It in 2025? ⌚",
      description:
        "Explore the latest smartwatch features, health tracking, and best models for your lifestyle.",
      image:watches,
      date: "Jan 20, 2025",
    },
    {
      id: 3,
      title: "Best Budget Laptops for Students & Professionals 💻",
      description:
        "Looking for an affordable yet powerful laptop? Here are our top picks for 2025.",
      image: computers,
      date: "Jan 15, 2025",
    },
    {
      id: 4,
      title: "Wireless Earbuds Showdown: Which One Should You Buy? 🎧",
      description:
        "We compare the top wireless earbuds to find the best one for sound quality and comfort.",
      image: earbuds,
      date: "Jan 10, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h1>

        {/* Featured Blog Post */}
        <div className="mb-8 p-6 bg-gray-200 rounded-lg shadow-md">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold">{blogPosts[0].title}</h2>
          <p className="text-gray-600 mt-2">{blogPosts[0].description}</p>
          <p className="text-gray-500 text-sm mt-2">📅 {blogPosts[0].date}</p>
        </div>

        {/* Other Blog Posts */}
        <h2 className="text-2xl font-semibold mb-4">More Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <p className="text-gray-500 text-sm mt-2">📅 {post.date}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 bg-gray-300 rounded-l-lg hover:bg-gray-400">
            ◀ Prev
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded-r-lg hover:bg-gray-400">
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
