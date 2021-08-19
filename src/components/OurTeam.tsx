import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import TeamMemberCard from "./TeamMemberCard";
import AzmaPic from "../assets/images/azma.jpeg";
import AvishkaPic from "../assets/images/avishka.jpg";
import IsuruPic from "../assets/images/isuru.jpg";
import NethminiPic from "../assets/images/nethmini.jpg";

const OurTeam: FC = () => {
  const memberDetails = [
    {
      name: "F. A. Imtiaz",
      image: AzmaPic,
      indexNo: "19020368"
    },
    {
      name: "S. A. Hettiarachchi",
      image: AvishkaPic,
      indexNo: "19020341"
    },
    {
      name: "B. A. I. V. Harischandra",
      image: IsuruPic,
      indexNo: "19020333"
    },
    {
      name: "P. A. N. P. Nandadewa",
      image: NethminiPic,
      indexNo: "19020491"
    }
  ];

  return (
    <Row className="mx-0 my-5 py-5 our-team justify-content-center">
      <Col className="px-0 pb-3 title text-center" xs={12}>
        Our Team
      </Col>
      {
        memberDetails.map((member) => {
          return (
            <TeamMemberCard
              imgSrc={member.image}
              name={member.name}
              indexNo={member.indexNo}
            />
          );
        })
      }
    </Row>
  );
}

export default OurTeam;