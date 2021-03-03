import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import { Carousel } from 'antd';

import SvgIcon from "../../../common/SvgIcon";

import * as S from "./styles";

const Button = lazy(() => import("../../../common/Button"));

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const LeftContentBlock = ({ icon, title, content, title2, content2, section, t, id, content_start,highlight,content_end, content2_start, highlight2, content2_end, highlight3, content2_end2 }) => {
  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          
            {/* <a href="/incubateur">
            <Slide left>
              <SvgIcon
                src={icon}
                className="about-block-image"
                width="100%"
                height="100%"
              />
            </Slide>
            </a> */}
          <Slide left>
          <Carousel>
          <div className="workCard position-relative">
            <a href="/incubateur/simplicite">
              <img src="/img/jpg/office.jpg" className="w-100"/>
            </a>
            <S.ItemDesc className="item-desc">
              <S.Para>Immobilier</S.Para>
              <S.Title><S.Link href="https://app.conjonction.com" target="_blank">Simplicité</S.Link></S.Title>
              <S.MinPara>Notre solution digitale pour mieux investir et mieux gérer. Nous mettons à disposition une plateforme permettant une gestion efficiente et une communication fluide.</S.MinPara>
            </S.ItemDesc>
          </div>
          <div className="workCard position-relative">
            <a href="/incubateur/nos-commerces">
              <img src="/img/jpg/e-commerce.jpg" className="w-100"/>
            </a>
            <S.ItemDesc className="item-desc">
              <S.Para>Web</S.Para>
              <S.Title><S.Link href="https://nos-commerces.com/" target="_blank">nos-commerces.com</S.Link></S.Title>
              <S.MinPara>Une plateforme "E-commerce" offrant aux commerçants et artisans une présence en ligne collective.</S.MinPara>
            </S.ItemDesc>
          </div>
          <div className="workCard position-relative">
            <a href="/incubateur/restauration">
              <img src="/img/jpg/bar.jpg" className="w-100"/>
            </a>
            <S.ItemDesc className="item-desc">
              <S.Para>Web</S.Para>
              <S.Title><S.Link href="https://restauration.herokuapp.com/" target="_blank">Plateforme restauration</S.Link></S.Title>
              <S.MinPara>Votre contrat de travail sur-mesure : Fiabilisez vos documents, faites des économies et facilitez votre gestion administrative.</S.MinPara>
            </S.ItemDesc>
          </div>
          </Carousel>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content><span className="realistic-marker-highlight">{highlight}</span>{t(content)}</S.Content>
              <Button onClick={() => window.location.replace('/incubateur')}>Voir tout</Button>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          <S.MinPara>{t(item.content)}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default withTranslation()(LeftContentBlock);