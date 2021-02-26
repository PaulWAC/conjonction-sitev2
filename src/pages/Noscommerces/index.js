import { lazy } from "react";
import { Row, Col } from "antd";

const Container = lazy(() => import("../../common/Container"));

const Noscommerces = () => {
    return (
        <>
            <Container>
                <h4>Nos Commerces</h4>
                <Row type="flex" justify="space-between" align="middle">
                <Col lg={11} md={11} sm={12} xs={24}>
                    slider
                </Col>
                <Col lg={11} md={11} sm={12} xs={24}>
                    description
                    <Col lg={6}>

                    </Col>
                    <Col lg={6}>
                        
                    </Col>
                </Col>
                </Row>
            </Container>
        </>
    );
};

export default Noscommerces;