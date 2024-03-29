import { useState, useEffect, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import useWindowDimensions from "../utils/useWindowDimensions";
import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Button = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const { height, width } = useWindowDimensions();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        {width > 500 ? (
          <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
            <S.Span>{t("About")}</S.Span>
          </S.CustomNavLinkSmall>
        ) : (
          <S.CustomNavLinkSmall onClick={() => scrollTo("about2")}>
            <S.Span>{t("About")}</S.Span>
          </S.CustomNavLinkSmall>
        )}
        <S.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <S.Span>{t("Mission")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("villes")}>
          <S.Span>La foncière</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <S.Span>{t("Product")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.Span>
            <a href="https://blog.conjonction.com" target="_blank">
              {t("Blog")}
            </a>
          </S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <S.Span>
            <Button background="#0e3750">{t("Contact")}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" className="navMenuCenter" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon
              src="LogosVectorises-6-Conjonction-blanc.png"
              width="234"
              height="64"
            />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} open={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
      <S.BackgroundTop></S.BackgroundTop>
    </S.Header>
  );
};

export default withTranslation()(Header);
