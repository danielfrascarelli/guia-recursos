import { Container } from "react-bootstrap";
import check from '../../assets/images/check.svg'

export default function Tips() {
  return (
    <Container fluid className="p-0">
      <p>
        <img src={check} className="logo react" alt="React logo" />
        De ser posible recurras a hacer las averiguaciones correspondientes acompañada.
      </p>
      <p>
        <img src={check} className="logo react" alt="React logo" />
        Llevar con vos una libreta dónde puedas ir registrando información importante.
      </p>
    </Container>
  );
}
