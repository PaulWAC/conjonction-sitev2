import styled from 'styled-components';

export const PartenairesBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
  img{
      width:100px;
      margin:0 1em;
  }
`;

export const ButtonLink = styled.span`
  color:#0a1f44;
`;