import React, {useState} from 'react';
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

function createData(
    name: string,
    calories: string,
) {
    return {name, calories};
}

const rows = [
    createData('Frozen yoghurt', "High",),
    createData('Ice cream sandwich', "High",),
    createData('Eclair', "Medium",),
    createData('Cupcake', "Low",),
    createData('Gingerbread', "Low",),
];

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


export default function JobListComponent() {
    const [openModal, setOpenModal] = useState(false);

    function openModalHandler() {
        setOpenModal(!openModal);
    }

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
                        jobPriority.map((option) => {
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
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
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
