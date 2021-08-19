import React, {FC} from 'react';
import {Accordion, Alert, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import ProductServicesCard from "../components/ProductServicesCard";
import ReactLogo from "../assets/images/react-logo.png";
import EnterpriseApp from "../assets/images/enterprise-application.png";
import CloudServices from "../assets/images/cloud-services.jpg";
import Saas from "../assets/images/saas.png";
import MobileApps from "../assets/images/moblie-apps.jpg";
import Ecommerce from "../assets/images/ecommerce.jpg";

const SoftVessel: FC = () => {
  const titles: string[] = [
    "React Web Applications",
    "Enterprise Applications",
    "Cloud Services",
    "SaaS Platform Development",
    "Mobile Application Development",
    "Ecommerce Websites"
  ];

  const images: string[] = [ReactLogo, EnterpriseApp, CloudServices, Saas, MobileApps, Ecommerce];

  return (
    <Container className="softvessel">
      <Row className="mx-0" xs={12}>
        <Col className="px-0">
          <Tabs defaultActiveKey="Introduction" className="my-3">
            <Tab eventKey="Introduction" title="Introduction" className="px-3">
              <Row className="mx-0">
                <Col className="py-2 title" xs={12}>
                  SoftVessel
                </Col>
                <Col className="text-justify content" xs={12}>
                  Softvessel (Pvt) Ltd is a scaled software engineering service provider who delivers high income
                  generating software products that enhance user experience. Softvessel has been delivering high quality
                  software solutions to the local as well as foreign market for over 8 years.
                  <br />
                  Their services range from Mobile/Web applications, to Enterprise applications, Quality assurance,
                  to cloud services and more. With a team of well trained developers, Softvessel applies agile
                  development practices and follows defined standards and practices throughout each software project
                  with the aim of delivering long-term and sustainable software products.
                </Col>
                <Col className="py-4" xs={12}>
                  <Accordion defaultActiveKey="products-and-services">
                    <Accordion.Item eventKey="products-and-services">
                      <Accordion.Header>
                        Products and Services
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row className="mx-0">
                          <ProductServicesCard
                            title={"React Web Applications"}
                            imgSrc={ReactLogo}
                          />
                          <ProductServicesCard
                            title={"Enterprise Applications"}
                            imgSrc={EnterpriseApp}
                          />
                          <ProductServicesCard
                            title={"Cloud Services"}
                            imgSrc={CloudServices}
                          />
                          <ProductServicesCard
                            title={"SaaS Platform Development"}
                            imgSrc={Saas}
                          />
                          <ProductServicesCard
                            title={"Mobile Application Development"}
                            imgSrc={MobileApps}
                          />
                          <ProductServicesCard
                            title={"Ecommerce Websites"}
                            imgSrc={Ecommerce}
                          />
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="processes">
                      <Accordion.Header>
                        Processes
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row className="mx-0">
                          <Col className="content pb-3" md={8}>
                            SoftVessel has not limited their services in providing software solutions to its business
                            clients but also has committed in building a highly creative and skilled set of Software
                            Engineers by conducting highly demanded series of Training programs for undergraduates and
                            software engineers who seek to improve their coding skills in an agile development
                            environment.
                            <br />
                            Softvessel is a rising company in the software industry in Sri Lanka with great potential.
                            Therefore, for our study on Business Process Engineering, we will be studying the three main
                            business processes mentioned below, of Softvessel, with the aim of providing them the best
                            and most efficient points of improvements for their existing processes.
                          </Col>
                          <Col md={4}>
                            <Alert variant="info" className="text-center">
                              Software Development
                            </Alert>
                            <Alert variant="info" className="text-center">
                              Marketing
                            </Alert>
                            <Alert variant="info" className="text-center">
                              Customer Relations
                            </Alert>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default SoftVessel;