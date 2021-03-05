import {React,lazy} from 'react';
import { Link } from 'react-router-dom';
import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));
const Button = lazy(() => import("../../common/Button"));


const NotFound = () => (
  <Container>
      <S.NotFoundBlock className="text-center">
        <h1>Oops! La page n'existe pas !</h1>
        <Link to="/">
            <Button>
                Retour à l'accueil
            </Button>
        </Link>
      </S.NotFoundBlock>
  </Container>
);

export default NotFound;