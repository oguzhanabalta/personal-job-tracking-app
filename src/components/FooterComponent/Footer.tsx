import React from 'react';
import {Box, Typography} from "@mui/material";


export default function FooterComponent() {
    return (
        <Box sx={{
            background: "#556cd6a8",
            width: "100%",
            height: "120px",
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch", color: "#fff"
        }}>
            <Typography>GitRepo</Typography>
            <Typography>GitRepo</Typography>
        </Box>
    );
}
