import CardList from '../components/CardList';  
import { getData } from '@/utils/actions';

export default async function UsersList() {
  const { users } = await getData('http://localhost:3000/api/v1/users');
  
  return (
    <div>
    
      <CardList items={users} type="users" />
    </div>
  );
}
