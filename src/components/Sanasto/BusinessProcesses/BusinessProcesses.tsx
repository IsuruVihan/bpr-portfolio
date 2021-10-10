import React, {FC} from 'react';
import {Accordion, Col, Row} from "react-bootstrap";
import CRM from "./CRM";
import Procurement from "./Procurement";
import InventoryManagement from "./InventoryManagement";

const BusinessProcesses: FC = () => {
  return (
    <Row className="mx-0">
      <Col className="px-0" xs={12}>
        <Accordion>
          <CRM/>
          <Procurement/>
          <InventoryManagement/>
        </Accordion>
      </Col>
    </Row>
  );
}

export default BusinessProcesses;
