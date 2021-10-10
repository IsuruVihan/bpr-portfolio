import React, {FC} from 'react';
import {Row, Col} from "react-bootstrap";

const Footer: FC = () => {
  return (
    <Row className='footer mx-0'>
      <Col className='column px-0 py-4' xs={12}>
        IS2114 | Business Process Re-engineering
      </Col>
    </Row>
  );
}

export default Footer;
