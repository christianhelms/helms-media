import React from 'react'
import { Link } from 'react-router-dom';

import NewsAuthor04 from '../images/news-author-04.jpg';

const PostCard = ({ post }) => {
  return (
    <div>
        <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">This is the title</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor04} width="32" height="32" alt="Author 04" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Micheal Osman</a>
                        <span className="text-gray-600"> · July 20, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>
    </div>
  )
}

export default PostCard