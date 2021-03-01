import { lazy } from "react";
import { Row, Col } from "antd";
import { Image } from 'antd';
import { Typography, Space } from 'antd';
import { PageHeader } from 'antd';
import * as S from "./styles";

const { Title,Text, Link } = Typography;

const Container = lazy(() => import("../../common/Container"));


const Mentions = () => {
    return (
        <>
            <Container>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Mentions légales"
                subTitle="édité le 01/02/2021"
            />
            <Row type="flex" justify="space-between" align="middle">
                <Col lg={24}>

                    <S.Block>
                        <Title level={4}>Informations légales</Title>
                        <Space direction="vertical">
                            <Text>Dénomination sociale : E3M</Text>
                            <Text>Adresse du siège social : situé à PARIS(75009)</Text>
                            <Text>Adresse-email de contact : <a href="mailto:contact@conjonction.com">contact@conjonction.com</a></Text>
                            <Text>Forme juridique de la société : Société à Actions Simplifiée</Text>
                            <Text>Montant du capital social : 4 320 531,00 €</Text>
                            <Text>RCS PARIS B790 244 420 – Siret : 79024442000028 – APE : 6430Z</Text>
                            <Text>N° déclaration CNIL :</Text>
                        </Space>
                    </S.Block>

                    <S.Block>
                        <Title level={4}>Hébergeur</Title>
                        <Space direction="vertical">
                            <Text>Le site <a href="https://www.conjonction.com/">https://www.conjonction.com/</a> est hébergé par OVH</Text>
                            <Text><a href="https://www.ovh.com/fr/">https://www.ovh.com/fr/</a></Text>
                            <Text>Adresse-email de contact : <a href="mailto:contact@conjonction.com">contact@conjonction.com</a></Text>
                            <Text>Siège social : 2 rue Kellermann – 59100 Roubaix – France</Text>
                        </Space>
                    </S.Block>

                    <S.Block>
                        <Title level={4}>Conditions d’utilisation</Title>
                        <Space direction="vertical">
                            <Text>Le site accessible par les url suivants : <a href="https://www.conjonction.com">https://www.conjonction.com</a> est exploité dans le respect de la législation française. L’utilisation de ce site est régie par les présentes conditions générales. En utilisant le site, vous reconnaissez avoir pris connaissance de ces conditions et les avoir acceptées. Celles-ci pourront êtres modifiées à tout moment et sans préavis par la société E3M.</Text>
                            <Text>E3M ne saurait être tenu pour responsable en aucune manière d’une mauvaise utilisation du service.</Text>
                        </Space>
                    </S.Block>

                    <S.Block>
                        <Title level={4}>Droits d'accès</Title>
                        <Space direction="vertical">
                            <Text>En application de cette loi, les internautes disposent d’un droit d’accès, de rectification, de modification et de suppression concernant les données qui les concernent personnellement. Ce droit peut être exercé par voie électronique à l’adresse email suivante : <a href="mailto:contact@conjonction.com">contact@conjonction.com</a>.</Text>
                            <Text>Les informations personnelles collectées ne sont en aucun cas confiées à des tiers hormis pour l’éventuelle bonne exécution de la prestation commandée par l’internaute.</Text>
                        </Space>
                    </S.Block>

                    <S.Block>
                        <Title level={4}>Confidentialité</Title>
                        <Space direction="vertical">
                            <Text>Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers hormis pour la bonne exécution de la prestation.</Text>
                        </Space>
                    </S.Block>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Mentions;