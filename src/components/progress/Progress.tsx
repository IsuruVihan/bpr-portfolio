import React, {FC} from 'react';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Col, Row} from "react-bootstrap";
import ProgressElement from "./ProgressElement";

const Progress: FC = () => {
    const progressElements = [
    {
      title: "Phase 1",
      subtitle: "Establishing Contact",
      content: "We started by contacting two companies initially i.e  IFS (PVT) LTD and Hayleys Advantis. As we were " +
        "advised to select two smaller scale companies that would require a re-engineering process, we approached a " +
        "few other companies such as Commercial Leasing & Finance PLC, Softvessel, Nanaska, Susiko Bakers & Sanasto " +
        "(Pvt) Ltd and managed to receive a positive response from both Softvessel and Sanasto (Pvt) Ltd."
    },
    {
      title: "Phase 2",
      subtitle: "Background Study",
      content: ""
    },
    {
      title: "Phase 3",
      subtitle: "Process Re-engineering",
      content: ""
    }
  ];

  return (
    <Row className="mx-0 my-5 py-5 justify-content-center our-progress">
      <Col className="px-0 text-center title" xs={12}>
        Our Progress
      </Col>
      <Col className="px-0 timeline" sm={8}>
        <VerticalTimeline>
          {
            progressElements.map((element) => {
              return <ProgressElement
                title={element.title}
                subtitle={element.subtitle}
                content={element.content}
              />;
            })
          }
        </VerticalTimeline>
      </Col>
    </Row>
  );
}

export default Progress;