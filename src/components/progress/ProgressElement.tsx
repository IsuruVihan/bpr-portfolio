import React, {FC} from 'react';
import {VerticalTimelineElement} from "react-vertical-timeline-component";

type ProgressElementProps = {
  title: string,
  subtitle: string,
  content: string
};

const ProgressElement: FC<ProgressElementProps> = (props) => {
  const {title, subtitle, content} = props;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">
        <b>{title}</b>
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {subtitle}
      </h4>
      <p className="content">
        {content}
      </p>
    </VerticalTimelineElement>
  );
}

export default ProgressElement;