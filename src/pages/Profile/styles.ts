import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
width: 100%;
max-width: 80rem;
min-height: 13.25rem;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
padding: 2rem 2.5rem;
gap: 6rem;
margin-top: 2rem;
margin-bottom: 2rem;
background:#8367c7;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const CardImage = styled.img`
width: 12rem;
height: 12rem;
border-radius: 50%;
object-fit: cover;
`;

export const ProfileInfo = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
margin-bottom: 1rem;
gap:4rem;

ul{

    text-align: center;
}

span{
    font-size: 2rem;
    font-weight: 600;
}
p{
    font-size: 1.5rem;
}

`;

export const ProfileDetails = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

h1{
    font-size: 2rem;
    font-weight: 600;
}

p{
    font-size: 1.5rem;
    color: #E7EDF4;
}

`;

export const ProfileRepoTitle = styled.div`
h1{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
}

`;

export const Repository = styled.div`
padding: 2rem;
width: 100%;
max-width: 80rem;
display: flex;
margin: 0 auto;
flex-direction: column;
align-items: center;
gap: 1rem;
margin-bottom: 2rem;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
;
`;

export const CardContainer = styled.div`
margin: 0 auto;
max-width: 60rem;
padding: 0.25rem 1.5rem;
background-color:  #5603ad;
border-radius: 0.5rem;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.5);

`;

export const CardInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 0;


`;

export const Paginate = styled.div`
width: 100%;
max-width: 80rem;
height: 8rem;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
gap: 6rem;
background:#8367c7;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
margin-bottom: 2rem;


button{
    padding: 1rem 1.5rem;
    border-radius: 10px;
    background: #5603ad;
    border: 0;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.6);
    }
}
`;

