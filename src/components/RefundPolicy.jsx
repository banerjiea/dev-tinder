import React from "react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
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
            <h1 className="card-title text-3xl font-bold mb-1">Refund Policy</h1>
            <p className="text-sm text-base-content/60 mb-6">Effective Date: April 25, 2026</p>

            <p>
              At <strong>Dev Tinder</strong>, we strive to provide the best experience.
            </p>

            <h2 className="text-xl font-semibold mt-6">1. No Refund Policy</h2>
            <p>
              All payments made for premium features, subscriptions, or services are
              non-refundable, unless otherwise stated.
            </p>

            <h2 className="text-xl font-semibold mt-6">2. Exceptions</h2>
            <p>Refunds may be considered only if:</p>
            <ul>
              <li>Payment was made due to a technical error</li>
              <li>Duplicate transactions occurred</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Refund Request</h2>
            <p>
              To request a refund, contact us within 7 days of the transaction:{" "}
              <a href="mailto:soubhik.hzs@gmail.com" className="link link-primary">
                soubhik.hzs@gmail.com
              </a>
            </p>

            <h2 className="text-xl font-semibold mt-6">4. Processing Time</h2>
            <p>Approved refunds will be processed within 5–7 business days.</p>

            <h2 className="text-xl font-semibold mt-6">5. Payment Gateway</h2>
            <p>Refunds will be issued through the original payment method.</p>

            <div className="divider" />
            <p className="text-sm text-base-content/60">
              By making a purchase, you agree to this Refund Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;