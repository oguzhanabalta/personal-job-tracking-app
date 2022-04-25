import Box from "@mui/material/Box";
import {Button, MenuItem, Stack, TextField} from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import {AddBox} from "@mui/icons-material";
import {toast} from "react-hot-toast";

export default function CreateJobComponent() {

    const Title = styled(Typography)`
      flex: 1;
      font-size: 1.8rem;
      font-weight: 500;
      @media (max-width: 650px) {
        font-size: 1rem;
      }
    `;

    const CreateButton = styled(Button)`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem;
      height: auto;
      margin-top: 0.4rem;
      margin-left: 1rem;
      @media (max-width: 650px) {
        border-radius: 1rem;
        font-size: 0.5rem;
      }
    `;

    const CreateIcon = styled(AddBox)`
      width: 1.5rem;
      height: 1.5rem;
      @media (max-width: 650px) {
        width: 1rem;
        height: 1rem;
      }
    `;


    const jobPriority = [
        {
            value: 'High',
            label: 'High'
        },
        {
            value: 'Medium',
            label: 'Medium'
        },
        {
            value: 'Low',
            label: 'Low'
        }
    ];


    function createJob() {
        toast.success("Job created successfully");
        console.log("Job created successfully");
    }

    return (
        <>
            <Box sx={{display: "flex", justifyContent: "flex-start"}}>
                <Title>
                    Create new job
                </Title>
            </Box>

            <Stack sx={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr 1fr",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TextField
                    id="standard-basic"
                    margin="normal"
                    label="Job Name"
                />
                <TextField
                    select
                    id="standard-basic"
                    margin="normal"
                    label="Job Priority"
                    sx={{ml: 2, width: "auto"}}>
                    {
                        jobPriority.map((option) => {
                            return (
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            )
                        })
                    }
                </TextField>

                <CreateButton variant={"contained"} onClick={createJob}>
                    <CreateIcon/>
                    CREATE
                </CreateButton>
            </Stack>
        </>

    )
}
