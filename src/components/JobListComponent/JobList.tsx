import React, {useState} from 'react';
import TableRow from '@mui/material/TableRow';
import {
    IconButton,
    InputAdornment,
    MenuItem,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TextField,
    Typography
} from "@mui/material";
import {DeleteRounded, EditRounded, SearchRounded} from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import {toast} from "react-hot-toast";
import Box from "@mui/material/Box";
import {CreateButton, CreateIcon, StyledTableCell, StyledTableRow, Text, Title} from "./styles";


export default function JobListComponent() {
    const [jobsData, setJobData] = useState<any>([]);
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

    const [jobName, setJobName] = useState<string>("");
    const [jobStatus, setJobStatus] = useState("High");


    function handle_click_add_job() {
        const newJob = {
            id: jobsData.length + 1,
            name: jobName,
            status: jobStatus,
        };
        jobsData.push(newJob);
        setJobName("");
        setJobStatus("");
        toast.success("Job added successfully");
    }

    function handle_click_delete_job(target_index: number) {
        setJobData(jobsData.filter((_: any, index: any) => index !== target_index));
        toast.success("Job deleted successfully");
    }

    function handle_change_job_status(event: React.ChangeEvent<{ value: unknown }>) {
        setJobStatus(event.target.value as string);
    }


    return (
        <Stack sx={{display: "flex", flexDirection: "column", mt: 3, mb: 30}}>
            <Stack>
                <Box sx={{display: "flex", justifyContent: "flex-start"}}>
                    <Title>
                        Create new job
                    </Title>
                </Box>

                <Stack sx={{
                    display: "grid",
                    gridTemplateColumns: "3fr 2fr 1fr",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 8
                }}>
                    <TextField
                        id="standard-basic"
                        margin="normal"
                        value={jobName}
                        onChange={(event) => setJobName(event.target.value)}
                        label="Job Name"
                    />
                    <TextField
                        select
                        id="standard-basic"
                        margin="normal"
                        label="Job Priority"
                        value={jobStatus}
                        onChange={handle_change_job_status}
                        sx={{ml: 2, width: "auto"}}>
                        {
                            jobPriority.map((option: any) => {
                                return (
                                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                )
                            })
                        }
                    </TextField>

                    <CreateButton variant={"contained"} onClick={handle_click_add_job}>
                        <CreateIcon/>
                        create
                    </CreateButton>
                </Stack>
            </Stack>


            <Stack sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Typography>Job List</Typography>
                <Typography>(3/3)</Typography>
            </Stack>
            <Stack sx={{
                background: "#f1f4ff",
                borderRadius: "1rem 1rem 0px 0px",
                border: "1px solid #e0e0e0",
                display: "grid",
                gridTemplateColumns: "3fr 1fr",
                justifyContent: "space-between",
                padding: "1rem",
            }}>
                <TextField
                    label="Job Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRounded/>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField select
                           label="Job Priority(All)"
                           sx={{ml: 2}}>
                    {
                        jobPriority.map((option: any) => {
                            return (
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            )
                        })
                    }
                </TextField>
            </Stack>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Job Name</StyledTableCell>
                            <StyledTableCell align="right">Priority</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {jobsData?.map((row: any, index: any) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.status}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton>
                                        <EditRounded/>
                                    </IconButton>
                                    <IconButton onClick={() => handle_click_delete_job(index)}>
                                        <DeleteRounded/>
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                jobsData.length < 1 ?
                    <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>

                        <img src="/empty_todos.svg"/>
                        <Title>No Jobs Found</Title>
                        <Text>Here you will be able to see the jobs you have created and their
                            priorities.</Text>
                    </Stack>
                    : null
            }


        </Stack>


    );
}

