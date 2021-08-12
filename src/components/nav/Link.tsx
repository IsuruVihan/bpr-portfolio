import React, {FC} from 'react';
import {Col} from "react-bootstrap";

type LinkProps = {
  clicked: boolean,
  handleOnClick: () => void,
  text: string
};

const Link: FC<LinkProps> = (props) => {
  const {clicked, handleOnClick, text} = props;

  return (
    <Col
      md={2}
      xs={3}
      className={clicked ? "link text-center clicked mx-2" : "link text-center mx-2"}
      onClick={() => handleOnClick()}
    >
      {text}
    </Col>
  );
}

export default Link;