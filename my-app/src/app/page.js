import { Suspense } from 'react';
import UsersList from '../components/UsersList.jsx';
import PostsList from '../components/PostsList';
import RecipesList from '../components/RecipesList';
import LoadingSpinner from '../components/LoadingSpinner';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <section>
        <h2>Users</h2>
        <Suspense fallback={<LoadingSpinner />}>
          <UsersList />
        </Suspense>
      </section>
      <section>
        <h2>Posts</h2>
        <Suspense fallback={<LoadingSpinner />}>
          <PostsList />
        </Suspense>
      </section>
      <section>
        <h2>Recipes</h2>
        <Suspense fallback={<LoadingSpinner />}>
          <RecipesList />
        </Suspense>
      </section>
    </div>
  );
}
