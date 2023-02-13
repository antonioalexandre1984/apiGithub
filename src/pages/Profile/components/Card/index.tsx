import { CardContainer, CardInfo, CardImage, CardIcon } from './styles';
import { ArrowSquareOut } from 'phosphor-react';
import { IUser } from '../../../../components/interfaces/User'
import { useNavigate } from 'react-router-dom';

export function Card(user: IUser) {

  return (
    <CardContainer>
      <CardInfo>
        <span>{user.name}</span>
        <p>{user.description}</p>
      </CardInfo>
      <CardIcon>
        <a href={user.html_url}>
          <ArrowSquareOut
            size={32} />
        </a>
      </CardIcon>
    </CardContainer>
  );
}
