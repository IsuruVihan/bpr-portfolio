import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import OurTeam from "../components/OurTeam";
import Progress from "../components/progress/Progress";
import Contribution from "../components/Contribution";

const Home: FC = () => {
  return (
    <Container className="home py-3" fluid>
      <OurTeam />
      <Contribution/>
      <Progress />
    </Container>
  );
}

export default Home;
