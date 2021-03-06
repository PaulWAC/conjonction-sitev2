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
                            href="https://www.quietrent.com/"
                            src="quietrent.png"
                        />
                        <SocialLink 
                            href="https://www.panga.fr/"
                            src="panga.svg"
                        />
                        <SocialLink 
                            href="https://www.felicite.graphics/"
                            src="felicite.webp"
                        />
                        <SocialLink 
                            href="https://www.codenekt.com/"
                            src="codenekt.png"
                        />
                        <SocialLink 
                            href="https://www.sophadrien.fr/"
                            src="sophadrien.png"
                        />
                        <SocialLink 
                            href="https://www.agglo-nevers.net/"
                            src="neversagglo.png"
                        />
                        <SocialLink 
                            href="https://fr.linkedin.com/company/conjonction1"
                            src="Conjonction-Assurances1.jpg"
                        />
                        <SocialLink 
                            href="https://axescommerce.octissimo.com/"
                            src="axesimmo.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </S.PartenairesBlock>
    );
};

export default Partenaires;