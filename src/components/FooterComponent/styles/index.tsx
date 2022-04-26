import styled from "styled-components";
import {Box, Link, Typography} from "@mui/material";

export const FooterCard = styled(Box)`
  padding: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: #fff;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterText = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 650px) {

    font-size: 0.8rem;
  }
`;


export const FooterLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const FooterContainer = styled(Box)`
  background-color: #556cd6a8;
  color: #fff;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    padding: 0;
  }
`;
