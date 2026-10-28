import React from 'react';
import { Home } from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-lg mx-auto">
        <Badge variant="fire" className="mb-4">
          404 Error · Lost in Space
        </Badge>

        <h1 className="text-7xl sm:text-9xl font-black text-white tracking-tight text-gradient-fire">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-300 text-sm leading-relaxed">
          The page you are looking for doesn't exist, has been relocated, or is temporarily unavailable. Let's get you back on track.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={Home}>
            Back to Homepage
          </Button>

          <Button to="/services" variant="secondary" size="md">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}
