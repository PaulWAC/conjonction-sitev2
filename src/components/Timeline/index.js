import React from 'react';
import { Row, Col } from "antd";
import { Timeline } from 'antd';
import Fade from "react-reveal/Fade";
import { Parallax, Background } from 'react-parallax';
import * as S from "./styles";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export default function AlternateTimeline() {
  return (
    <S.TimelineBlock>
        {/* <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
        </div>
        </Parallax> */}
        <Row type="flex" justify="space-between" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
                <Fade left>
                <S.Title>
                    <h6>Chronologie</h6>
                </S.Title>
                    <S.TimeBlock>
                        <Timeline mode="alternate">
                            <Timeline.Item><p><strong className="realistic-marker-highlight">2003</strong> Premiers investissements immobiliers</p></Timeline.Item>
                            <Timeline.Item><p><strong className="realistic-marker-highlight">2012</strong> Création de E3M</p></Timeline.Item>
                            <Timeline.Item><p><strong className="realistic-marker-highlight">2018</strong> Lancement de l'incubateur de solutions digitales pour les acteurs de la Ville</p></Timeline.Item>
                            <Timeline.Item><p><strong className="realistic-marker-highlight">2019</strong> Création de Conjonction - Foncière à impact responsable</p></Timeline.Item>
                        </Timeline>
                    </S.TimeBlock>
                </Fade>
            </Col>
        </Row>
    </S.TimelineBlock>  
  );
}