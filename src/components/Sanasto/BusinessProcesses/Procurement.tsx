import React, {FC} from 'react';
import {Accordion, Col, Image, Nav, Row, Tab} from "react-bootstrap";
import SanastoProcurementAsIn from "../../../assets/images/sanasto-procurement-asin.jpg";
import SanastoProcurementToBe from "../../../assets/images/sanasto-procurement-tobe.jpg";

const Procurement: FC = () => {
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
                      In this process, the distribution company focuses on distributing the Products of the importer on
                      time in the retail pharmacies, Cosmetics shops in the area they have agreed.
                    </li>
                    <br/>
                    <li>
                      Currently, there are three distribution vehicles distributing the product items in the areas of
                      Balangoda, Ratnapura Eheliyagoda, Sooriyawewa.
                    </li>
                    <br/>
                    <li>
                      This process is initiated from the customer end when a customer places an order for product items,
                      after checking the inventory if the available company confirms the order.
                    </li>
                    <br/>
                    <li>
                      Then the order is manually processed.
                    </li>
                    <br/>
                    <li>
                      Then the Invoices and documentation are prepared.
                    </li>
                    <br/>
                    <li>
                      Then the orders that are supposed to go in the same distribution vehicle are loaded into each
                      respective vehicle.
                    </li>
                    <br/>
                    <li>
                      Then once the orders are loaded into the distribution vehicles then according to the availability
                      a driver is assigned to each of the distribution trucks and the company is informed requesting a
                      Sales Representative.
                    </li>
                    <br/>
                    <li>
                      When the customers receive the goods, then the documentations (Invoices and Item Details) are
                      handed over to the customers.
                    </li>
                    <br/>
                    <li>
                      Customers will be given a credit period of 45 days generally and advanced payment is received at
                      the moment of unloading the products.
                    </li>
                    <br/>
                    <li>
                      Sanasto currently faces difficulty in keeping track of Return products in a more efficient way.
                    </li>
                    <br/>
                    <li>
                      The current process is when products are returned by the customers, the owner and the support
                      staff have to manually go through the process to accept the returned products considering their
                      batch numbers.
                    </li>
                    <br/>
                    <li>
                      Senesto do not own their own fleet of vehicles but use the Importers vehicles for the distribution
                      process.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SanastoProcurementAsIn} width='100%' alt='pic'/>
                  <a href={SanastoProcurementAsIn} download='Sanasto-Marketing-As-In.jpg'> Download
                    Here </a>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ul className='points'>
                    <li>
                      In the procurement process, the Importer uses GPS technology to track the distribution of
                      products.
                    </li>
                    <br/>
                    <li>
                      But the dealer company Senesto has no such technology implemented within their business.
                    </li>
                    <br/>
                    <li>
                      We recommend implementing such a system since it is easy to track the delivery process.
                    </li>
                    <br/>
                    <li>
                      Furthermore, as an additional value addition step the company can notify the customers about the
                      delivery once the goods are loaded into the distribution vehicles.
                    </li>
                    <br/>
                    <li>
                      This can be done by sending an email or an SMS so the customers can prepare with payments and
                      other necessities beforehand.
                    </li>
                    <br/>
                    <li>
                      When the distribution network increases in a certain area (When distributors can attract new
                      customers) the process should be modified in a way the system can reroute the delivery route in a
                      cost-effective manner.
                    </li>
                    <br/>
                    <li>
                      Also, a new database for Delivery vehicle drivers needs to be managed therefore can keep track of
                      the availability of drivers and enhance the transparency of the driver payment process.
                    </li>
                    <br/>
                    <li>
                      For the Return product batch tracking issue faced by Senesto, one possible solution that can be
                      implemented is adding barcode stickers in the products to easily figure out the details of the
                      batch numbers and other relevant information about the product.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SanastoProcurementToBe} width='100%' alt='pic'/>
                  <a href={SanastoProcurementToBe} download='Sanasto-Marketing-To-Be.jpg'> Download
                    Here </a>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className='points'>
                    It can be recommended to implement such a system therefore it will be easy to track the activities
                    in a more transparent manner and hence avoid any discrepancies. This will be of immense help in
                    their expansion process when they are to utilize more Delivery vehicles distributing in many
                    different areas, Owner himself or a responsible employee might find it hard to track if any frauds
                    are happening in the delivery phase from the points goods are dispatched from the warehouse until
                    they are received by the retailer.
                  </p>
                  <p className='points'>
                    Generally, it will be the same set of customers they will be providing the goods to, once a new
                    customer is added into the distribution network in a particular area it may come beneficial to
                    figure out the most efficient route of delivery and notify the driver assigned. Therefore it is
                    recommended to consider such a feature when implementing a new system where the system is able to
                    reroute the delivery according to the newly added customer’s location.
                  </p>
                  <p className='points'>
                    In order to track the batch numbers of each product item for cosmetic products, the company can add
                    a barcode sticker containing batch details on each product item before re-packing and loading them
                    onto the delivery vehicles.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p className='section-title'>Technical Feasibility</p>
                  <ul className='points'>
                    <li>
                      GPS systems is a technology that is already available and utilized by many organizations
                      worldwide.
                    </li>
                    <li>
                      Therefore integrating a GPS system to the system is technically feasibleAlthough the company does
                      not have the necessary technical understanding, the task can be outsourced to a Software
                      Development firm to build the system and provide support services.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Economical Feasibility</p>
                  <ul className='points'>
                    <li>
                      All the capital cost and the initial implementation cost of integrating technology into the
                      business operations might be of significant cost initially but considering the long term benefits
                      the company will be able to reap out of those improvements we can say that these changes are
                      economically feasible.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Operational Feasibility</p>
                  <ul className='points'>
                    <li>
                      Proposed solutions will help to improve the efficiency and effectiveness of the operations of the
                      business and since they solve some bottlenecks the company is facing currently and they can be
                      practically implemented and can be considered as operationally feasible.
                    </li>
                    <li>
                      Having a separate employee given the responsibility for the inventory to cut the unnecessary costs
                      that can occur is practically doable improvement.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Legal and Ethical Feasibility</p>
                  <ul className='points'>
                    <li>
                      A computerized automated system will be a good way to overcome security issues pertaining to
                      sensitive business data.
                    </li>
                    <li>
                      Implementing access controls to different sections of the automated system will allow the
                      protection of the sensitive data of different stakeholders.
                    </li>
                    <li>
                      Adding GPS trackers to distribution vehicles is of ethical nature since it helps to improve the
                      transparency of the business process.
                    </li>
                    <li>
                      If we keep the system secure, we may confidently assert that our new alterations are legal and
                      ethical.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Schedule Feasibility</p>
                  <ul className='points'>
                    <li>
                      In reality, the employees benefit greatly from new ideas and advancements for the company.
                    </li>
                    <li>
                      As a consequence, the amount of time we have to spend on certain procedures-related activities is
                      cut in half.
                    </li>
                    <li>
                      All the suggested improvements can be implemented in the short term, during a period of one year
                      given that financial resources are available.
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

export default Procurement;
