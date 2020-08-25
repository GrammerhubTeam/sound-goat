import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import css from "../assets/css/contact/page-title.scss";
import Link from "next/link";

class BreadCrumb extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={`${css.pageTitle}`}
          style={{
            backgroundImage: "url('../pages/assets/images/bcg/title-page.jpg')"
          }}
        >
          <Container>
            <h1>Keep Contact</h1>
            <span>Feel Free To Expand this component</span>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact</li>
            </ul>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default BreadCrumb;
