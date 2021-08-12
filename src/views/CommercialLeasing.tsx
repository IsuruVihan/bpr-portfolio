import React, {FC} from 'react';
import {Accordion, Alert, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import ProductServicesCard from "../components/ProductServicesCard";
import FixedDeposits from "../assets/images/fixed-deposits.png";
import ATM from "../assets/images/atm.png";
import Factoring from "../assets/images/factoring.png";
import InternetBanking from "../assets/images/internet-banking.png";
import IslamicFinance from "../assets/images/islamic-finance.png";
import MicroFinance from "../assets/images/microfinance.png";
import SavingsAndLeasing from "../assets/images/savings-and-leasing.png";

const CommercialLeasing: FC = () => {
  return (
    <Container className="commercial-leasing">
      <Row className="mx-0" xs={12}>
        <Col className="px-0">
          <Tabs defaultActiveKey="Introduction" className="my-3">
            <Tab eventKey="Introduction" title="Introduction" className="px-3">
              <Row className="mx-0">
                <Col className="py-2 title" xs={12}>
                  Commercial Leasing and Finance PLC
                </Col>
                <Col className="text-justify content" xs={12}>
                  Commercial Leasing & Finance PLC (CLC) is one of Sri Lanka’s leading fully-fledged non-banking
                  financial service providers with over 30 years of excellence within the industry. Commercial Leasing
                  & Finance network expands to 68 branches, providing a broad portfolio of financial products and
                  services, allowing the island-wide customers to reach their financial inspirations.
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
                            title={"Fixed deposits"}
                            imgSrc={FixedDeposits}
                          />
                          <ProductServicesCard
                            title={"Savings and Leasing"}
                            imgSrc={SavingsAndLeasing}
                          />
                          <ProductServicesCard
                            title={"Islamic Finance"}
                            imgSrc={IslamicFinance}
                          />
                          <ProductServicesCard
                            title={"Factoring"}
                            imgSrc={Factoring}
                          />
                          <ProductServicesCard
                            title={"Micro Finance"}
                            imgSrc={MicroFinance}
                          />
                          <ProductServicesCard
                            title={"Internet Banking"}
                            imgSrc={InternetBanking}
                          />
                          <ProductServicesCard
                            title={"ATM Network"}
                            imgSrc={ATM}
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
                          <Col className="content" xs={8}>
                            Commercial Leasing & Finance PLC (CLC) - Kandy Metro also known as a factoring branch is
                            the main touch point for the customers in Kandy. For this study, we will be studying the
                            three main processes (mentioned below) of this branch and suggesting the most efficient
                            solutions to improve its performance.
                          </Col>
                          <Col xs={4}>
                            <Alert variant="info" className="text-center">
                              Customer Relations
                            </Alert>
                            <Alert variant="info" className="text-center">
                              Marketing
                            </Alert>
                            <Alert variant="info" className="text-center">
                              Backoffice (File processing)
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

export default CommercialLeasing;