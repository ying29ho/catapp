import React, { useState } from "react";
import { ClickableImageCard } from "../components/card";
import DisplayCatModal from "../components/modal";
import { Paragraph } from "../components/typography";

const LikedCats = ({ data, likes }) => {
  const [showModal, setShowModal] = useState(false);
  const [cat, setCat] = useState({});
  const handleShow = (props) => {
    setCat(props);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    // setCat({ name: "" });
  };
  return (
    <>
      <DisplayCatModal
        // data={data}
        likeState={likes?.includes(cat.id)}
        show={showModal}
        onHide={handleClose}
        // showModal={showModal}
        animation={true}
        setShowModal={setShowModal}
        data={cat}
        background_color={cat.background_color}
      />
      <div className="row mx-auto py-auto">
        {likes.length === 0 ? (
          <div className=" mx-auto">
            <Paragraph
              className="p3"
              style={{ paddingTop: "60%", paddingBottom: "50%" }}
            >
              No liked cats:( You monster
            </Paragraph>
          </div>
        ) : (
          <div className=" card-columns">
            {data?.data?.map((each) =>
              likes.includes(each.id) === true ? (
                <ClickableImageCard
                  key={each.id}
                  name={each.name}
                  image_url={each.image_url}
                  background_color={each.background_color}
                  owner={each.owner.name}
                  likeState={likes?.includes(each.id)}
                  onClick={() => handleShow({ ...each })}
                />
              ) : null
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default LikedCats;
