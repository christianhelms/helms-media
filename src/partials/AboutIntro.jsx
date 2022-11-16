import React from 'react';

import AboutImage from '../images/about-01.jpg';

function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">We enable businesses to generate leads and increase their bottom line.</h1>
            <p className="text-xl text-gray-600">
              We have spent time learning what companies want and need. Achieve the goals you've been looking for and be involved in your marketing plan from day one.
            </p>
          </div>

          <figure className="flex justify-center items-start">
            <img className="rounded shadow-2xl" src={AboutImage} width="768" height="432" alt="About us" />
          </figure>

        </div>
      </div>
    </section>
  );
}

export default AboutIntro;