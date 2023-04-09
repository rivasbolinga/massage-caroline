import React from "react";
import { Card } from "react-bootstrap";
import ButtonBookNow from "../../styles/ButtonBookNow";
import { useDispatch } from "react-redux";
import { setDetails } from "../../redux/massages/massageSlice";

const ProductCard = ({ imgSrc, data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <img className="massage-img" src={imgSrc} />
        <Card.Body>
          <Card.Title>Massage Title</Card.Title>
          <Card.Text>
            Details of the massages you have to tell me otherwise it will as it is
            be aware of that lol client will be fire
          </Card.Text>
          <div className="product-actions">
            <ButtonBookNow variant="primary" type="Button" onClick={()=>dispatch(setDetails(data))}>SEE DETAILS</ButtonBookNow>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
