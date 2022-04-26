import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {Button, Typography} from "@mui/material";
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
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  height: auto;
  margin-top: 0.4rem;
  margin-left: 1rem;
  font-size: 0.8rem;
  @media (max-width: 650px) {
    border-radius: 1rem;
    font-size: 0.5rem;
  }
`;

export const CreateIcon = styled(AddBox)`
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 650px) {
    width: 1rem;
    height: 1rem;
  }
`;
