import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";

import * as S from "./styles";

const LeftContentBlock = ({ icon, title, content, title2, content2, section, t, id, content_start,highlight,content_end, content2_start, highlight2, content2_end, highlight3, content2_end2 }) => {
  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24} className="left-bg">
          <Slide left>
            {/* <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            /> */}
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.Content>{t(content_start)}<span className="realistic-marker-highlight">{t(highlight)}</span>{t(content_end)}</S.Content>
              <h6>{t(title2)}</h6>
              <S.Content2>{t(content2_start)}<span className="realistic-marker-highlight">{t(highlight2)}</span>{t(content2_end)}</S.Content2>
              <S.Content3><span className="realistic-marker-highlight">{t(highlight3)}</span>{t(content2_end2)}</S.Content3>
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
