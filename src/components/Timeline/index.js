import React from 'react';
import { Row, Col } from "antd";
import { Timeline } from 'antd';
import Fade from "react-reveal/Fade";

import * as S from "./styles";

export default function AlternateTimeline() {
  return (
    <S.TimelineBlock>
        <Row type="flex" justify="space-between" align="middle">
            <Col lg={8} md={12} sm={8} xs={12} offset={8}>
                <Fade left>
                <S.Title>
                    <h6>Chronologie</h6>
                </S.Title>
                    <Timeline mode="alternate">
                        <Timeline.Item><p><strong className="realistic-marker-highlight">2003</strong> Création de E3M</p></Timeline.Item>
                        <Timeline.Item><p><strong className="realistic-marker-highlight">2018</strong> Lancement de l'incubateur de solution pour les acteurs de la Ville</p></Timeline.Item>
                        <Timeline.Item><p><strong className="realistic-marker-highlight">2019</strong> Création Conjonction - Foncière à impact responsable</p></Timeline.Item>
                    </Timeline>
                </Fade>
            </Col>
        </Row>
    </S.TimelineBlock>  
  );
}