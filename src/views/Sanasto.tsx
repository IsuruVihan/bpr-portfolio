import React, {FC} from 'react';
import {Col, Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import SanastoEmailImg from "../assets/images/SanastoEmail.png";
import Introduction from "../components/Sanasto/Introduction";
import CompanyMeeting from "../components/Sanasto/CompanyMeeting";
import CompanyBackground from "../components/Sanasto/CompanyBackground";
import BusinessProcesses from "../components/Sanasto/BusinessProcesses/BusinessProcesses";
import IndustryBenchmarks from "../components/Sanasto/IndustryBenchmarks";

const Sanasto: FC = () => {
  return (
    <Container className="sanasto">
      <Row className="mx-0" xs={12}>
        <Col className="px-0">
          <Tabs defaultActiveKey="Introduction" className="my-3">
            <Tab eventKey="Introduction" title="Introduction" className="px-3">
              <Introduction/>
            </Tab>
            <Tab eventKey="HowWeContacted" title="How we contacted them?" className="px-3 pb-5">
              <Image src={SanastoEmailImg} style={{width: '100%'}}/>
            </Tab>
            <Tab eventKey="CompanyMeeting" title="Company Meeting" className="px-3 pb-5">
              <CompanyMeeting/>
            </Tab>
            <Tab eventKey="CompanyBackground" title="Company Background" className="px-3 pb-5">
              <CompanyBackground/>
            </Tab>
            <Tab eventKey="IndustryBenchmarks" title="Industry Benchmarks" className="px-3 pb-5">
              <IndustryBenchmarks/>
            </Tab>
            <Tab eventKey="BusinessProcesses" title="Business Process" className="px-3 pb-5">
              <BusinessProcesses/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Sanasto;
