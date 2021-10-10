import React, {FC} from 'react';
import {Accordion, Col, Row} from "react-bootstrap";
import CRM from "./CRM";
import Marketing from "./Marketing";
import SoftwareDevelopment from "./SoftwareDevelopment";

const BusinessProcesses: FC = () => {
  return (
    <Row className="mx-0">
      <Col className="px-0" xs={12}>
        <Accordion>
          <CRM/>
          <Marketing/>
          <SoftwareDevelopment/>
        </Accordion>
      </Col>
    </Row>
  );
}

export default BusinessProcesses;
