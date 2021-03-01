import { lazy } from "react";
import { Row, Col } from "antd";
import { Image } from 'antd';
import { Typography, Space } from 'antd';
import { PageHeader } from 'antd';
import * as S from "./styles";

const { Title,Text, Link } = Typography;

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Partenaires = () => {
    const SocialLink = ({ href, src }) => {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={src}
            aria-label={src}
          >
            <SvgIcon src={src} width="25px" height="25px" />
          </a>
        );
    };
    return (
        <S.PartenairesBlock>
            <Container>
                <PageHeader
                    className="site-page-header"
                    onBack={() => window.history.back()}
                    title="Nos partenaires"
                    subTitle="édité le 01/02/2021"
                />
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24}>
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="quietrent.png"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="panga.svg"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="felicite.webp"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="codenekt.png"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="sophadrien.png"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="neversagglo.png"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="Conjonction-Assurances1.jpg"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="axesimmo.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </S.PartenairesBlock>
    );
};

export default Partenaires;