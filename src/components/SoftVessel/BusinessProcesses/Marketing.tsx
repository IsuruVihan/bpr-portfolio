import React, {FC} from 'react';
import {Accordion, Col, Image, Nav, Row, Tab} from "react-bootstrap";
import SoftvesselMarketingAsIn from "../../../assets/images/softvessel-marketing-asin.png";
import SoftvesselMarketingToBe from "../../../assets/images/softvessel-marketing-tobe.png";

const Marketing: FC = () => {
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Marketing</Accordion.Header>
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
                <Tab.Pane eventKey="first">
                  <ul className='points'>
                    <li>
                      Currently, SoftVessel generates most of its leads through recommendations by previous customers,
                      organic leads through the Website, LinkedIn & Facebook and paid advertising through Google
                      Advertising.
                    </li>
                    <br/>
                    <li>
                      The only bottleneck that they face in their marketing process is reaching the right customer to
                      market the right product.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SoftvesselMarketingAsIn} width='100%' alt='pic'/>
                  <a href={SoftvesselMarketingAsIn} download='Softvessel-Marketing-As-In.jpg'> Download
                    Here </a>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ul className='points'>
                    <li>
                      SoftVessel could expand its customer base further by integrating new advertising techniques,
                      partnering up with Educational institutes, conducting webinars and by providing free tools and
                      trials of their products.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SoftvesselMarketingToBe} width='100%' alt='pic'/>
                  <a href={SoftvesselMarketingToBe} download='Softvessel-Marketing-To-Be.jpg'> Download
                    Here </a>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className='points'>
                    We observed that SoftVessel does not carry out much advertising and promotions on its Facebook page.
                    Utilizing Facebook to reach more of the target audience. (boosting posts, Facebook advertising) will
                    help the company build brand awareness.
                  </p>
                  <p className='points'>
                    In addition, partnering up with universities to conduct awareness programs regarding the industry
                    and its expectectation will help SoftVessel capture great talents for its workforce and promote the
                    training programs. These training programs and other products developed by the company can be
                    promoted in technical communities on social media platforms.
                  </p>
                  <p className='points'>
                    Conducting webinars for their target clients to create awareness of their in-house products and
                    other details of the software development process can help generate more leads.
                  </p>
                  <p className='points'>
                    SoftVessel can also provide free tools and trials of their products for their customers who can use
                    them to get a complete idea of the features and functionalities before purchasing.
                  </p>
                  <p className='points'>
                    Since our suggested solutions will help the company to pitch the right product to the right
                    customers, these initiatives will result in attracting more customers to the company. The awareness
                    webinars will result in building trust between the company and the clients about the quality of the
                    products and services of the company which will assist other business processes as well.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p className='section-title'>Technical Feasibility</p>
                  <ul className='points'>
                    <li>
                      Since SoftVessel is a software development firm they have the required technical knowledge,
                      technical resources and human resources within the company.
                    </li>
                    <li>
                      Therefore the technical aspects of implementing the suggested solutions are feasible for the
                      selected company.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Economical Feasibility</p>
                  <ul className='points'>
                    <li>
                      Some of the solutions such as partnering up with universities and conducting webinars do not
                      consume high costs.
                    </li>
                    <li>
                      As the webinars can be conducted via virtual environments it will be cost-effective.
                    </li>
                    <li>
                      Advertising on social media and boosting posts will have an affordable cost to begin with. This
                      proves that the economical aspects of the suggested solutions are feasible.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Operational Feasibility</p>
                  <ul className='points'>
                    <li>
                      Suggested solutions will enhance the functionality of the marketing process by reaching and
                      covering more of the target audience for each product and service of the company.
                    </li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Marketing;
