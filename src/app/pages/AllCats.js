import React, { useState } from "react";
import { ClickableImageCard } from "../components/card";
import DisplayCatModal from "../components/modal";
// import { DisplayCatModal } from "../components/modal";

const AllCats = ({ data, likes, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [cat, setCat] = useState({});

  const handleShow = (props) => {
    setCat(props);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {/* <DisplayCatModal
        // data={data}
        likeState={likes?.includes(cat.id)}
        show={showModal}
        onHide={handleClose}
        style={{ opacity: 1 }}
        fade={false}
        // showModal={showModal}
        setShowModal={setShowModal}
        data={cat}
        background_color={cat.background_color}
      /> */}
      <div className="card-columns">
        {data?.data?.map((each) => (
          // console.log("each", each),
          <ClickableImageCard
            key={each.id}
            name={each.name}
            image_url={each.image_url}
            background_color={each.background_color}
            owner={each.owner.name}
            likeState={likes?.includes(each.id)}
            // buttonOnClick={() => setLikeState(!likeState)}
            // onClick={handleShow}
            onClick={() => handleShow({ ...each })}
          />
        ))}
      </div>
    </>
  );
};

export default AllCats;
