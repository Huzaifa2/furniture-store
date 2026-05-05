import React from 'react';
import { Link } from 'react-router-dom';

const PageTemplate = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="mb-10">
          <h1 className="font-display-xl text-display-xl text-primary mb-4">{title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
        </div>
        <div className="rounded-3xl bg-white border border-surface-container p-10 shadow-lg shadow-zinc-900/5">
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">This page is linked from the landing page and is ready for full content migration.</p>
          <Link className="inline-flex items-center justify-center rounded-xl border border-outline px-6 py-3 text-body-md font-semibold text-primary transition hover:bg-surface-container" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
