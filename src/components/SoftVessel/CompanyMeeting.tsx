import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

const CompanyMeeting: FC = () => {
  return (
    <Row className='mx-0'>
      <Col className='px-0 video' xs={12}>
        <ReactPlayer
          url='https://youtu.be/oJxTwD4uDOI'
          controls={true}
          light={true}
          height='50vh'
        />
      </Col>
    </Row>
  );
}

export default CompanyMeeting;
