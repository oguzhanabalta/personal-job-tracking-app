import {jobs} from "../../data/jobs";

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: never[]): void; new(): any; }; }; }) {

    if (req.method === "GET") {
        res.status(200).json(jobs);
    } else if (req.method === "POST") {
        const job = req.body.job;
        const newJob = {
            id: jobs.length + 1,
            name: job.name,
            status: job.status,
        }
        jobs.push(newJob);
        res.status(201).json(newJob);
    }
}
