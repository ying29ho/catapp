import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { useSelector } from "react-redux";
import axios from "axios";

import { DefaultButton } from "../../components/button";

import Loading from "../../components/loading";
import { Heading, Paragraph, ButtonFont } from "../../components/typography";

import "./MainPage.css";
import AllCats from "../../pages/AllCats";
import LikedCats from "../../pages/LikedCats";

const MainPage = () => {
  const [allPage, setAllPage] = useState(true);
  const [appState, setAppState] = useState({
    loading: false,
    data: null
  });
  const likes = useSelector((s) => s.likes);
  // const { data, error } = useSWR(
  //   apiURL
  // );

  useEffect(() => {
    setAppState({ loading: true });
    const apiURL = "https://cdn.ivodigital.com/catsapp/felines.json";
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setAppState({ loading: false, data: data });
      });
  }, [setAppState]);
  // if (error) {
  //   return (
  //     <div>
  //       <Heading>failed to load data. Please try again later</Heading>
  //     </div>
  //   );
  // }
  // if (!data) {
  //   return <Loading />;
  // }
  // if (data.status === "success") {
  return (
    <div className="main my-5 mx-3">
      {/* <Heading className="main-text mx-auto py-auto">
          Please switch to mobile to view the app
        </Heading> */}
      <Heading>Catsat</Heading>
      <Paragraph className="p1">
        Browse through stranger's cute cats and like them for free.
      </Paragraph>
      <div className="row py-3 mx-auto">
        <div className="col-6" style={{ width: "auto" }}>
          <DefaultButton
            variant="primary"
            onClick={() => {
              setAllPage(!allPage);
            }}
            disabled={allPage}
          >
            <ButtonFont style={{ fontSize: "14px" }}>All Cats</ButtonFont>
          </DefaultButton>
        </div>
        <div className="col-6" style={{ width: "auto" }}>
          <DefaultButton
            variant="primary"
            onClick={() => {
              setAllPage(!allPage);
            }}
            disabled={!allPage}
          >
            <ButtonFont style={{ fontSize: "14px" }}>Liked Cats</ButtonFont>
          </DefaultButton>
        </div>
      </div>
      {allPage ? (
        <AllCats data={appState.data} likes={likes} />
      ) : (
        <LikedCats data={appState.data} likes={likes} />
      )}
    </div>
  );
  // }
};

export default MainPage;
