import React from "react";
// import { Modal } from "antd";
// import {Modal } from boo
import { Subheading, Paragraph } from "../typography";
import { DescriptionCard } from "../card";
import "./modal.css";
import { Modal } from "react-bootstrap";
import { CloseButton, LikedLg, NoLikeLg } from "../button";
import { like, unlike } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const DisplayCatModal = ({
  show,
  setShowModal,
  data,
  background_color,
  onHide,
  likeState
}) => {
  const dispatch = useDispatch();
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body
        className="p-0"
        style={{ backgroundColor: `${background_color}` }}
      >
        <div className="container">
          <div className="row">
            <img
              className="card-img-top"
              height="330"
              width="100%"
              src={data.image_url}
              alt={`this ${data.name}. too bad you can't see it:(`}
            />
            <CloseButton onClick={onHide} className="close p-1" />
          </div>
          <div className="row m-4">
            <div className="container p-0">
              <div className="row mb-1">
                <div className="col  p-0">
                  <Subheading className="mb-0">{data.name}</Subheading>
                  <Paragraph className="p6">{`${data.age} years old`}</Paragraph>
                </div>
                <div className="col p-0" style={{ textAlign: "right" }}>
                  {likeState === true ? (
                    <NoLikeLg onClick={() => dispatch(unlike(data.id))} />
                  ) : (
                    <LikedLg onClick={() => dispatch(like(data))} />
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <Paragraph className="p2">{data.description}</Paragraph>
              <p></p>
            </div>
            <div className="row">
              <DescriptionCard data={data.owner} />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DisplayCatModal;
