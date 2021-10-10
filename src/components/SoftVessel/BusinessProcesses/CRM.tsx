import React, {FC} from 'react';
import {Accordion, Col, Image, Nav, Row, Tab} from "react-bootstrap";
import SoftvesselCRMAsIn from "../../../assets/images/softvessel-crm-asin.jpg";
import SoftvesselCRMToBe from "../../../assets/images/softvessel-crm-tobe.jpg";

const CRM: FC = () => {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Customer Relationship Management</Accordion.Header>
      <Accordion.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">As-in Process</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">To-be Process</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">How to implement the solutions?</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Feasibility of the solution</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <ul className='points'>
                      <li>
                        Thanks to its high quality software products, SoftVessel manages to generate many leads through
                        its previous clients.
                      </li>
                      <br/>
                      <li>
                        However, in terms of customer relations, SoftVessel has limited communication with its clients.
                      </li>
                      <br/>
                      <li>
                        The team has not yet implemented any strategies to gather feedback from clients after completion
                        of a project.
                      </li>
                    </ul>
                    <br/>
                    <Image src={SoftvesselCRMAsIn} width='100%' alt='pic'/>
                    <a href={SoftvesselCRMAsIn}
                       download='SoftVessel-CRM-As-In.jpg'> Download
                      Here
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <ul className='points'>
                      <li>
                        To improve SoftVessel’s relationship with its customers and establish a long-term bond, we
                        recommend that the team constantly maintain contact with its current customer throughout the
                        development phase and afterwards (after deployment).
                      </li>
                      <br/>
                      <li>
                        We recommend that the team carry out a survey with each client after the completion of a project
                        and for those who recommend their service to others, can be rewarded with a small discount for
                        their next project.
                      </li>
                    </ul>
                    <br/>
                    <Image src={SoftvesselCRMToBe} width='100%' alt='pic'/>
                    <a href={SoftvesselCRMToBe}
                       download='Softvessel-CRM-To-Be.jpg'> Download
                      Here
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p className='points'>
                      During our interview with the Director of SoftVessel, we learnt that the company generates most of
                      its leads through recommendations and that is without investing any sort of effort on it. This
                      means that the company has the potential to build and maintain a strong customer base, which is
                      what a company needs to exist in a competitive industry.
                    </p>
                    <p className='points'>
                      As suggested above, we recommend that SoftVessel reach out to its previous clients who recommend
                      their service and provide a discount code for their next project as a token of appreciation. This
                      will benefit both the parties and help SoftVessel maintain its relationship with its customers.
                      The discount coupon can be sent to customers via an email as a code or as a document which the
                      client can use for verification next time they build a project with the company.
                    </p>
                    <p className='points'>
                      As described above surveys can be conducted for free using tools like Google Forms, Typeform, MS
                      Forms etc. Most of these tools are integrated with basic analytical tools that will help the team
                      evaluate the data gathered and obtain valuable insights.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <p className='section-title'>Technical Feasibility</p>
                    <ul className='points'>
                      <li>
                        Changes suggested for this process are technically feasible as the team already possesses most
                        of the technology.
                      </li>
                      <li>
                        However, the team will have to implement a local or a cloud based storage media to store data
                        gathered from clients
                      </li>
                      <li>
                        These data can be very useful for the company to reflect on its performance and improve its
                        customer service.
                      </li>
                    </ul>
                    <br/>
                    <p className='section-title'>Economical Feasibility</p>
                    <ul className='points'>
                      <li>
                        It does not cost the team to conduct surveys or gather feedback as there are many tools that
                        facilitate it for free.
                      </li>
                      <li>
                        The discount method for recommendees may affect the profit from future projects from the
                        recommender.
                      </li>
                      <li>
                        Nevertheless, this will be paid off in terms of customer loyalty that benefits the long-run.
                      </li>
                    </ul>
                    <br/>
                    <p className='section-title'>Operational Feasibility</p>
                    <ul className='points'>
                      <li>
                        Conducting surveys and collecting feedback can easily be implemented with Google forms.
                      </li>
                      <li>
                        This is free and helps organize the data easily with SpreadSheets.
                      </li>
                      <li>
                        The team may use emails to communicate this information with the clients.
                      </li>
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default CRM;
