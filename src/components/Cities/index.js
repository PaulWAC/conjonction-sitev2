import React from 'react';
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Carousel } from 'antd';
import { ArrowRightOutlined , ArrowLeftOutlined } from '@ant-design/icons';

import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const CitiesBlock = ({ icon, t, id, ville, highlight, highlight2, highlight3, highlight4, highlight5, highlight6, highlight7, ville2, ville3, ville_description, ville2_description, ville2_description2, ville2_description3, ville2_description4, ville3_description, ville3_description2}) => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    };
    return (
        <S.CitiesBlock>
            {/* <Row type="flex" justify="space-between" align="middle"> */}
                {/* <Col lg={11} md={11} sm={12} xs={24}> */}
                {/* <Col lg={24} md={11} sm={12} xs={24}>
                    <Slide left>
                        <S.ImgBlockLeft>
                            <S.ImgItem1>
                                <S.TextRightIn>{ville}</S.TextRightIn>
                            </S.ImgItem1>
                            <S.TextRight><span className="realistic-marker-highlight">{highlight}</span>{ville_description}<span className="realistic-marker-highlight">{highlight2}</span><span className="realistic-marker-highlight d-inline-block">{highlight3}</span></S.TextRight>  
                        </S.ImgBlockLeft>
                    </Slide>
                    <Slide right>
                        <S.ImgBlockRight>
                            <S.BlockTextLeft>
                                <S.TextLeftFirst>{ville2_description}<span className="realistic-marker-highlight">{highlight4}</span></S.TextLeftFirst>
                                <S.TextLeft>{ville2_description2}<span className="realistic-marker-highlight">{highlight5}</span>{ville2_description3}</S.TextLeft>
                            </S.BlockTextLeft>
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
                            <S.TextRight>{ville3_description}<span className="realistic-marker-highlight">{highlight6}</span>{ville3_description2}</S.TextRight>
                        </S.ImgBlockBoth>
                    </Slide>
                </Col>
            </Row> */}
            <Row type="flex" justify="space-between" align="middle">
                <Col lg={24} md={24} sm={24} xs={24}>
                <Slide left>
                    <h6 className="text-center">Nos villes d'interventions</h6>
                    <Carousel arrows dots={false}>
                        <div>
                            <S.ImgBlockLeft>
                                <S.ImgItem1 className="citiesblock-mobile">
                                    <S.TextRightIn>{ville}</S.TextRightIn>
                                </S.ImgItem1>
                                <S.TextRight><span className="realistic-marker-highlight">{highlight}</span>{ville_description}<span className="realistic-marker-highlight">{highlight2}</span></S.TextRight>  
                            </S.ImgBlockLeft>
                        </div>
                        <div>
                            <S.ImgBlockRight>
                                <S.ImgItem2 className="citiesblock-mobile">
                                    <S.TextRightIn>{ville2}</S.TextRightIn>
                                </S.ImgItem2>
                                <S.TextRight2>{ville2_description}<span className="realistic-marker-highlight">{highlight4}</span></S.TextRight2>
                                <S.TextRight3>{ville2_description2}<span className="realistic-marker-highlight">{highlight5}</span>{ville2_description3}<span className="realistic-marker-highlight">{highlight7}</span>{ville2_description4}</S.TextRight3>
                            </S.ImgBlockRight>
                        </div>
                        <div>
                            <S.ImgBlockBoth>
                                <S.ImgItem3 className="citiesblock-mobile">
                                    <S.TextRightIn>{ville3}</S.TextRightIn>
                                </S.ImgItem3>
                                <S.TextRight>{ville3_description}<span className="realistic-marker-highlight">{highlight6}</span></S.TextRight>
                            </S.ImgBlockBoth>
                        </div>
                    </Carousel>
                </Slide>
                </Col>
            </Row>
        </S.CitiesBlock>
    );
}

export default CitiesBlock;
