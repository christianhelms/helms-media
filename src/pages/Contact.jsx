import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/* Contact section */}
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1">Have a question about Helms Media? Contact us directly</h1>
              </div>

              {/* Contact form */}
              <form onSubmit={handleSubmit(onSubmitForm)} className="max-w-xl mx-auto">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                    <input id="first-name" type="text" {...register("firstName")} className="form-input w-full text-gray-800" placeholder="Enter your first name" required />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                    <input id="last-name" type="text" {...register("lastName")} className="form-input w-full text-gray-800" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" {...register("email")} className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="phoneNumber">Phone Number <span className="text-red-600">*</span></label>
                    <input id="phone" type="phone" {...register("phoneNumber")} className="form-input w-full text-gray-800" placeholder="Enter your phone number" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="subject">Subject <span className="text-red-600">*</span></label>
                    <input id="subject" type="text" {...register("subject")} className="form-input w-full text-gray-800" placeholder="How can we help you?" required />
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="country">Country</label>
                    <select id="country" {...register("country")} className="form-select w-full text-gray-500">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div> */}
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea id="message" rows="4" {...register("message")} className="form-textarea w-full text-gray-800" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-4">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Send</button>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  By clicking "send" you consent to allow Simple to store and process the personal information submitted above and agree to our 
                  <Link to="/terms" className='underline'> terms and conditions</Link> as well as our <Link to="/privacy" className='underline'>Privacy Policy</Link>.
                </div>
              </form>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;