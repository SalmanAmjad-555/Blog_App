import React from 'react';

const NewsLetter = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-8 md:px-16 lg:px-32 text-center rounded-xl shadow-md max-w-3xl mx-auto my-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Never miss a blog!
      </h1>
      <p className="text-gray-600 text-sm sm:text-base mb-6">
        Subscribe to get the newest blogs, tech updates, and exclusive news.
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-80 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
