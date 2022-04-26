import React from 'react';
import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
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

const jobsData = [
    {
        id: 1,
        name: "Job 1",
        status: "High",
    },
    {
        id: 2,
        name: "Job 2",
        status: "High",

    },
    {
        id: 3,
        name: "Job 3",
        status: "High",
        updatedDate: "2020-01-01",
    },
    {
        id: 4,
        name: "Job 4",
        status: "High",
    }
]

const jobPriorityType = [
    {
        value: '0',
        label: 'High'
    },
    {
        value: '1',
        label: 'Medium'
    },
    {
        value: '2',
        label: 'Low'
    }
];


export default function JobListComponent() {


    return (

        <Stack sx={{display: "flex", flexDirection: "column", mt: 3}}>
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
                        jobPriorityType.map((option) => {
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
                        {jobsData.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.status}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton>
                                        <EditRounded/>
                                    </IconButton>
                                    <IconButton>
                                        <DeleteRounded/>
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </Stack>


    );
}


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f1f4ff",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
