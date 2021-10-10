import React, {FC} from 'react';
import {Row, Col, Table} from 'react-bootstrap';
import {Chart} from "react-google-charts";

const Contribution: FC = () => {
  return (
    <Row className="mx-0 my-5 py-5 contribution justify-content-center">
      <Col className="px-0 pb-3 title text-center" xs={12}>
        Contribution
      </Col>
      <Col className='px-0' md={6} xs={12}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Member', 'Percentage'],
            ['Azma', 25],
            ['Avishka', 25],
            ['Isuru', 25],
            ['Nethmini', 25]
          ]}
          options={{
            is3D: true,
          }}
          rootProps={{'data-testid': '2'}}
        />
      </Col>
      <Col className='px-0 pe-md-5 px-sm-5' md={6} xs={12}>
        <Table className='mt-md-5' bordered hover striped responsive>
          <thead>
          <tr>
            <th>#</th>
            <th>Team Member</th>
            <th>Individual Contribution</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Azma</td>
            <td>
              <ul>
                <li>
                  Background study on SoftVessel.
                </li>
                <li>
                  Software Development process analysis and reengineering.
                </li>
                <li>
                  Customer Relations process analysis and reengineering.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Avishka</td>
            <td>
              <ul>
                <li>
                  Background study on Sanasto.
                </li>
                <li>
                  Procurement process analysis and reengineering.
                </li>
                <li>
                  Inventory Management process analysis and reengineering.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Isuru</td>
            <td>
              <ul>
                <li>
                  Designed and deployed the portfolio.
                </li>
                <li>
                  Software Development process analysis and reengineering.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nethmini</td>
            <td>
              <ul>
                <li>
                  Customer Relations process analysis and reengineering for Sanasto.
                </li>
                <li>
                  Marketing process analysis and reengineering for SoftVessel.
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

export default Contribution;
