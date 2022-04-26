import styled from "styled-components";
import Typography from "@mui/material/Typography";
import {AppBar} from "@mui/material";

export const Logo = styled(Typography)`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Title = styled(Typography)`
  flex: 1;
  font-size: 1.4rem;
  font-weight: 400;
  @media (max-width: 650px) {
    font-size: 0.8rem;
    color: #0070f3;
  }
`;

export const StyledAppBar = styled(AppBar)`
  background: white;
  border: 1px solid #e0e0e0;
  width: 100%;
  color: blueviolet;
`;
