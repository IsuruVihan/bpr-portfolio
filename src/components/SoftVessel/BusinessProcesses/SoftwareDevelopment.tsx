import React, {FC} from 'react';
import {Accordion, Col, Image, Nav, Row, Tab} from "react-bootstrap";
import SoftvesselSoftwareDevelopmentAsIn from "../../../assets/images/softvessel-sd-asin.png";
import SoftvesselSoftwareDevelopmentToBe from "../../../assets/images/softvessel-sd-tobe.jpg";

const SoftwareDevelopment: FC = () => {
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Software Development</Accordion.Header>
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
                      Being a team that follows the best-practices in all their tasks, SoftVessel does not seem to have
                      any major loopholes in the process.
                    </li>
                    <br/>
                    <li>
                      However, it was mentioned during the interview that the clients are often ‘vague’ when describing
                      their requirements.
                    </li>
                    <br/>
                    <li>
                      It was also mentioned that the senior developers in the team sometimes find it challenging to
                      convey the importance of following standard concepts, to junior developers.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SoftvesselSoftwareDevelopmentAsIn} width='100%' alt='pic'/>
                  <a href={SoftvesselSoftwareDevelopmentAsIn}
                     download='SoftVessel-Software-Development-As-In.jpg'> Download
                    Here
                  </a>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ul className='points'>
                    <li>
                      To address the above mentioned issues, we suggest that the team hold a training session where all
                      the developers meet to discuss a certain coding standard, its importance and the usage.
                    </li>
                    <br/>
                    <li>
                      During the requirement gathering phase, we recommend that they provide a few prototypes to the
                      client to grasp their exact needs.
                    </li>
                    <br/>
                    <li>
                      Additionally, we suggest that the team maintains a consistent communication with the client by
                      reporting the progress.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SoftvesselSoftwareDevelopmentToBe} width='100%' alt='pic'/>
                  <a href={SoftvesselSoftwareDevelopmentToBe}
                     download='SoftVessel-Software-Development-To-Be.jpg'> Download
                    Here
                  </a>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className='points'>
                    The team can allow the client to use a prototype (not for official business purposes) and collect
                    the client’s feedback as to whether it caters to their requirements.
                  </p>
                  <p className='points'>
                    If the prototype does not satisfy the clients needs, you can either discard the prototype and use a
                    better solution or upgrade it to suit the requirements. Once the scope of the project is finalized,
                    the team can proceed with the development easily.
                  </p>
                  <p className='points'>
                    Regarding the training/discussion sessions, the team can conduct it once a week and the scrum master
                    can schedule a meeting for the developers to select a certain coding principle and discuss its
                    importance with the team. If possible, the company can invite professionals in the industry to join
                    the session and provide insights regarding the best practices to be used in developing an efficient
                    & reliable application.
                  </p>
                  <p className='points'>
                    To quench the curiosity of impatient clients, the company can assign the product owner responsible
                    for providing a short report to the client following each review meeting. This could be done via
                    email, phone calls, Whatsapp/Messenger/Telegram messages or any other convenient media.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p className='section-title'>Technical Feasibility</p>
                  <ul className='points'>
                    <li>
                      The company will be required to use any prototyping tools to design prototypes of the application
                      if they do not possess the tools already.
                    </li>
                    <li>
                      If a similar system has already been designed by the company before or is available in the market,
                      the team can provide that system, as a prototype, to the client.
                    </li>
                    <li>
                      The technologies related to other suggestions are already available and in use within SoftVessel
                      as per our study.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Economical Feasibility</p>
                  <ul className='points'>
                    <li>
                      Some prototypes available in the market may require a payment, and the charges may vary depending
                      on the application.
                    </li>
                    <li>
                      However, there are also free applications available and the company can always create its own
                      prototype with freely available prototyping tools such as Figma and Adobe XD.
                    </li>
                    <li>
                      Organizing discussion/training sessions for the development team and providing regular updates to
                      clients can be done with no cost.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Operational Feasibility</p>
                  <ul className='points'>
                    <li>
                      Although the prototyping process may take some additional time & effort,it’s outcome will help the
                      developers find out the clients’ requirements sooner.
                    </li>
                    <li>
                      Scheduling a discussion meeting once a week could be feasible and can be conducted either
                      physically or virtually based on their convenience.
                    </li>
                    <li>
                      Reporting the progress can be done using any mode of communication that seems convenient and it
                      can be kept short and detailed to assure the client that the project is making progress.
                    </li>
                    <li>
                      This helps the clients, specially those who are always in a hurry, to stay patient as their
                      project is being completed bit-by-bit.
                    </li>
                  </ul>
                  <br/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default SoftwareDevelopment;
