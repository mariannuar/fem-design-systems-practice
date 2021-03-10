import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path d="M26 2.275L23.725 0L13 10.725L2.275 0L0 2.275L10.725 13L0 23.725L2.275 26L13 15.275L23.725 26L26 23.725L15.275 13L26 2.275Z" fill="#737581" />
  </CloseIconWrapper>
);
