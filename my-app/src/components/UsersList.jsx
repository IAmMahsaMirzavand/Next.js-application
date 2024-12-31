// app/users/UsersList.js
// import { fetchData } from '../lib/fetchData';
// import Card from '../components/Card';

// export default async function UsersList() {
//   const { users } = await fetchData('https://dummyjson.com/users');
//   return (
//     <div>
//       {users.map(user => (
//         <Card key={user.id} item={user} type="users" />
//       ))}
//     </div>
//   );
// }


import { fetchData } from '../lib/fetchData';
import CardList from '../components/CardList';  

export default async function UsersList() {
  const { users } = await fetchData('https://dummyjson.com/users');
  
  return (
    <div>
    
      <CardList items={users} type="users" />
    </div>
  );
}
