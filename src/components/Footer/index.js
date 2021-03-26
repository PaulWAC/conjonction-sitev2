import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

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
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={8} md={8} sm={12} xs={24}>
                {/* <S.Empty /> */}
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>22-24 Rue Rodier</S.Para>
                <S.Para>Paris 75009</S.Para>
                <S.Para>France</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Company")}</S.Title>
                <S.Large left="true" to="/">
                  {t("About")}
                </S.Large>
                
                <S.BlogLink href="https://blog.conjonction.com/">{t("Blog")}</S.BlogLink>
                
                <S.Large to="/mentions-legales" left="true">
                  {t("Application Security")}
                </S.Large>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <a href="mailto:contact@conjonction.com">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
                {/* <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </S.LangSelect>
                </S.Select> */}
              </Col> 
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="LogosVectorises-6-Conjonction-bleu.png"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.Para>© Conjonction 2021</S.Para>
              <S.FooterContainer>
                {/* <SocialLink
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  src="github.svg"
                /> */}
                {/* <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="twitter.svg"
                /> */}
                <SocialLink
                  href="https://fr.linkedin.com/company/conjonction1"
                  src="linkedin.svg"
                />
                {/* <SocialLink
                  href="https://github.com/Adrinlol/"
                  src="instagram.svg"
                /> */}
                {/* <SocialLink
                  href="https://medium.com/@lashakakabadze/"
                  src="medium.svg"
                /> */}
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
