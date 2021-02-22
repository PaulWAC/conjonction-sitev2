import React from 'react';
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const CitiesBlock = ({ icon, t, id, ville, ville2, ville3, ville_description, ville2_description, ville3_description}) => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    };
    return (
        <S.CitiesBlock>
            <Row type="flex" justify="space-between" align="middle">
                {/* <Col lg={11} md={11} sm={12} xs={24}> */}
                <Col lg={24} md={11} sm={12} xs={24}>
                    <Slide left>
                        <S.ImgBlockLeft>
                            <S.ImgItem1>
                                <S.TextRightIn>{ville}</S.TextRightIn>
                            </S.ImgItem1>
                            <S.TextRight>{ville_description}</S.TextRight>  
                        </S.ImgBlockLeft>
                    </Slide>
                    <Slide right>
                        <S.ImgBlockRight>
                            <S.TextLeft>{ville2_description}</S.TextLeft>
                            <S.ImgItem2>
                                <S.TextRightIn>{ville2}</S.TextRightIn>
                            </S.ImgItem2>
                        </S.ImgBlockRight>
                    </Slide>
                    <Slide left>
                        <S.ImgBlockBoth>
                            <S.ImgItem3>
                                <S.TextRightIn>{ville3}</S.TextRightIn>
                            </S.ImgItem3>
                            <S.TextRight>{ville3_description}</S.TextRight>
                        </S.ImgBlockBoth>
                    </Slide>
                </Col>
                {/* <Col lg={11} md={11} sm={12} xs={24}>
                    <Slide right>
                        <SvgIcon
                        src={icon}
                        className="about-block-image"
                        width="100%"
                        height="100%"
                        />
                    </Slide>
                </Col> */}
            </Row>
        </S.CitiesBlock>
    );
}

export default CitiesBlock;
