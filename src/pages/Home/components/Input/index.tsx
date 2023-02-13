import { MagnifyingGlass } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { InputContainer } from './styles';

interface ISearchProps {
  setUsername: (username: string) => void;
}

export function Input({ setUsername }: ISearchProps) {
  const [username, setUserName] = useState('');

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setUsername(username);
    }
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(e.target.value)
    setUserName(e.target.value);
  }

  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Enter GitHub username"

        onChange={e => handleInput(e)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        onClick={() => setUsername(username)}
      >
        <MagnifyingGlass size={20} />
        Pesquisar
      </button>
    </InputContainer >
  );
}
