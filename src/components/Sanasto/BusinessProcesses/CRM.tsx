import React, {FC} from 'react';
import {Accordion, Col, Image, Nav, Row, Tab} from "react-bootstrap";
import SanastoCRMAsIn from "../../../assets/images/sanasto-crm-asin.png";
import SanastoCRMToBe from "../../../assets/images/sanasto-crm-tobe.png";

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
                        The customer base of the selected company Sanasto consists of medium and large scale pharmacies within their authorized distribution areas.
                      </li>
                      <br/>
                      <li>
                        The main issue in handling the customers is collecting the credits within the given period of time of 45 days.
                      </li>
                      <br/>
                      <li>
                        As some of the customers exceed the time limit given for the payments the company has to contact the pharmacies frequently via telephone to give reminders.
                      </li>
                      <br/>
                      <li>
                        Further, there are some customers that Sanasto had to blacklist because of the issues aroused in collecting credits.
                      </li>
                      <br/>
                      <li>
                        Currently, Sanasto does not have a proper procedure to collect customer feedback which is the main element in customer relationship management.
                      </li>
                    </ul>
                    <br/>
                    <Image src={SanastoCRMAsIn} width='100%' alt='pic'/>
                    <a href={SanastoCRMAsIn}
                       download='Sanasto-CRM-As-In.jpg'> Download
                      Here
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <ul className='points'>
                      <li>
                        As mentioned in the previous processes our main suggestion is to implement a system to address these issues and to enhance the functionality of Customer Relationship Management.
                      </li>
                      <br/>
                      <li>
                        In this system, the features to manage CRM processes can be implemented as a web-based or as a mobile application which is far more approachable.
                      </li>
                      <br/>
                      <li>
                        Using the system customers can be provided with features to create separate accounts for their pharmacies.
                      </li>
                      <br/>
                      <li>
                        It will help to implement a proper computerized customer database, an effective monitoring process on credit collecting, and for the customers, it will help to improve the efficiency of ordering processes and order tracking processes.
                      </li>
                      <br/>
                      <li>
                        Notifying the customer about the time limit to complete the payments can be automated and effective using this system.
                      </li>
                      <br/>
                      <li>
                        In-app notifications, SMS, and emails can be used to send these notices.
                      </li>
                      <br/>
                      <li>
                        Surveys can be included in the system to be completed by the customer once in 6 months, to collect the customer feedback on the service provided by Sanasto.
                      </li>
                    </ul>
                    <br/>
                    <Image src={SanastoCRMToBe} width='100%' alt='pic'/>
                    <a href={SanastoCRMToBe}
                       download='Sanasto-CRM-To-Be.jpg'> Download
                      Here
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p className='points'>
                      Using the system customers can be provided with features to create separate accounts for their pharmacies.
                    </p>
                    <p className='points'>
                      It will help to implement a proper computerized customer database, an effective monitoring process on credit collecting, and for the customers, it will help to improve the efficiency of ordering processes and order tracking processes.
                    </p>
                    <p className='points'>
                      Furthermore, automated notifying processes will align with the procurement process to make its tasks efficiently. In-app notifications, SMS, and emails can be used to send notifications regarding payments due.
                    </p>
                    <p className='points'>
                      Surveys can be included in the system to be completed by the customer once in 6 months, to collect the customer feedback on the service provided by Sanasto. The suggested solutions will help customers to stay updated and to track their orders, which will improve the functionality of the ordering process as well.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <p className='section-title'>Technical Feasibility</p>
                    <ul className='points'>
                      <li>
                        Since Sanasto doesn’t have in-house technical resources or human resources to implement an automated system, the required service to develop the system can be outsourced and they can consult experts in a software development firm.
                      </li>
                    </ul>
                    <br/>
                    <p className='section-title'>Economical Feasibility</p>
                    <ul className='points'>
                      <li>
                        The initial cost of developing a system is high but the benefits that can be gained through the system and the way it enhances the functionality of the entire company proves that moving for a software system is worthy and would be cost-effective  in the future.
                      </li>
                    </ul>
                    <br/>
                    <p className='section-title'>Operational Feasibility</p>
                    <ul className='points'>
                      <li>
                        Since the selected company is currently following a manual process to complete the tasks in customer relationship management, having an information system improves the efficiency considerably.
                      </li>
                      <li>
                        It will reduce the time consumption of the process while providing a correct and robust service for the customers.
                      </li>
                    </ul>
                    {/*<br/>*/}
                    {/*<p className='section-title'>Legal and Ethical Feasibility</p>*/}
                    {/*<ul className='points'>*/}
                    {/*  <li>*/}

                    {/*  </li>*/}
                    {/*</ul>*/}
                    {/*<br/>*/}
                    {/*<p className='section-title'>Schedule Feasibility</p>*/}
                    {/*<ul className='points'>*/}
                    {/*  <li>*/}

                    {/*  </li>*/}
                    {/*</ul>*/}
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
