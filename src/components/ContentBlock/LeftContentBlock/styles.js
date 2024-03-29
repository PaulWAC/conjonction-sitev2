import styled from "styled-components";
import { Col } from "antd";

export const LeftContentBlock = styled.section`
  position: relative;
  padding: 10rem 0 0rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 0rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  text-align: justify;
`;

export const Content2 = styled.p`
  margin: 1.5rem 0 0rem 0;
  text-align: justify;
`;

export const Content3 = styled.p`
  margin: 0rem 0 0rem 0;
  text-align: justify;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 800px) {
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
