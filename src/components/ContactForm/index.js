import { lazy } from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import useForm from "./useForm";
import validate from "./validationRules";

import * as S from "./styles";

const Block = lazy(() => import("../Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));
const ContactBlock = lazy(() => import("../../components/ContactBlock"));

const Contact = ({ title, text_start, text_end, highlight, highlight2, content, id, t }) => {

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} text_start={text_start} highlight={highlight} text_end={text_end} highlight2={highlight2}/>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <ContactBlock/>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
