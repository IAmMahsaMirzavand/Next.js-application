'use client';

import { useRouter } from 'next/navigation';

export default function Card({ data, type }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${type}/${data.id}`);
  };

  
  const tagsDisplay = data.tags ? data.tags.join(' ') : 'No tags available';
  
 
  const cuisineDisplay = data.cuisine ? data.cuisine : '';

 
  const combinedDisplay = `${tagsDisplay} ${cuisineDisplay}`.trim();

  return (
    <div className="card">
      <h2>{data.name || data.title || `${data.firstName} ${data.lastName}`}</h2>
      <p>{combinedDisplay || data.description || data.email || 'No description available'}</p>
      <button onClick={handleClick}>View Details</button>
    </div>
  );
}
