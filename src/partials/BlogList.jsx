import React from 'react';

import { getPosts } from '../../services';

import { PostCard, Categories, PostWidget } from '../components';

export default function BlogList({ posts }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1 mb-4">Learn More Every Day.</h1>
            <p className="text-xl text-gray-600">When you stop learning you start falling behind. Learn daily with our blog articles that will help you market yourself as a freelancer, entrepreneur, and small business owner.</p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">

            {/* Articles container */}
            <div className="md:grow -mt-4">
            {posts.map((post) => (<PostCard key={post.node.slug} post={post.node}/>))}
             </div>

            {/* Sidebar */}
            <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">

              {/* Popular posts */}
              <div className="mb-8">
                <PostWidget/>
              </div>

              {/* Topics */}
              <div>
                <Categories />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  };
}