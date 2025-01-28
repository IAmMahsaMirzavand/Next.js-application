import CardList from '../components/CardList';  
import { getData } from '@/utils/actions';

export default async function postsList() {
  const { posts } = await getData('http://localhost:3000/api/v1/posts');
  
  return (
    <div>
    
      <CardList key={posts.id} items={posts} type="posts" />
    </div>
  );
}
