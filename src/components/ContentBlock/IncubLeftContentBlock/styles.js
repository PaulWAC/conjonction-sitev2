import styled from 'styled-components';
import { Col } from 'antd';

export const LeftContentBlock = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

export const MinPara = styled.p`
  font-size: 0.75rem;
`;

export const ServiceItem = styled(Col)`
  margin: 2rem 0;
  position: relative;
`;


export const ItemDesc = styled.div`
    box-sizing: border-box;
    min-width: 0px;
    position: absolute;
    overflow: hidden;
    bottom: 20px;
    left: 20px;
    right: 20px;
    opacity: 1;
    border-radius: 8px;
    z-index: 1;
    padding: 1.25rem 1.875rem;
    transition: all 0.4s ease 0s;
    
    &:before{
        position: absolute;
        content: "";
        background: rgb(255, 255, 255);
        inset: 0px;
        z-index: -1;
        opacity: 0.9;
    }
`;

export const Para = styled.p`
    font-size: 0.8125rem;
    line-height: 1.63;
    letter-spacing: 1.63px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(22, 28, 45, 0.7);
    margin-bottom: 8px;
`;

export const Title = styled.h4`
    font-size: 1.3125rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1;
`;

export const Link = styled.a`
    transition: all 0.3s ease-out 0s;
    color: #000;
    &:hover{
        color:#085585;
    }
`;