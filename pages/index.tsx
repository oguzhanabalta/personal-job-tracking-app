import * as React from 'react';


import {Stack} from "@mui/material";

import AppBarComponent from "../src/components/AppBarComponent/AppBar";
import JobListComponent from "../src/components/JobListComponent/JobList";
import FooterComponent from "../src/components/FooterComponent/Footer";

export default function Index() {


    return (
        <Stack>
            <AppBarComponent/>
            <Stack sx={{margin: 5}}>
                <JobListComponent/>
            </Stack>
            <FooterComponent/>
        </Stack>

    );
}

