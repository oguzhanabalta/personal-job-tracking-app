import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {AppBar, Stack, Toolbar} from "@mui/material";
import styled from "styled-components";


export default function AppBarComponent() {

    const Logo = styled(Typography)`
      flex: 1;
      font-size: 1.5rem;
      font-weight: 400;
    `;

    const Title = styled(Typography)`
      flex: 1;
      font-size: 1.4rem;
      font-weight: 400;
      @media (max-width: 650px) {
        font-size: 0.8rem;
        color: #0070f3;
      }
    `;

    const StyledAppBar = styled(AppBar)`
      background: white;
      border: 1px solid #e0e0e0;
      width: 100%;
      color: blueviolet;
    `;
    
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Stack>
                    <Box flexGrow={1}>
                        <Logo>
                            LOGO
                        </Logo>
                    </Box>
                </Stack>
            </Toolbar>
        </StyledAppBar>
    );
}
