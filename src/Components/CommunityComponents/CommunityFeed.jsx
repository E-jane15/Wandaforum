import React from 'react';
import { useDomainContext } from './DomainSelection';
import Post from './Post' // You'll create this component for displaying posts

export default function CommunityFeed() {
  const { selectedDomains } = useDomainContext();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-3xl text-white font-bold">
          Your Tech Community
        </h2>
        <p className="text-gray-300">
          Showing posts in your selected domains: {selectedDomains.join(', ')}
        </p>
      </div>
      <Post selectedDomains={selectedDomains} />
    </div>
  );
}