import { lazy } from "react";
import { Row, Col } from "antd";
import { Image } from 'antd';
import { Typography, Space } from 'antd';
import { PageHeader } from 'antd';

const { Title,Text, Link } = Typography;

const Container = lazy(() => import("../../common/Container"));

const Restauration = () => {
    return (
        <>
            <Container>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Plateforme de restauration dédiée au restaurateurs"
                subTitle="Web application"
            />
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24}>
                        <Title level={4}>Votre contrat de travail sur-mesure</Title>
                            <p>Un projet réalisé pour les restaurateurs, et commandé par les experts de <span className="realistic-marker-highlight">Sophadrien</span>, ces derniers s'engagent à fournir à tous ces clients des services de conseil professionnels adaptés à leurs besoins.</p>
                            <p>Poussé par nos experts en intelligence artificielle, nous avons développer un véritable outil de création de contrat RH sur-mesure sans passer par la case notaire.</p>
                        <Title level={4}>Fonctionnalités :</Title>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24}>
                        <ul>
                            <li>Fiabilisez vos documents</li>
                            <li>Faites des économies</li>
                            <li>Facilitez votre gestion administrative</li>
                        </ul>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24}>
                        <Title level={4}>Développé par : <span className="realistic-marker-highlight">Jayanth Srikantharajah</span></Title>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={11} sm={12} xs={24}>
                        <Row type="flex" justify="space-between" align="middle">
                        <Col lg={24}>
                        <Title level={4}>Aperçu :</Title>
                        <Image.PreviewGroup>
                            <Image
                                width={200}
                                src="/img/png/noscommerces1.png"
                            />
                            <Image
                                width={200}
                                src="/img/png/noscommerces2.png"
                            />
                            <Image
                                width={200}
                                src="/img/png/noscommerces3.png"
                            />
                           </Image.PreviewGroup>
                           </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Restauration;