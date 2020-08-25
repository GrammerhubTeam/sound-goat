import React from "react";
import { Row, Container, Col, Jumbotron } from "react-bootstrap";
import css from "./AboutUs.scss";

export default () => (
  <React.Fragment>
    <section className={`${css.paddingtop}`}>
      <Container fluid className={`${css.padding}`}>
        <Row>
          <Col lg={4} sm={12}>
            <div className={`${css.wrapper}mx-auto text-center`}>
              <h3 className={`${css.title}`}>We are Grammers</h3>
            </div>
          </Col>

          <Col lg={4} sm={12}>
            <div className={`${css.wrappers}mx-auto text-center`}>
              <h3 className={`${css.title}`}>About Us</h3>
              <p className={`${css.aboutsection}`}>
                We are Grammers. Founded in 2019 our goal is give new developers a team environment to sharpen their skills in a collaborative environment while working on real-world team projects. Our mission is for all our members to be confident in any future interview or jobs. 
              </p>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className={`${css.ginny}`}>
              <img
                className={`${css.photo}`}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Container fluid className={`${css.padding}`}>
      <Jumbotron fluid className={`${css.jumbo}`}>
        <h4 className={`${css.subhead}`}>Grammerhub</h4>
      </Jumbotron>
    </Container>
  </React.Fragment>
);
