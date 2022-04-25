import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {AppBar, Button, Stack, Toolbar} from "@mui/material";
import styled from "styled-components";

export default function Index() {

    const StyledTypography = styled(Typography)`
      flex: 1;
      font-size: 1.5rem;
      font-weight: 400;
`;

    const  StyledAppBar = styled(AppBar)`
      background:white;
      border: 1px solid #e0e0e0;
      width:100%;
      color: blueviolet;
    `;

  return (
      <Stack>

          <StyledAppBar position="static" color="primary">
              <Toolbar>
                  <StyledTypography variant={"h2"}  color="inherit">
                      LOGO
                  </StyledTypography>
              </Toolbar>
          </StyledAppBar>
          <Container maxWidth="sm">
              <Box sx={{ my: 4 }}>
                  <Typography variant="h4" component="h1" gutterBottom>
                      Personal Job Tracking App
                  </Typography>
              </Box>
          </Container>
      </Stack>

  );
}
