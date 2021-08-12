import React, {FC, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NavLink from "./Link";

const NavigationBar: FC = () => {
  const [clickedHome, setClickedHome] = useState<boolean>(true);
  const [clickedSV, setClickedSV] = useState<boolean>(false);
  const [clickedCL, setClickedCL] = useState<boolean>(false);

  const handleOnClickHome = () => {
    setClickedHome(true);
    setClickedCL(false);
    setClickedSV(false);
  }

  const handleOnClickSV = () => {
    setClickedHome(false);
    setClickedCL(false);
    setClickedSV(true);
  }

  const handleOnClickCL = () => {
    setClickedHome(false);
    setClickedCL(true);
    setClickedSV(false);
  }

  return (
    <Container className="navigation-bar py-3 px-5" fluid>
      <Row className="mx-0">
        <Col className="px-0 text-xl-start text-center heading" xl={6} sm={12} xs={12}>
          <label className="heading-text">BPR Portfolio</label>
        </Col>
        <Col className="px-0">
          <Row className="mx-0 justify-content-xl-end justify-content-evenly links">
            <NavLink
              clicked={clickedHome}
              link={"/"}
              handleOnClick={handleOnClickHome}
              text={"Home"}
            />
            <NavLink
              clicked={clickedCL}
              link={"/commercial-leasing"}
              handleOnClick={handleOnClickCL}
              text={"Com-Leasing"}
            />
            <NavLink
              clicked={clickedSV}
              link={"/softvessel"}
              handleOnClick={handleOnClickSV}
              text={"SoftVessel"}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NavigationBar;