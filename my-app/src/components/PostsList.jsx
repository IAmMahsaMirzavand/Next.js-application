// import { fetchData } from '../lib/fetchData';
// import Card from '../components/Card';

// export default async function PostsList() {
//   const { posts } = await fetchData('https://dummyjson.com/posts');
//   return (
//     <div>
//       {posts.map(post => (
//         <Card key={post.id} item={post} type="posts" />
//       ))}
//     </div>
//   );
// }




import { fetchData } from '../lib/fetchData';
import CardList from '../components/CardList';  

export default async function postsList() {
  const { posts } = await fetchData('https://dummyjson.com/posts');
  
  return (
    <div>
    
      <CardList key={posts.id} items={posts} type="posts" />
    </div>
  );
}
