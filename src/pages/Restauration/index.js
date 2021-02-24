import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));

const Restauration = () => {
    return (
        <>
            <Container>
                <h4>Plateforme pour restaurateurs</h4>
            </Container>
        </>
    );
};

export default Restauration;