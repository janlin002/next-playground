import React from "react";

type Props = {
  children: React.ReactNode;
};

type TitleProps = {
  children: React.ReactNode;
};

type BodyProps = {
  children: React.ReactNode;
};

export const Alert = ({ children }: Props) => {
  return <div>{children}</div>;
};

Alert.Title = function AlertTitle({ children }: TitleProps) {
  return <h3 style={{ color: "red" }}>{children}</h3>;
};

const bodyFunction = ({ children }: BodyProps) => {
  return <div style={{ color: "brown" }}>{children}</div>;
};

Alert.Body = bodyFunction;

// Alert.Body = ({ children }) => <div style={{ color: "brown" }}>{children}</div>;

// https://twitter.com/_georgemoller/status/1759918381409473004
