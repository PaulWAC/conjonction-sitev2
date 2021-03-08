import { lazy } from "react";
import { Row, Col } from "antd";
import { Image } from 'antd';
import { Typography, Space } from 'antd';
import { PageHeader } from 'antd';

const { Title,Text, Link } = Typography;

const Container = lazy(() => import("../../common/Container"));
const Button = lazy(() => import("../../common/Button"));

const Simplicite = () => {
    return (
        <>
            <Container>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Simplicité"
                subTitle="Web application"
            />
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Title level={4}>Notre solution digitale pour mieux investir et mieux gérer.</Title>
                            <p>L'outil digital vous permet d'investir en confiance et de manière sécurisée et de suivre votre portefeuille immobilier. Il couvre les fonctionnalités de gestion (édition des avis d'échéances, suivi des encaissements, indexation, suivi des travaux...), vous donne des pistes pour réduire vos coûts (assurances, prêts, contrat d'énergie...), savoir quand arbitrer (calculs de TRI...), gérer vos documents de manière sécurisés...</p>
                        <Title level={4}>Communication et partage d'informations</Title>
                            <p>L'application vous permet d'échanger de manière sécurisée des informations et des documents entre bailleur et locataire, entre associés, entre investisseur et prestataires (juriste, agent immobilier, artisan, ...). Elle facilite la transparence et fait gagner du temps à tous.</p>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Title level={4}>Fonctionnalités :</Title>
                        <ul>
                            <li>Gestion de biens et de baux</li>
                            <li>Rapprochement des écritures bancaires en temps réel</li>
                            <li>Génération d'avis d'échéances</li>
                        </ul>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Title level={4}>Développé par : <span className="realistic-marker-highlight">Abed EL-KHALIL</span></Title>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Title level={4}>Lien vers le projet : <Button onClick={() => window.location.replace('https://app.conjonction.com')}>Cliquer ici</Button></Title>
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
                                src="/img/png/laptop2_conjonction_biens.png"
                            />
                            <Image
                                width={200}
                                src="/img/png/laptop2_conjonction_biens.png"
                            />
                            <Image
                                width={200}
                                src="/img/png/laptop2_conjonction_biens.png"
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

export default Simplicite;