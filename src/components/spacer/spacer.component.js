import React from "react";
import styled, { useTheme } from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  console.log(value);
  return `${property}:${value}`;
};

const SpaceView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpaceView variant={variant}>{children}</SpaceView>;
};

// export const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
