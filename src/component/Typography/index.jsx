import React from "react";
import styled, { css } from "styled-components";
import styles from "style/style.module.scss";

const TypographyStyled = styled.p`
  border-radius: 4px;
  border: none;
  font-weight: 400;
  font-size: 18px;
  cursor: normal;
  font-family: ${(props) => props.$font ?? "none"}
    ${(props) =>
      props.$center &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    ${(props) =>
      props.$bold &&
      css`
        font-weight: 900;
      `};
  ${(props) =>
    props.$primary &&
    css`
      color: hsl(209, 58%, 55%) !important;
    `};
  ${(props) =>
    props.$white &&
    css`
      color: white;
    `};
  ${(props) =>
    props.$p1 &&
    css`
      font-size: 30px;
      font-weight: 700;
    `};
  ${(props) =>
    props.$p2 &&
    css`
      font-size: 20px;
      font-weight: 500;
    `};
  ${(props) =>
    props.$lnb &&
    css`
      font-size: 16px;
    `}
  ${(props) =>
    props.$loading &&
    css`
      clip-path: inset(0 1ch 0 0);
      animation: l 1s steps(4) infinite;

      @keyframes l {
        to {
          clip-path: inset(0 -1ch 0 0);
        }
      }
    `}
`;

const Typography = ({
  children,
  center = false,
  bold = false,
  p1 = false,
  p2 = false,
  lnb = false,
  primary = false,
  white = false,
  loading = false,
}) => {
  return (
    <TypographyStyled
      $center={center}
      $bold={bold}
      $p1={p1}
      $p2={p2}
      $lnb={lnb}
      $primary={primary}
      $white={white}
      $loading={loading}
    >
      {children}
    </TypographyStyled>
  );
};

export default Typography;
