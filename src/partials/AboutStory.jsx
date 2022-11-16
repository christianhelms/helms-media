import React from 'react';

import AboutImage from '../images/about-02.jpg';
import AboutLogo from '../images/about-logo.png';

function  AboutStory() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Our story</h3>
            <p className="text-lg text-gray-600 mb-8">
              Helms Media started in 2018 in Joplin, Missouri. Christian Helms, the founder of Helms Media, was looking for 
              change after working for five years as a software engineer. He didn't like how marketing companies around the Joplin
              area were operating and felt he could make a more positive impact with a greater ROI (return on investment).
            </p>
            <p className="text-lg text-gray-600 mb-8">
              The goal of Helms Media is to provide digital marketing services to Joplin and the surrounding areas without 
              breaking the bank. We also pride ourselves on bringing the client in on decisions, providing detailed reports,
              and beint transparent.
            </p>
          </div>

          <div className="sm:flex">
            <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
              <img className="grow self-start rounded" src={AboutImage} width="435" height="326" alt="About us 02" />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h4 className="h4 mb-2">2020 - 2022</h4>
              <p className="text-lg text-gray-600 mb-8">
                After the first two years Helms Media began picking up more clients and growing. 2020 was the first year 
                Christian operated Helms Media as his full-time job. Putting a focus more on website development and social
                media management, Helms Media was specialized in a couple specific fields.
              </p>
              <div className="flex  mb-8">
                <img className="rounded-full self-start shrink-0 shadow-lg mr-4" src={AboutLogo} width="40" height="40" alt="Logo" />
                <div>
                  <blockquote className="text-gray-600 italic">
                    “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                  </blockquote>
                  <div className="text-sm font-medium text-gray-600 mt-2">
                    <cite className="text-gray-900 not-italic">Micheal Osman</cite> · <a className="text-blue-600" href="#0">New York Times</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutStory;