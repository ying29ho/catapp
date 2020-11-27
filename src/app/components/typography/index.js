import React from "react";
import cx from "classnames";

import "./typography.css";

const Heading = ({ className, children, ...props }) => (
  <h1 className={cx("heading-text", className)} {...props}>
    {children}
  </h1>
);

const LoadingHeading = ({ className, children, ...props }) => (
  <h1 className={cx("loading", className)} {...props}>
    {children}
  </h1>
);
const Subheading = ({ className, children, ...props }) => (
  <h3 className={cx("subheading ", className)} {...props}>
    {children}
  </h3>
);
const CardSubheading = ({ className, children, ...props }) => (
  <h3
    className={cx(
      "heading-text font-light font-size-18 text-primary",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

const Paragraph = ({ className, children, ...props }) => (
  <p className={cx("paragraph", className)} {...props}>
    {children}
  </p>
);

const Title = ({ className, children, ...props }) => (
  <p className={cx("title", className)} {...props}>
    {children}
  </p>
);

const ButtonFont = ({ className, children, ...props }) => (
  <p className={cx("button", className)} {...props}>
    {children}
  </p>
);

export {
  Heading,
  LoadingHeading,
  Subheading,
  CardSubheading,
  Paragraph,
  Title,
  ButtonFont
};
