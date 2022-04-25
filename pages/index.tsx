import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button, Stack, TextField} from "@mui/material";
import styled from "styled-components";
import AppBarComponent from "../src/components/AppBar";
import {AddBox} from "@mui/icons-material";

export default function Index() {


    const Title = styled(Typography)`
      flex: 1;
      font-size: 1.4rem;
      font-weight: 500;
      @media (max-width: 650px) {
        font-size: 0.8rem;
        color: #0070f3;
      }
    `;

    const CreateButton = styled(Button)`
      width: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem;
      height: auto;
      margin-top: 0.4rem;
      margin-left: 1rem;
      @media (max-width: 650px) {
        margin-left: 0;
      }
    `;

    return (
        <Stack sx={{}}>
            <AppBarComponent/>

            <Box sx={{my: 2, p: 5, pb: 0, display: "flex", justifyContent: "flex-start"}}>
                <Title>
                    Create new job
                </Title>
            </Box>
            <Box sx={{pl: 5, pr: 5}}>
                <Stack sx={{width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <TextField
                        id="standard-basic"
                        margin="normal"
                        sx={{width: "70%"}}
                    />
                    <TextField
                        id="standard-basic"
                        margin="normal"
                        sx={{width: "20%", ml: 2}}/>
                    <CreateButton variant={"contained"}>
                        <AddBox sx={{mr: 2}}/> CREATE
                    </CreateButton>
                </Stack>
            </Box>

        </Stack>

    );
}
