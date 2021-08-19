import React, {FC} from 'react';
import {Accordion, Alert, Col, Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import ProductServicesCard from "../components/ProductServicesCard";
import AccuCheckLogo from "../assets/images/accucheck.webp";
import OriflameLogo from "../assets/images/oriflame.jpg";
import VaselineLogo from "../assets/images/vaseline.webp";
import OlayLogo from "../assets/images/olay.webp";
import RevlonLogo from "../assets/images/revlon.jpg";
import SogoLogo from "../assets/images/sogo.jpg";
import SanastoEmailImg from "../assets/images/SanastoEmail.png";

const Sanasto: FC = () => {
  const productCardContent = [
    {
      title: "Oriflame",
      image: OriflameLogo
    },
    {
      title: "Vaseline",
      image: VaselineLogo
    },
    {
      title: "Olay",
      image: OlayLogo
    },
    {
      title: "Revlon",
      image: RevlonLogo
    },
    {
      title: "Accu-Check",
      image: AccuCheckLogo
    },
    {
      title: "SOGO",
      image: SogoLogo
    }
  ];

  return (
    <Container className="sanasto">
      <Row className="mx-0" xs={12}>
        <Col className="px-0">
          <Tabs defaultActiveKey="Introduction" className="my-3">
            <Tab eventKey="Introduction" title="Introduction" className="px-3">
              <Row className="mx-0">
                <Col className="py-2 title" xs={12}>
                  Sanasto (pvt) Ltd
                </Col>
                <Col className="text-justify content" xs={12}>
                  Sanasto (pvt) Ltd is a small scale procurement company that distributes branded skincare products,
                  cosmetics and medical products to local retail outlets. They are currently having operations within
                  outlets in a couple of provinces  and have the capacity to expand.
                </Col>
                <Col className="py-4" xs={12}>
                  <Accordion defaultActiveKey="products-and-services">
                    <Accordion.Item eventKey="products-and-services">
                      <Accordion.Header>
                        Products and Services
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row className="mx-0">
                          {
                            productCardContent.map((card) => {
                              return <ProductServicesCard
                                title={card.title}
                                imgSrc={card.image}
                              />;
                            })
                          }
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
                            In this study we will be analysing the below mentioned three main business processes of
                            Sanasto pvt ltd to provide the best possible solutions to enhance the functionality within
                            the company.
                          </Col>
                          <Col md={4}>
                            <Alert variant="info" className="text-center">
                              Customer relationships management
                            </Alert>
                            <Alert variant="info" className="text-center">
                              Procurement
                            </Alert>
                            <Alert variant="info" className="text-center">
                              Inventory management
                            </Alert>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="HowWeContacted" title="How we contacted them?" className="px-3 pb-5">
              <Image src={SanastoEmailImg} style={{width: '100%'}} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Sanasto;