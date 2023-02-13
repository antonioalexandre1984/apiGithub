import styled from 'styled-components';

export const InputContainer = styled.div`
max-width: 70rem;
width: 100%;
margin: 0 auto;
padding: 0 1.5rem;
display: flex;
gap: 0.25rem;
margin-bottom: 3rem;

input{
    flex: 1;
    border-radius: 0.375rem;
    background:#8367c7;
    padding: 1rem;
    border: 4px solid #8367c7;

    &::placeholder{
        color: #f4f4f9;
        font-size: 1rem;
        font-weight: 400;
    }

    &:focus{
        outline: none;
        border-color: #5603ad;
        transition: border-color 0.2s;
        color: #fff;
        font-size: 1rem;
        font-weight: 400;
    }
  
}

button{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.375rem;
    border: 0;
    background: #5603ad;
    border: none;
    color: #fff;
    font-weight: bold;
    transition: filter 0.2s;
    font-size: 1rem;

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }

}

`;
