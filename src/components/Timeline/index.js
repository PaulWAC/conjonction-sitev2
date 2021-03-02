import React from 'react';
import { Row, Col } from "antd";
import { Timeline } from 'antd';
import Fade from "react-reveal/Fade";

import * as S from "./styles";

export default function AlternateTimeline() {
  return (
    <S.TimelineBlock>
        <Row type="flex" justify="space-between" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
                <Fade left>
                <S.Title>
                    <h6>Chronologie</h6>
                </S.Title>
                    <S.TimeBlock>
                        <Timeline mode="alternate">
                            <Timeline.Item><p><strong className="realistic-marker-highlight">2003</strong> Création de E3M</p></Timeline.Item>
                            <Timeline.Item><p><strong className="realistic-marker-highlight">2018</strong> Lancement de l'incubateur de solutions pour les acteurs de la Ville</p></Timeline.Item>
                            <Timeline.Item><p><strong className="realistic-marker-highlight">2019</strong> Création Conjonction - Foncière à impact responsable</p></Timeline.Item>
                        </Timeline>
                    </S.TimeBlock>
                </Fade>
            </Col>
        </Row>
    </S.TimelineBlock>  
  );
}