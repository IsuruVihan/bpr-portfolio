import React, {FC} from 'react';
import {Card, Col} from "react-bootstrap";

type ProductServicesCardProps = {
  imgSrc: string,
  title: string,
};

const ProductServicesCard: FC<ProductServicesCardProps> = (props) => {
  const {imgSrc, title} = props;

  return (
    <Col className="p-2" xs={3}>
      <Card>
        <Card.Img variant="top" className="image" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductServicesCard;