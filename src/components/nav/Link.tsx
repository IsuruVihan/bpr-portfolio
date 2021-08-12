import React, {FC} from 'react';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

type NavLinkProps = {
  clicked: boolean,
  link: string,
  handleOnClick: () => void,
  text: string
};

const NavLink: FC<NavLinkProps> = (props) => {
  const {clicked, link, handleOnClick, text} = props;

  return (
    <Col
      md={2}
      xs={3}
      className={clicked ? "link text-center clicked mx-2" : "link text-center mx-2"}
      onClick={() => handleOnClick()}
    >
      <Link to={link}>
        {text}
      </Link>
    </Col>
  );
}

export default NavLink;