import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLaptopCode, faSearch, faHashtag, faVideo, faPencilAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'

library.add(faLaptopCode, faSearch, faHashtag, faVideo, faPencilAlt, faUserTie)

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore Our Services</h2>
            <p className="text-xl text-gray-600">Here's a list of the services we provide to our clients. Checkout the full list of services on the Services tab!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <FontAwesomeIcon icon="laptop-code" color="white" transform="shrink-5" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Website Design & Development</h4>
              <p className="text-gray-600 text-center">We design and build custom websites for our clients.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <FontAwesomeIcon icon="search" color="white" transform="shrink-5" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">SEO</h4>
              <p className="text-gray-600 text-center">Ranking on the front page of Google is crucial for growth.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <FontAwesomeIcon icon="hashtag" color="white" transform="shrink-5" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Social Media Management</h4>
              <p className="text-gray-600 text-center">We'll up your social media game to the next level!</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <FontAwesomeIcon icon="video" color="white" transform="shrink-5" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Video Production</h4>
              <p className="text-gray-600 text-center">Commercials and videos are a great way to spread your message.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <FontAwesomeIcon icon="pencil-alt" color="white" transform="shrink-6" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Article & Blog Writing</h4>
              <p className="text-gray-600 text-center">One of the quickest ways to grow your SEO and customer base.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <FontAwesomeIcon icon="user-tie" color="white" transform="shrink-5" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Reputation Management</h4>
              <p className="text-gray-600 text-center">Reviews matter. Let us help you get tons of positive ones and no negative ones!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
