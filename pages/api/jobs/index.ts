import {jobs} from "../../../data/jobs";

export default function handler(req: any, res: any) {

    if (req.method === "GET") {
        res.status(200).json(jobs);
    } else if (req.method === "POST") {
        const job = req.body.job;
        const newJob = {
            jobId: jobs.length + 1,
            name: job.name,
            status: job.status,
        }
        // @ts-ignore
        jobs.push(newJob);
        res.status(201).json(newJob);
    }
}
