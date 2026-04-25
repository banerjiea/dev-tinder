import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link to="/login" className="btn btn-ghost btn-sm gap-2">
            ← Back
          </Link>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body prose max-w-none">
            <h1 className="card-title text-3xl font-bold mb-1">Contact Us</h1>
            <p className="text-base-content/70">
              If you have any questions, feedback, or concerns, feel free to contact us.
            </p>

            <div className="divider" />

            <div className="grid gap-6 not-prose">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:soubhik.hzs@gmail.com" className="link link-primary text-base">
                    soubhik.hzs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-base-content/70">Howrah, West Bengal - 711102</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Support Hours</h3>
                  <p className="text-base-content/70">Monday – Friday: 9 AM – 6 PM</p>
                  <p className="text-sm text-base-content/50 mt-1">We aim to respond within 24–48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;