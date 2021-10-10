import React, {FC} from 'react';
import {Col, Row} from 'react-bootstrap';

const IndustryBenchmarks: FC = () => {
  return (
    <Row className='mx-0'>
      <Col xs={12}>
        <p className='section-title'>Internal Benchmarking</p>
        <ul className='points'>
          <li>
            SoftVessel provides its employees a free and friendly work environment and encourages them to learn and try
            new technologies.
          </li>
          <li>
            The company follows a flat organizational structure ensuring that all its internal stakeholders feel equally
            important and responsible for the performance of the company.
          </li>
        </ul>
        <br/>
        <p className='section-title'>External Benchmarking</p>
        <ol className='points'>
          <li>
            Rigorously Tested Products
            <ul className='points'>
              <li>
                SoftVessel includes a team of developers who enjoy what they do.
              </li>
              <li>
                The team always aims at delivering products with the highest quality that provide the best experience to
                its users, by following various testing methodologies throughout its development.
              </li>
            </ul>
          </li>
          <li>
            Scalable Software
            <ul className='points'>
              <li>
                Technologies used for the development and implementation of software keep changing everyday as new
                functionalities get added and some existing features are replaced.
              </li>
              <li>
                The SoftVessel team builds each of its products so as to make sure that it allows them to make changes
                and additions as well as debug problems in the future, without any hassle.
              </li>
            </ul>
          </li>
        </ol>
      </Col>
    </Row>
  );
}

export default IndustryBenchmarks;
