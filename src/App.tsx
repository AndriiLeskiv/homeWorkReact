import "./App.css";
import { UseHookFetch } from "./hooks/useHookFetch.ts";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

function App() {
  const { data: users, error, isLoading } = UseHookFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div>
        <h1>Users</h1>
        <ul>
          {users?.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
                <br />
                Address: {user.address.street}, {user.address.city} ({user.address.zipcode})
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;