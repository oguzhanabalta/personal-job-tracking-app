import {jobs} from "../../../data/jobs";

export default function handler(req: any,res: any) {
    const {jobId} = req.query


    if (req.method ==="GET"){
        const job = jobs.find((job) => job.jobId === parseInt(jobId))
        res.status(200).json(job)
    }else if (req.method === "DELETE"){
        const deletedJob = jobs.find((job) => job.jobId === parseInt(jobId))
        const index = jobs.findIndex((job) => job.jobId === parseInt(jobId))

        jobs.splice(index,1)
        res.status(200).json(deletedJob)
    }else if (req.method === "POST"){
        const job = jobs.find((job) => job.jobId === parseInt(jobId))
        const {status} = req.body



        res.status(200).json(job)
    }

}
