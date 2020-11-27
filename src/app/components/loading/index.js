import React from "react";
import cx from "classnames";
import Logo from "../logo";
import { LoadingHeading } from "../typography";

const Loading = ({ className, ...props }) => {
  return (
    <div
      className={cx(
        "d-flex w-100 p-3 justify-scontent-center align-items-center",
        className
      )}
      style={{ height: "100vh", background: "#F8EFE6" }}
      {...props}
    >
      <Logo className="d-flex" />
      <LoadingHeading className="mt-18">Catsat</LoadingHeading>
    </div>
  );
};

export default Loading;
