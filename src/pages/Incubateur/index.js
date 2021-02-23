import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const Isotope = lazy(() => import("../../components/Isotope"));


const Incubateur = () => {
    return (
        <Container>
            <h6>@ L'incubateur urbain</h6>
            <Isotope/>
        </Container>
    );
};

export default Incubateur;