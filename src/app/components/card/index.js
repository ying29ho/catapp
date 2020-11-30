import React from "react";
import { LikedSm, NoLikedSm } from "../button";
import { Paragraph, Title } from "../typography";
import "./card.css";

const ClickableImageCard = ({
  image_url,
  background_color,
  name,
  owner,
  likeState,
  onClick,
  buttonOnClick,

  ...props
}) => {
  return (
    // <div className="container-">
    <div
      className="card border-0"
      style={{
        background: `${background_color}`,
        borderRadius: "20px",
        maxheight: "230px",
        width: "159px"
      }}
      onClick={onClick}
      // {`width: 159px; height: 230px; background: ${background_colour};`}
    >
      <img
        src={image_url}
        className="image card-img-top rounded-bottom-0"
        alt={name}
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px"
        }}
        maxheight="140px"
        width="159px"
      />
      <div className="card-body">
        <div className="row mx-auto">
          <div className="col ">
            <div className="row mb-0">
              <Title className="t1">{name}</Title>
            </div>
            <div className="row mt-1">
              <Paragraph className="p4 mb-2">{`Owned by ${owner}`}</Paragraph>
            </div>
          </div>
          <div className="col p-0" style={{ textAlign: "right" }}>
            {likeState ? <NoLikedSm /> : <LikedSm />}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

const DescriptionCard = ({ data }) => {
  return (
    <div className="card m-0 p-0 border-0" style={{ borderRadius: "20px" }}>
      <div className="card-body">
        <Title className="t2">{`Owned by ${data.name}`}</Title>
        <div className="row">
          <div className="col-4 col-sm-3">
            <Title className="t3 mb-2">Phone</Title>
          </div>
          <div className="col-8 col-sm-9">
            <Paragraph className="p5 mb-2">{data.phone}</Paragraph>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-sm-3">
            <Title className="t3 mb-2">Email</Title>
          </div>
          <div className="col-8 col-sm-9">
            <Paragraph className="p5 mb-2">{data.email}</Paragraph>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-sm-3">
            <Title className="t3 mb-2">Location</Title>
          </div>
          <div className="col-8 col-sm-9">
            <Paragraph className="p5 mb-2">{data.address}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClickableImageCard, DescriptionCard };
