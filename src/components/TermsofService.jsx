import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            <h1 className="card-title text-3xl font-bold mb-1">Terms of Service</h1>
            <p className="text-sm text-base-content/60 mb-6">Effective Date: April 25, 2026</p>

            <p>
              By accessing or using <strong>Dev Tinder</strong>, you agree to these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-6">1. Eligibility</h2>
            <p>You must be at least 18 years old to use this service.</p>

            <h2 className="text-xl font-semibold mt-6">2. User Accounts</h2>
            <ul>
              <li>You are responsible for maintaining account confidentiality</li>
              <li>You agree to provide accurate information</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Acceptable Use</h2>
            <p>You agree <strong>NOT</strong> to:</p>
            <ul>
              <li>Harass or abuse other users</li>
              <li>Upload illegal or inappropriate content</li>
              <li>Use the platform for fraudulent purposes</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Payments</h2>
            <ul>
              <li>Certain features may require payment</li>
              <li>Payments are processed via secure third-party providers</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">5. Termination</h2>
            <p>We may suspend or terminate accounts that violate these terms.</p>

            <h2 className="text-xl font-semibold mt-6">6. Disclaimer</h2>
            <p>We do not guarantee matches or user behavior.</p>

            <h2 className="text-xl font-semibold mt-6">7. Limitation of Liability</h2>
            <p>We are not liable for damages arising from use of the service.</p>

            <h2 className="text-xl font-semibold mt-6">8. Changes to Terms</h2>
            <p>We may update these terms at any time.</p>

            <h2 className="text-xl font-semibold mt-6">9. Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:soubhik.hzs@gmail.com" className="link link-primary">
                soubhik.hzs@gmail.com
              </a>
            </p>

            <div className="divider" />
            <p className="text-sm text-base-content/60">
              By using our app, you agree to these Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;