import styled from 'styled-components';

export const CardContainer = styled.div`
width: 100%;
max-width: 60rem;
padding: 0.25rem 1.5rem;
display: flex;
align-items: center;
background-color:  #5603ad;
border-radius: 0.5rem;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const CardImage = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
`;

export const CardInfo = styled.div`
margin-left: 1.5rem;

span{
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
}
p{
    font-size: 1rem;
    color: #e8f0ff;
}
`;

export const CardIcon = styled.div`
margin-left: auto;
cursor: pointer;


svg{
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
}
`;


