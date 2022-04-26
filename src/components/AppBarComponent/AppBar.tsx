import * as React from 'react';
import Box from '@mui/material/Box';
import {Stack, Toolbar} from "@mui/material";
import {Logo, StyledAppBar} from "./styles";


export default function AppBarComponent() {

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
