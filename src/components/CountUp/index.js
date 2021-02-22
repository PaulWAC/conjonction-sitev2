import React from 'react';
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";
import CountUp from 'react-countup';

import * as S from "./styles";

export default function CountUpNumbers() {
    return (
        <S.CountUpBlock>
        <Row type="flex" justify="space-between" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
                <Fade right>
                    <S.Title>
                        <h6>Quelques chiffres</h6>
                    </S.Title>
                </Fade>
            </Col>
        </Row>
                    <Fade left>
        <S.NumbersBlock>
            <Row type="flex" justify="space-between" align="middle">
                <Col lg={8} md={8} sm={8} xs={24}>
                        <S.TagItem>Années d'expertise en investissement immobilier</S.TagItem>
                        <div className="realistic-marker-highlight-title highlight-marker-mobile">
                            <S.CountUpTag>
                                <CountUp end={25} delay={2}/>
                            </S.CountUpTag>
                        </div>
                </Col>
                <Col lg={8} md={8} sm={8} xs={24}>
                    <S.TagItem>Nombre de biens revitalisés</S.TagItem>
                    <div className="realistic-marker-highlight-title">
                        <S.CountUpTag>
                            <CountUp end={120} delay={2}/>
                        </S.CountUpTag>
                    </div>
                </Col>
                <Col lg={8} md={8} sm={8} xs={24}>
                    <S.TagItem>Villes d'implantations</S.TagItem>
                    <div className="realistic-marker-highlight-title">
                        <S.CountUpTag>
                            <CountUp end={3} delay={2}/>
                        </S.CountUpTag>
                    </div>
                </Col>            
            </Row>
        </S.NumbersBlock>    
                    </Fade>
        </S.CountUpBlock>
    );
}