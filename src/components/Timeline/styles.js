import styled from 'styled-components';

export const TimelineBlock = styled.section`
//   text-align:center;
    padding: 10rem 0 0rem;
    // @media screen and (min-width:1700px) {
    //     padding: 40em 0 8rem;
    // }
    @media only screen and (max-width: 768px) {
        padding: 4rem 0 4rem;
      }
`;

export const Title = styled.div`
    text-align:center;
`;

export const TimelineContent = styled.p`
    font-size:11pt;
`;

export const TimeBlock = styled.div`
    @media screen and (min-width: 768px) {
        text-align: center;
        width: 60%;
        margin: 0 auto;
    }

`;