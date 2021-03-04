import {React,lazy} from 'react';
import { Link } from 'react-router-dom';
const Container = lazy(() => import("../../common/Container"));
const NotFound = () => (
  <Container>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </Container>
);

export default NotFound;