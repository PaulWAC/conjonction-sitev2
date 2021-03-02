import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 10.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
  color:#000;
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BackgroundTop = styled.div`
  background: url(https://conjonction.com/storage/2019/09/first_background_nantes.png?id=8873);
  background-repeat: no-repeat;
  background-size: cover;
  height: 860px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
`;