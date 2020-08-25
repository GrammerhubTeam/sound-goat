import React from "react";
import Link from "next/link";

import { Container, Row, Col, Button } from "react-bootstrap";
import css from "./Hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className={`${css.h100}`}>
          <div className={css.bgOverlay}></div>
          <div className={css.displayTable}>
            <div className={css.displayTableCell}>
              <Container>
                <Row>
                  <Col className="text-white text-center" lg={{ size: 8 }}>
                    <div className={css.heroMain}>
                      <h4 className={css.clubTitle}>Grammerhub</h4>
                      <h1 className={css.clubSlogan}>
                        Live. Collaborative. Coding.
                      </h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Hero;