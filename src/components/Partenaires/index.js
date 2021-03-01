import { lazy } from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import * as S from "./styles";
const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Partenaires = ({ title, content, button, t, highlight }) => {
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
            <Row type="flex" justify="center" align="middle">
                <Col lg={24} md={24} sm={24} xs={24}>
                    <h6>{t(title)}</h6>
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
                    <Link to="/nos-partenaires">
                        <Button type="link">Voir plus</Button>
                    </Link>
                </Col>
            </Row>
        </S.PartenairesBlock>
    )
};

export default withTranslation()(Partenaires)
