import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import OurTeam from "../components/OurTeam";

const Home: FC = () => {
  return (
    <Container className="home py-3" fluid>
      <OurTeam />
    </Container>
  );
}

export default Home;