import React, {useState} from 'react';
import TableRow from '@mui/material/TableRow';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    MenuItem,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import {DeleteRounded, EditRounded, SearchRounded} from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import {toast} from "react-hot-toast";
import Box from "@mui/material/Box";
import {
    CreateButton,
    CreateContainer,
    CreateIcon,
    JobListContainer,
    StyledTableCell,
    StyledTableRow,
    Text,
    Title
} from "./styles";
import {useTheme} from "@mui/system";
import Image from "next/image";


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
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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

                <CreateContainer>
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
                </CreateContainer>
            </Stack>


            <Stack sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Typography>Job List</Typography>
                <Typography>(3/3)</Typography>
            </Stack>
            <JobListContainer>
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
            </JobListContainer>
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
                            <>
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.status}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton onClick={handleClickOpen}>
                                            <EditRounded/>
                                        </IconButton>
                                        <IconButton onClick={() => handle_click_delete_job(index)}>
                                            <DeleteRounded/>
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <Box>
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"

                                    >
                                        <DialogTitle
                                            sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            {"JOB EDİT"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <TextField
                                                disabled
                                                label={`Job Name`}
                                                sx={{minWidth: "500px", margin: 3}}
                                                value={row.name}
                                            />
                                            <TextField select
                                                       defaultValue={row.status}
                                                       sx={{minWidth: "500px", margin: 3}}
                                            >
                                                {
                                                    jobPriority.map((option: any) => {
                                                        return (
                                                            <MenuItem key={option.value}
                                                                      value={option.value}>{option.value}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </TextField>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose}>
                                                CANCEL
                                            </Button>
                                            <Button onClick={handleClose} autoFocus>
                                                SAVE
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>

                            </>


                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                jobsData.length < 1 ?
                    <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>

                        <Image src="/empty_todos.svg"
                               alt="Picture of the author"
                               width={1000}
                               height={1000}/>
                        <Title>No Jobs Found</Title>
                        <Text>Here you will be able to see the jobs you have created and their
                            priorities.</Text>
                    </Stack>
                    : null
            }


        </Stack>
    );
}



