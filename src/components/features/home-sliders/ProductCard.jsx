import React from "react";
import { Card } from "react-bootstrap";
import ButtonBookNow from "../../styles/ButtonBookNow";

const ProductCard = props => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <img className="massage-img" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>Massage Title</Card.Title>
          <Card.Text>
            Details of the massages you have to tell me otherwise it will as it is 
            be aware of that lol client will be fire
          </Card.Text>
          <div className="product-actions">
            <ButtonBookNow variant="primary">SEE DETAILS</ButtonBookNow>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
