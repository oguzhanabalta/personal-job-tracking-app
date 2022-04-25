import * as React from 'react';


import {Stack} from "@mui/material";

import AppBarComponent from "../src/components/AppBarComponent/AppBar";

import CreateJobComponent from "../src/components/CreateJobComponent/CreateJob";
import JobListComponent from "../src/components/JobListComponent/JobList";
import FooterComponent from "../src/components/FooterComponent/Footer";

export default function Index() {


    return (
        <Stack>
            <AppBarComponent/>
            <Stack sx={{margin: 5}}>
                <CreateJobComponent/>
                <JobListComponent/>
            </Stack>
            <Stack sx={{display: "flex", alignItems: "flex-end"}}>
                <FooterComponent/>

            </Stack>

        </Stack>

    );
}
