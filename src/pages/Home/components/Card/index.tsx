import { CardContainer, CardInfo, CardImage, CardIcon } from './styles';
import { ArrowSquareOut } from 'phosphor-react';
import { IUser } from '../../../../components/interfaces/User'
import { useNavigate } from 'react-router-dom';

export function Card(user: IUser) {
  const navigate = useNavigate()

  function handleNewTask() {
    navigate(`/profile/${user.login}`)
  }

  return (
    <CardContainer>
      <CardImage src={user.avatar_url} >
      </CardImage>
      <CardInfo>
        <span>{user.name}</span>
        <p>{user.bio}</p>
      </CardInfo>
      <CardIcon>
        <ArrowSquareOut
          onClick={handleNewTask}
          size={32} />
      </CardIcon>
    </CardContainer>
  );
}
