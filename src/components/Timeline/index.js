import React from 'react';
import { Row, Col } from "antd";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
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
                    <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent><p><strong className="realistic-marker-highlight">2003</strong> Création de E3M</p></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent><p><strong className="realistic-marker-highlight">2018</strong> Lancement de l'incubateur de solution pour les acteurs de la Ville</p></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent><p><strong className="realistic-marker-highlight">2019</strong> Création Conjonction - Foncière à impact</p></TimelineContent>
                    </TimelineItem>
                    </Timeline>
                </Fade>
            </Col>
        </Row>
    </S.TimelineBlock>  
  );
}