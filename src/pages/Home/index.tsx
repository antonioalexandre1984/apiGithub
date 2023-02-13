import { useEffect, useState } from 'react';

import { api } from '../../services/axios';
import { Container } from './styles';
import { IUser } from '../../components/interfaces/User';
import { Store } from 'react-notifications-component'
import { Card } from './components/Card';
import { Input } from './components/Input';

export function HomePage() {

  const [username, setUsername] = useState('');
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    const res = await api.get(`https://api.github.com/users/${username}`);
    console.log(res.data);
    setUser(res.data);
    setError(false);
    if (res.status !== 200) {
      Store.addNotification({
        title: "Wonderful!",
        message: "User found with successfully!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    } else {
      setError(true);
    };
  };

  useEffect(() => {
    if (!username) {
      return;
    }
    fetchUser();
  }, [username]);

  return (
    <Container>
      <h1>GitHub Search</h1>
      <Input setUsername={setUsername} />
      {user && (
        <Card
          {...user}
        />
      )}
    </Container>
  );
}

