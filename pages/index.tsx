import * as React from 'react';


import {Stack} from "@mui/material";

import AppBarComponent from "../src/components/AppBarComponent/AppBar";
import JobListComponent from "../src/components/JobListComponent/JobList";
import FooterComponent from "../src/components/FooterComponent/Footer";

export default function Index() {
    const jobsData = [] as any;
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


    return (
        <Stack>
            <AppBarComponent/>
            <Stack sx={{margin: 5}}>
                <JobListComponent jobsData={jobsData} jobPriority={jobPriority}/>
            </Stack>
            <FooterComponent/>
        </Stack>

    );
}

