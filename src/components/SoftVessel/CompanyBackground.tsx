import React, {FC} from 'react';
import {Col, Row, Table} from "react-bootstrap";

const CompanyBackground: FC = () => {
  return (
    <Row className='mx-0'>
      <Col xs={12}>
        <ul className='points'>
          <li>
            SoftVessel (Pvt) Ltd is a scaled software engineering service provider who delivers high income generating
            software products that enhance user experience.
          </li>
          <br/>
          <li>
            SoftVessel has been delivering high quality software solutions to the local as well as foreign market for
            over 8 years.
          </li>
          <br/>
          <li>
            The company was founded by its current Director Mr. Vidura Adikari.
          </li>
        </ul>
        <br/>
        <p className='section-title'>Industry Leaders</p>
        <ol className='points'>
          <li>
            Virtusa
            <ul>
              <li>
                One of the largest and oldest IT service companies based in Sri Lanka who specialize in providing
                industry IT solutions to large enterprises.
              </li>
              <li>
                Virtusa provides a versatile range of IT services from Cybersecurity, data and analytics, UX & interface
                design, intelligent automation, digital process automation, EAP to payment modernization, mobile game
                testing services and AI managed services, etc.
              </li>
            </ul>
          </li>
          <br/>
          <li>
            99x
            <ul>
              <li>
                A leading IT service company based in Sri Lanka and Norway, that specializes in software product
                engineering, full stack development, Blockchain, cloud enablement, mobile applications, product
                conceptualization services, etc.
              </li>
              <li>
                99x was awarded as one of the best IT-related workplaces in Asia and In Sri Lanka several times.
              </li>
            </ul>
          </li>
          <br/>
          <li>
            CodeGen
            <ul>
              <li>
                CodeGen is an internationally recognized IT organization that has been transforming businesses in the
                travel and tourism industry, with a powerful and intelligent travel technology product suite.
              </li>
              <li>
                Headquartered in Colombo and armed with innovative IT thinkers, CodeGen is now making amends to pave
                their path into automobile, agriculture, transportation, retail, gaming, healthcare, and energy as well.
              </li>
            </ul>
          </li>
          <br/>
          <li>
            WSO2
            <ul>
              <li>
                A leading open source integration retailer in Sri Lanka with products like API manager, Enterprise
                integrator, identity saver.
              </li>
              <li>
                With 15 years of experience and a worldwide customer base, WSO2 provides software solutions to some
                renowned enterprises, including eBay, The Warehouse Group, Karnataka Bank Ltd, Qantas, etc.
              </li>
            </ul>
          </li>
        </ol>
        <br/>
        <p className='section-title'>SoftVessel vs. Industry Leaders</p>
        <Table striped bordered hover responsive>
          <thead>
          <tr>
            <th>Comparison Factor</th>
            <th>Virtusa</th>
            <th>99x</th>
            <th>CodeGen</th>
            <th>WSO2</th>
            <th>SoftVessel</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Experience</td>
            <td>25 years</td>
            <td>15 years</td>
            <td>20 years</td>
            <td>15 years</td>
            <td>8 years</td>
          </tr>
          <tr>
            <td>Product/Service Range</td>
            <td>
              <ul className='points'>
                <li>IT & Business Consultations</li>
                <li>User Experience & Interface</li>
                <li>AI & Machine Learning</li>
                <li>Industrial IoT</li>
                <li>Content & Customer Experience</li>
                <li>Cloud Transformation</li>
                <li>Application Support & Management</li>
                <li>Infrastructure Management</li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>Full-stack development</li>
                <li>Blockchain solutions</li>
                <li>Cloud enablement</li>
                <li>Mobile Applications</li>
                <li>Machine Learning</li>
                <li>UserExperience</li>
                <li>Product Conceptualization</li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>Digital Transformation</li>
                <li>Software Delivery</li>
                <li>Technology Consultancy</li>
                <li>Technology Innovation</li>
                <li>Artificial Intelligence</li>
                <li>Cloud Transformation</li>
                <li>Team Augmentation</li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>API Management</li>
                <li>Streaming Integration</li>
                <li>Enterprise Service Bus</li>
                <li>Micro Integrator</li>
                <li>CIAM</li>
                <li>IoT</li>
                <li>Strategic Consultation</li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>Software Development</li>
                <li>Cloud Services</li>
                <li>Quality Assurance</li>
                <li>User Experience & Interface</li>
                <li>Cloud Services</li>
                <li>IT Project Management</li>
                <li>Search Engine Optimization</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Scale</td>
            <td>More than 20,000 employees worldwide</td>
            <td>Over 350 technology & product specialists</td>
            <td>Over 600 employees</td>
            <td>Over 800 employees</td>
            <td>12 employees</td>
          </tr>
          <tr>
            <td>Strategies</td>
            <td>
              <ul className='points'>
                <li>
                  Delivers deep digital engineering and industry expertise with Digital Transformation Studio (DTS).
                </li>
                <li>
                  Partnering up with leading technology companies worldwide.
                </li>
                <li>
                  Focusing on Corporate Social Responsibility (CSR); Project Code Green, Forest Restoration, Campus
                  Reach etc.
                </li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>
                  Has developed a culture of high trust, informality and transparency that mirrors the culture of the
                  Scandinavian companies they work with.
                </li>
                <li>
                  Focus on improving Sri Lankan education, environment and health through the “99X Technology CSR
                  Foundation”.
                </li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>
                  Works with some of the largest blue-chip travel and tourism companies around the world to deliver
                  high-performance solutions.
                </li>
                <li>
                  Recently, stepping into other industries like Automotive, Agriculture, Education, Healthcare, Gaming
                  and more.
                </li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>
                  Provide free open source software while encouraging developers to contribute to their products.
                </li>
                <li>
                  Providing training programs and certifications for developers.
                </li>
                <li>
                  Publish findings as peer reviewed research publication.
                </li>
              </ul>
            </td>
            <td>
              <ul className='points'>
                <li>
                  The SoftVessel team always aims at delivering software that are of high standards, and are easily
                  scalable through Agile methodologies.
                </li>
                <li>
                  Provide software engineering training programs to level-up software engineering skills and discipline
                  of undergraduates and industry professionals.
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default CompanyBackground;
