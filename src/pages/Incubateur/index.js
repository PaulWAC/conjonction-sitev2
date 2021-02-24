import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const Isotope = lazy(() => import("../../components/Isotope"));
const Isotopee = lazy(() => import("../../components/Isotopee"));


const Incubateur = () => {
    return (
        <>
            <Isotopee/>
        </>
    );
};

export default Incubateur;