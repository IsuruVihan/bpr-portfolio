import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import OurTeam from "../components/OurTeam";
import Progress from "../components/progress/Progress";

const Home: FC = () => {
  return (
    <Container className="home py-3" fluid>
      <OurTeam />
      <Progress />
    </Container>
  );
}

export default Home;