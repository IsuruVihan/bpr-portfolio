import React, {FC} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component';
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
      content: "During this phase, we conducted an analysis of the current status of each company. We referred to online materials such as websites, social media pages, and other resources available online to gather the necessary data for this study. We were also able to interview a representative from each company to clarify our doubts and get additional data."
    },
    {
      title: "Phase 3",
      subtitle: "Process Re-engineering",
      content: "Once we conducted a background study, we evaluated the selected processes of each company and documented our findings. After a thorough analysis and several discussions, we were able to design a reengineered process for the companies to improve their efficiency and performance. We have also analyzed the feasibility of the suggested changes and included them in this portfolio."
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
