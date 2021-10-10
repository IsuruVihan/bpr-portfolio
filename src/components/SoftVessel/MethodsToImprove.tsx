import React, {FC} from 'react';
import {Row, Col} from 'react-bootstrap';

const MethodsToImprove: FC = () => {
  return (
    <Row className='mx-0'>
      <Col xs={12}>
        <p className='section-title'>Software Development</p>
        <ul className='points'>
          <li>
            The developers at SoftVessel are trained to build software that are durable and scalable. The teams
            always follow SOLID principles during development to make their products more understandable, flexible,
            and maintainable.
          </li>
          <li>
            SoftVessel also follows pre-defined testing methodologies throughout the development of the project to
            ensure that the output meets the expected standards before it reaches the end-user.
          </li>
          <li>
            Applies agile development practices where all the software engineers follow a system defined by
            SoftVessel and 'no one is above the system'.
          </li>
        </ul>
        <br/>
        <p className='section-title'>Customer Relations</p>
        <ul className='points'>
          <li>
            Provide free consultations for clients to develop a plan based on their needs and clear doubts.
          </li>
          <li>
            Involving the client throughout the lifespan of the project, with demonstration meetings, to ensure that
            the product meets their requirements.
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default MethodsToImprove;
