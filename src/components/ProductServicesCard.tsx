import React, {FC} from 'react';
import {Card, Col} from "react-bootstrap";

type ProductServicesCardProps = {
  imgSrc: string,
  title: string,
};

const ProductServicesCard: FC<ProductServicesCardProps> = (props) => {
  const {imgSrc, title} = props;

  return (
    <Col className="p-2" md={3} sm={4} xs={12}>
      <Card border="secondary" className="p-1 text-center">
        <Card.Img variant="top" className="image" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductServicesCard;