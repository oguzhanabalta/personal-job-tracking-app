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
    const [updateStatus, setUpdateStatus] = useState(jobStatus || "High");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [searchJob, setSearchJob] = useState("");
    const [searchStatus, setSearchStatus] = useState("");

    const handleClickOpenDeleteDialog = () => {
        setDeleteOpen(true);
    };
    const handleCloseDeleteDialog = () => {
        setDeleteOpen(false);
    };

    const handleClickUpdateDialog = () => {
        setEditOpen(true);
    };
    const handleCloseUpdateDialog = () => {
        setEditOpen(false);
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
        setDeleteOpen(false)
        toast.success("Job deleted successfully");
    }

    function handle_click_edit_status(target_index: number, new_status: string) {
        jobsData[target_index].status = new_status;
        setJobData(jobsData);
        setEditOpen(false);
        toast.success("Job status updated successfully");
    }

    function handle_change_job_status(event: React.ChangeEvent<{ value: unknown }>) {
        setJobStatus(event.target.value as string);
    }

    function handle_change_search_status(event: React.ChangeEvent<{ value: unknown }>) {
        setSearchStatus(event.target.value as string);
    }

    function handle_change_update_status(event: React.ChangeEvent<{ value: unknown }>) {
        setUpdateStatus(event.target.value as string);
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
                    <Box display={"flex"} flexDirection={"column"} mt={"20px"}>
                        <TextField
                            id="standard-basic"
                            margin="normal"
                            value={jobName}
                            onChange={(event) => setJobName(event.target.value)}
                            label="Job Name"
                            InputProps={{inputProps: {maxLength: 255}}}
                        />
                        <Box gridColumn={2} display="flex">
                            <Typography variant="caption"
                                        textAlign="right"
                                        color={"#B2AEAE"}
                                        sx={{flex: 1}}>{jobName?.length || 0}/255</Typography>
                        </Box>
                    </Box>

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

                    <CreateButton variant={"contained"} onClick={handle_click_add_job}
                                  disabled={jobName && jobStatus ? false : true}>
                        <CreateIcon/>
                        create
                    </CreateButton>
                </CreateContainer>
            </Stack>


            <Stack sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Typography>Job List</Typography>
                <Typography>({jobsData.length + "/" + jobsData.length})</Typography>
            </Stack>
            <JobListContainer>
                <TextField
                    label="Job Name"
                    value={searchJob}
                    onChange={(event) => {
                        setSearchJob(event.target.value)
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRounded/>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField select
                           value={searchStatus}
                           onChange={handle_change_search_status}
                           label="Job Priority(All)"
                           sx={{ml: 2}}
                >
                    {
                        jobPriority.map((option: any) => {
                            return (
                                <MenuItem key={option.value} value={option.value}
                                >{option.label}</MenuItem>
                            )
                        })
                    }
                </TextField>
                {
                    searchJob || searchStatus ?
                        <Button onClick={() => {

                            setSearchJob("")
                            setSearchStatus("")
                        }}>reset filters</Button> : null
                }


            </JobListContainer>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Job Name</StyledTableCell>
                            <StyledTableCell>Priority</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobsData?.filter((e: any) => {
                            if (searchJob === "") {
                                return e
                            } else if (e.name.toLowerCase().includes(searchJob.toLowerCase())) {
                                return e
                            }
                        }).filter((e: any) => {
                            if (searchStatus === "") {
                                return e
                            } else if (e.status === searchStatus) {
                                return e
                            }
                        }).map((row: any, index: any) => (
                            <>
                                <StyledTableRow key={index}>
                                    <StyledTableCell width={"70%"}>
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Box sx={{
                                            background: row.status === "High" ? "#FFA1A1" : row.status === "Medium" ? "#FFD59E" : "#B4FF9F",
                                            padding: "0.3rem",
                                            borderRadius: "1rem",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "70px",
                                            color: "white",
                                            fontSize: "0.8rem",
                                            fontWeight: "bold"
                                        }}>
                                            {row.status}
                                        </Box>

                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton onClick={handleClickUpdateDialog}>
                                            <EditRounded/>
                                        </IconButton>
                                        <IconButton onClick={handleClickOpenDeleteDialog}>
                                            <DeleteRounded/>
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <Box>
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={deleteOpen || editOpen ? true : false}
                                        onClose={deleteOpen ? handleCloseDeleteDialog : handleCloseUpdateDialog}
                                        aria-labelledby="responsive-dialog-title"

                                    >
                                        <DialogTitle
                                            sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            {deleteOpen ? "JOB DELETE" : "JOB EDİT"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <Box sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexDirection: "column"

                                            }}>


                                                {
                                                    deleteOpen ? <DeleteRounded
                                                            sx={{color: "#F4BBBB", width: "15%", height: "15%"}}/> :
                                                        <EditRounded
                                                            sx={{color: "#F4BBBB", width: "15%", height: "15%"}}
                                                        />
                                                }
                                                <TextField
                                                    disabled
                                                    label={`Job Name`}
                                                    sx={{minWidth: "100%", margin: 3}}
                                                    value={row.name}
                                                />
                                                <TextField select
                                                           disabled={deleteOpen ? true : false}
                                                           value={updateStatus}
                                                           onChange={handle_change_update_status}
                                                           sx={{minWidth: "100%", margin: 3}}
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
                                            </Box>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus
                                                    onClick={editOpen ? handleCloseUpdateDialog : handleCloseDeleteDialog}>
                                                CANCEL
                                            </Button>
                                            {
                                                deleteOpen ?
                                                    <Button onClick={() => handle_click_delete_job(index)}
                                                            autoFocus>
                                                        DELETE
                                                    </Button> :
                                                    <Button
                                                        onClick={() => handle_click_edit_status(index, updateStatus)}>
                                                        UPDATE
                                                    </Button>
                                            }

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



