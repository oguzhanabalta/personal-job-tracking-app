import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {Box, Button, Stack, Typography} from "@mui/material";
import {AddBox} from "@mui/icons-material";

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f1f4ff",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const Title = styled(Typography)`
  flex: 1;
  font-size: 1.8rem;
  font-weight: 500;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const Text = styled(Typography)`
  flex: 1;
  font-size: 1rem;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const CreateButton = styled(Button)`
  display: flex;
  margin-left: 2rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.7rem;
  height: auto;
  margin-top: 0.4rem;

  font-size: 0.8rem;
  @media (max-width: 650px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const CreateIcon = styled(AddBox)`
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 650px) {

  }
`;


export const CreateContainer = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  @media (max-width: 650px) {
    grid-template-columns: 2fr 1fr;
  }
`;


export const JobListContainer = styled(Stack)`
  background: #f1f4ff;
  border-radius: 1rem 1rem 0px 0px;
  border: 1px solid #e0e0e0;
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr;
  justify-content: space-between;
  padding: 1rem;
  @media (max-width: 650px) {
    grid-template-columns: 3fr 2fr;
  }
`


