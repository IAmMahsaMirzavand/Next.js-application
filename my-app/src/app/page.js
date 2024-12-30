import { Suspense } from 'react';
import Users from '../components/Users.jsx';
import Posts from '../components/Posts.jsx';
import Recipes from '../components/Recipes.jsx';

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Suspense fallback={<p>Loading Users...</p>}>
        <Users />
      </Suspense>
      <Suspense fallback={<p>Loading Posts...</p>}>
        <Posts />
      </Suspense>
      <Suspense fallback={<p>Loading Recipes...</p>}>
        <Recipes />
      </Suspense>
    </div>
  );
}
