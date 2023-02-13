import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../../components/interfaces/User';
import { api } from '../../services/axios';
import { Card } from './components/Card';
//import { Paginate } from './components/Paginate';



import { ProfilePageContainer, CardImage, ProfileInfo, ProfileDetails, Repository, Paginate } from './styles';

export function ProfilePage() {
  const { id } = useParams();
  const [listUser, setListUser] = useState<IUser>({} as IUser);
  const [repos, setRepos] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);


  const [page, setPage] = useState(1);
  const elementsPerPage = 5;

  const profileUser = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/users/${id}`);
      console.log(response.data);
      setListUser(response.data);

      const responseRepos = await api.get(`/users/${id}/repos?page=${page}&per_page=${elementsPerPage}`);
      console.log(responseRepos.data);
      setRepos(responseRepos.data);
      setLoading(false);
    } finally {
      console.log('error');
      setLoading(false);
    }
  }, [listUser, page]);

  useEffect(() => {
    profileUser();
  }, [page]);


  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProfilePageContainer>
        <CardImage src={listUser.avatar_url} />
        <div>
          <ProfileInfo>
            <ul>
              <span>{listUser.followers}</span>
              <p>Followers</p>
            </ul>
            <ul>
              <span>{listUser.following}</span>
              <p>Following</p>
            </ul>
            <ul>
              <span>{listUser.public_repos}</span>
              <p>Repositories</p>
            </ul>
          </ProfileInfo>
          <ProfileDetails>
            <h1>{listUser.name}</h1>
            <p>{listUser.bio}</p>
          </ProfileDetails>
        </div>
      </ProfilePageContainer>
      <Repository>
        {repos && repos.map((repo) => (
          <Card
            username={repo.username}
            description={repo.description}
            image={repo.avatar_url}
            route={repo.html_url}
            followers={repo.followers}
            following={repo.following}
            avatar_url={repo.avatar_url}
            bio={repo.bio}
            login={repo.login}
            name={repo.name}
            public_repos={repo.public_repos}
            html_url={repo.html_url}
          />
        ))}
      </Repository>
      <Paginate>
        <button
          onClick={handleNextPage}
        >
          Anterior
        </button>
        <button
          onClick={handlePreviousPage}
        >
          Próximo
        </button>
      </Paginate>
    </>
  );
}
