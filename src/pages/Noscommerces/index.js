import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));

const Noscommerces = () => {
    return (
        <>
            <Container>
                <h4>Nos Commerces</h4>
            </Container>
        </>
    );
};

export default Noscommerces;