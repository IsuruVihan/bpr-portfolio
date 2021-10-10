import React, {FC} from 'react';
import {Col, Row} from 'react-bootstrap';

const IndustryBenchmarks: FC = () => {
  return (
    <Row className='mx-0'>
      <Col xs={12}>
        <p className='section-title'>Internal Benchmarking</p>
        <ul className='points'>
          <li>
            As an organization, segregation of duties for employees is quite important because it will help employees to
            identify their responsibilities and perform actions with much satisfaction. Therefore proper segregation of
            duties can be considered as an internal benchmark of the procurement organization.
          </li>
          <li>
            There are Warehouse policies and standards that need to be adhered to so that products are not damaged and
            any espionage does not take place. Therefore organizations should provide necessary knowledge and training
            for all the employees regarding the Warehouse Management Policies and standards.
          </li>
          <li>
            Another internal benchmark is the HR practices that need to be followed. Since most of the small scale
            procurement businesses like Senesto is managed by the owner himself, therefore an established set of HR
            practices should be implemented within the company so that all employees will receive fair and equal
            treatment For example internally the company can set an OT Policy and Leave policy for employees.
          </li>
        </ul>
        <br/>
        <p className='section-title'>External Benchmarking</p>
        <ul className='points'>
          <li>
            In the industry, ERP Systems are widely used to manage the operations of the companies. Using these
            automated systems will allow companies to manage operations in a highly efficient and productive way and
            leads to massive cost reductions.
          </li>
          <li>
            In the procurement industry, Distribution agencies get into contracts with the importers to handle the
            distribution network region wise.
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default IndustryBenchmarks;
