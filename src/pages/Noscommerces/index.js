import { lazy } from "react";
import { Row, Col } from "antd";
import { Image } from 'antd';
import { Typography, Space } from 'antd';
import { PageHeader } from 'antd';

const { Title,Text, Link } = Typography;

const Container = lazy(() => import("../../common/Container"));
const Button = lazy(() => import("../../common/Button"));

const Noscommerces = () => {
    return (
        <>
            <Container>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Nos commerces"
                subTitle="Web application"
            />
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <h4>Une façon simple de vendre en ligne</h4>
                            <p>Une plateforme locale "e-commerce" offrant aux commerçants, aux créateurs, aux artisans, aux prestataires de services et aux collectivités une présence en ligne collective. Elle permettra en autre des animations mutualisées sont déployées auprès des habitants pour faire la promotion de ces commerces.</p>
                        <h4>Fonctionnalités :</h4>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={12}>
                        <h5>Pour les commerçants :</h5>
                        <ul>
                            <li>Une page web dédiée personalisable</li>
                            <li>Notification lors d'une commande par email et sur le site</li>
                            <li>Pouvoir administrer les informations de livraison et de Click&Collect</li>
                            <li>Fonctionnalité d'aide à la gestion et à l'analyse du chiffre d'affaire</li>
                        </ul>
                    </Col>
                    <Col lg={12}>
                        <h5>Pour les usagers :</h5>
                        <ul>
                            <li>Une recherche des produits par quartiers</li>
                            <li>Paiement en ligne sécurisé avec Stripe</li>
                            <li>Navigatition intuitive</li>
                        </ul>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Title level={4}>Développé par : <span className="realistic-marker-highlight">Paul-Chaï Silavong</span></Title>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Title level={4}>Lien vers le projet : <Button onClick={() => window.location.replace('https://nos-commerces.com')}>Cliquer ici</Button></Title>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Row type="flex" justify="space-between" align="middle">
                        <Col lg={24}>
                        <h4>Aperçu :</h4>
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

export default Noscommerces;