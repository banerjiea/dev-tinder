import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="card-title text-3xl font-bold mb-1">Privacy Policy</h1>
            <p className="text-sm text-base-content/60 mb-6">Effective Date: April 25, 2026</p>

            <p>
              Welcome to <strong>Dev Tinder</strong>. Your privacy is important to us. This Privacy
              Policy explains how we collect, use, and protect your information.
            </p>

            <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number</li>
              <li><strong>Profile Information:</strong> Photos, bio, preferences</li>
              <li><strong>Usage Data:</strong> App activity, interactions, logs</li>
              <li><strong>Payment Information:</strong> Processed securely via third-party payment gateways</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Match you with other users</li>
              <li>Process payments securely</li>
              <li>Communicate updates and support</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Sharing of Information</h2>
            <p>
              We do not sell your personal data. We may share information with service providers
              (hosting, analytics, payments) or when required by law.
            </p>

            <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data.</p>

            <h2 className="text-xl font-semibold mt-6">5. Cookies & Tracking</h2>
            <p>
              We may use cookies and similar technologies to enhance user experience.
            </p>

            <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
            <p>You can:</p>
            <ul>
              <li>Access or update your data</li>
              <li>Request deletion of your account</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">7. Contact Us</h2>
            <p>
              If you have questions, contact us at:{" "}
              <a href="mailto:soubhik.hzs@gmail.com" className="link link-primary">
                soubhik.hzs@gmail.com
              </a>
            </p>

            <div className="divider" />
            <p className="text-sm text-base-content/60">
              By using our service, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;