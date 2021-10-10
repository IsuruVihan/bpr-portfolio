import React, {FC} from 'react';
import {Col, Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import SoftvesselEmailImg from "../assets/images/SoftvesselEmailImg.jpeg";
import Introduction from "../components/SoftVessel/Introduction";
import CompanyMeeting from "../components/SoftVessel/CompanyMeeting";
import CompanyBackground from "../components/SoftVessel/CompanyBackground";
import BusinessProcesses from "../components/SoftVessel/BusinessProcesses/BusinessProcesses";
import IndustryBenchmarks from "../components/SoftVessel/IndustryBenchmarks";
import MethodsToImprove from "../components/SoftVessel/MethodsToImprove";

const SoftVessel: FC = () => {
  return (
    <Container className="softvessel">
      <Row className="mx-0" xs={12}>
        <Col className="px-0">
          <Tabs defaultActiveKey="Introduction" className="my-3">
            <Tab eventKey="Introduction" title="Introduction" className="px-3">
              <Introduction/>
            </Tab>
            <Tab eventKey="HowWeContacted" title="How we contacted them?" className="px-3 pb-5">
              <Image src={SoftvesselEmailImg} style={{width: '100%'}} />
            </Tab>
            <Tab eventKey="CompanyMeeting" title="Company Meeting" className="px-3 pb-5">
              <CompanyMeeting/>
            </Tab>
            <Tab eventKey="CompanyBackground" title="Company Background" className="px-3 pb-5">
              <CompanyBackground/>
            </Tab>
            <Tab eventKey="MethodsToImprove" title="Methods To Improve" className="px-3 pb-5">
              <MethodsToImprove/>
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

export default SoftVessel;
