import React, {FC} from 'react';
import {Card, Col} from "react-bootstrap";

type TeamMemberCardProps = {
  imgSrc: string,
  name: string,
  indexNo: string
};

const TeamMemberCard: FC<TeamMemberCardProps> = (props) => {
  const {imgSrc, name, indexNo} = props;

  return (
    <Col className="px-0 mx-1 py-1" lg={2} md={4} sm={12} xs={12}>
      <Card className="text-center p-2" border="secondary">
        <Card.Img variant="top" className="image" src={imgSrc} style={{width: "80%", alignSelf: 'center'}} />
        <Card.Body>
          <Card.Text><b>{name}</b></Card.Text>
          <Card.Text>{indexNo}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TeamMemberCard;