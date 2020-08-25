import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import css from "./Footer.scss";

const Footer = () => {
  return (
    <div className={css.footer}>
      <Container>
        <Row>
          <Col sm="5">
            <div className={css.footerLogo}>
              <img style={{ width: '50px' }} src="../static/grammerhubLogo.png" alt="Footer logo" />
              <p>
                Do you remember what you did last summer? Because I do :) 
              </p>
            </div>
          </Col>
          <Col sm={{ span: 4, offset: 3 }}>
            <div className={css.footerNav}>
              <ul>
                <li>
                  <Link href="/home" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" passHref>
                    <a>About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
