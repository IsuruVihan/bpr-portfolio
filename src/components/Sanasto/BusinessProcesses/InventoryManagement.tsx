import React, {FC} from 'react';
import {Accordion, Col, Image, Nav, Row, Tab} from "react-bootstrap";
import SanastoInventoryManagementAsIn from "../../../assets/images/sanasto-inventory-management-asin.jpg";
import SanastoInventoryManagementToBe from "../../../assets/images/sanasto-inventory-management-tobe.jpg";

const InventoryManagement: FC = () => {
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Inventory Management</Accordion.Header>
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
                      The inventory Management Process of the distribution Agency currently depends on their main
                      Importer organization Alaris Lanka (Pvt) Ltd.
                    </li>
                    <br/>
                    <li>
                      Two employees are working to handle digital records of the transactions and operations through
                      spreadsheet software programs.
                    </li>
                    <br/>
                    <li>
                      In the inventory management process, Packed products are stored according to the brands.
                    </li>
                    <br/>
                    <li>
                      Inventory is managed on a First in First Out basis.
                    </li>
                    <br/>
                    <li>
                      When storing Products in the inventory it was identified that a controlled environment is required
                      for some products since they were Pharmaceutical products and Cosmetics.
                    </li>
                    <br/>
                    <li>
                      Therefore to maintain the controlled environment in the inventory and reduce unnecessary wastage
                      electricity and lighting needs to be given attention.
                    </li>
                    <br/>
                    <li>
                      Furthermore, currently, products are stored in the inventory as they are received considering the
                      First in First Out concept.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SanastoInventoryManagementAsIn} width='100%' alt='pic'/>
                  <a href={SanastoInventoryManagementAsIn}
                     download='Sanasto-Inventory-Management-As-In.jpg'> Download
                    Here
                  </a>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ul className='points'>
                    <li>
                      Although the inventory Management process is currently limited to getting products from their sole
                      Business that they have a dealership, Alaris Lanka, with their future plans of expansion and form
                      dealerships with other pharmaceutical and cosmetic product importers, it is vital to make the
                      processes more efficient and more transparent so that it will be easy manage and keep track of the
                      stock in and stock out.
                    </li>
                    <br/>
                    <li>
                      One main modification that can be made to the Inventory Management process of the Senesto Pvt Ltd
                      is to introduce an Inventory Management component in the proposed new system to manage the
                      operations of the business.
                    </li>
                    <br/>
                    <li>
                      The system can be used to maintain the relationship with stakeholders (Both the supplier and the
                      Customer) and figure out the profit-maximizing inventory reordering schedules.
                    </li>
                    <br/>
                    <li>
                      When products are received from Importers a quality check should be done by an employee so that it
                      will help to reduce the number of return products they receive from customers due to quality
                      issues or expiry date issues.
                    </li>
                    <br/>
                    <li>
                      One employee responsible for Managing the Inventory Building should be appointed so that the
                      unnecessary utility costs can be avoided in the Inventory Management process.
                    </li>
                  </ul>
                  <br/>
                  <Image src={SanastoInventoryManagementToBe} width='100%' alt='pic'/>
                  <a href={SanastoInventoryManagementToBe}
                     download='Sanasto-Inventory-Management-To-Be.jpg'> Download
                    Here
                  </a>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className='points'>
                    Introducing an Inventory Management component would reduce the number of human errors that could
                    occur during the process of inventory management while making it easier to realize the bigger
                    picture of inventory management through easily generated analytics.
                  </p>
                  <p className='points'>
                    The inventory Management Process can be further improved by organizing the inventory space in a more
                    efficient way. Factors that can be taken into account when organizing the inventory space are as
                    follows.
                  </p>
                  <ul className='points'>
                    <li>
                      The popularity of the product.
                    </li>
                    <li>
                      Separate space to gather orders by their relevant distribution area after finalizing the
                      quantities to be distributed.
                    </li>
                    <li>
                      Product types.
                    </li>
                  </ul>
                  <p className='points'>
                    This will allow the company to reduce the time spent on loading the orders to the delivery fleet
                    from the Inventory.
                  </p>
                  <p className='points'>
                    Currently, the owner himself plays a major role in managing operations in the business but if one
                    particular person can be assigned responsibility to Managing the Inventory in an efficient way
                    (Electricity and space and inefficiencies like keeping the doors open unnecessarily) and limit the
                    number of employees dealing with the inventory.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p className='section-title'>Technical Feasibility</p>
                  <ul className='points'>
                    <li>
                      The implementation of an Automated system is a suggested solution rather than the current manual
                      process.
                    </li>
                    <li>
                      Although the company does not have the necessary technical understanding, the task can be
                      outsourced to a Software Development firm to build the system and provide support services.
                    </li>
                  </ul>
                  <br/>
                  <p className='section-title'>Economical Feasibility</p>
                  <ul className='points'>
                    <li>
                      Although currently is focused on one business stakeholder, since they have the capacity to expand
                      and receive dealerships from other import businesses as well, Manual processes may not suit the
                      business well.
                    </li>
                    <li>
                      Although using open source Database Management Systems and SpreadSheet Software may be sufficient
                      for small operational work, strategically it may be inefficient when the company is growing.
                    </li>
                    <li>
                      Therefore even if implementing a new system might have a significant initial cost, considering the
                      cost benefit analysis into the future it can be justified with the cost savings that can be
                      expected.
                    </li>
                    <li>
                      Assigning employees specific tasks like Managing Inventory benefits will definitely outweigh the
                      costs incurred from additional employee wage.
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
                      Information and Data are of great value and it is vital to make sure that company data and
                      information are protected and not vulnerable to be leaked to third parties.
                    </li>
                    <li>
                      Therefore the business should pay attention to control access to valuable information in the
                      system.
                    </li>
                    <li>
                      A computerized automated system will be a good way to overcome security issues pertaining to
                      sensitive business data.
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
                      In fact, the fresh ideas and developments for the firm are a huge assistance to the employees.
                    </li>
                    <li>
                      As a result, the amount of time we have to spend on specific activities linked to this procedure
                      is reduced.
                    </li>
                    <li>
                      In addition, some existing tasks will not be completed by the employees.
                    </li>
                    <li>
                      We can definitely state that it is feasible in terms of schedule feasibility because of the time
                      savings.
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

export default InventoryManagement;
