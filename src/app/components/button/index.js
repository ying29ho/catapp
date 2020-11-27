import React from "react";
import Button from "react-bootstrap/Button";
import cx from "classname";
import "./button.css";
import { ButtonFont } from "../typography";

const LikedSm = ({ onClick }) => (
  <button
    type="button"
    className="btn btn-light rounded-circle"
    style={{ backgroundColor: "#FFFFFF", textAlign: "center" }}
    onClick={onClick}
  >
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-suit-heart"
      fill="#F46D5C"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
      />
    </svg>
  </button>
);

const NoLikedSm = ({ onClick }) => (
  <button
    type="button"
    className="btn rounded-circle"
    style={{ backgroundColor: "#FFFFFF", textAlign: "center" }}
    onClick={onClick}
  >
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-suit-heart-fill"
      fill="#F46D5C"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
    </svg>
  </button>
);

const LikedLg = ({ onClick }) => (
  <button
    type="button"
    className="btn"
    style={{
      backgroundColor: "#FFFFFF",
      borderRadius: "25px",
      color: "#F46D5C",
      width: "112px",
      height: "36px",
      display: "inline-block"
      // paddingLeft: "50px",
      // paddingRight: "50px"
    }}
    onClick={onClick}
  >
    <ButtonFont
      style={{
        display: "inline-block",
        alignItems: "flex-start",
        fontSize: "16px",
        lineHeight: "120%",
        fontWeight: "bold"
      }}
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-suit-heart"
        fill="#F46D5C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
        />
      </svg>{" "}
      Like
    </ButtonFont>
  </button>
);

const NoLikeLg = ({ onClick }) => (
  <button
    type="button"
    className="btn"
    style={{
      backgroundColor: "#F46D5C",
      borderRadius: "25px",
      color: "#FFF",
      width: "112px",
      height: "36px",
      display: "inline-block"
    }}
    onClick={onClick}
  >
    <ButtonFont
      style={{
        display: "inline-block",
        alignItems: "flex-start",
        fontSize: "16px",
        lineHeight: "120%",
        fontWeight: "bold"
      }}
    >
      <svg
        width="1em"
        height="1em"
        // viewBox="0 0 16 16"
        className="bi bi-suit-heart-fill"
        fill="#FFFFFF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
      </svg>{" "}
      Liked
    </ButtonFont>
  </button>
);

const DefaultButton = ({ className, onClick, disabled, children, variant }) => (
  <Button
    type="button"
    bsPrefix="new-pri"
    className={cx("btn", className)}
    variant={variant}
    disabled={disabled}
    onClick={onClick}
    style={{
      borderRadius: "25px",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "120%",
      width: "140px",
      height: "36px"
    }}
  >
    {children}
  </Button>
);

const CloseButton = ({ className, onClick }) => (
  <button
    type="button"
    className={cx("btn rounded-circle", className)}
    style={{ backgroundColor: "#FFFFFF" }}
    onClick={onClick}
  >
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-x"
      fill="#143154"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </button>
);

export { LikedSm, NoLikedSm, LikedLg, NoLikeLg, DefaultButton, CloseButton };
