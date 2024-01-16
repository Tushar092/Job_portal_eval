const express = require("express");
const { JobsModel } = require("../models/Jobs.model");
const jobsRouter = express.Router();

jobsRouter.post("/add", async (req, res) => {
    const newJob = req.body;
    try {
        const job = new JobsModel(newJob);
        await job.save();
        res.send("New job has been posted");
    } catch (error) {
        console.log("error:", error.message);
    }
});

jobsRouter.get("/", async (req, res) => {
    try {
        const jobs = await JobsModel.find({});
        res.status(200).send(jobs);
    } catch (error) {

    }
});

jobsRouter.put("/update/:id", async(req, res) => {
    const jobID = req.params.id;
    try {
        await JobsModel.findByIdAndUpdate({_id: jobID}, req.body);
    } catch (error) {
        console.log(error.message);
    }
});

jobsRouter.delete("/delete/:id", async(req, res) => {
    const jobID = req.params.id;
    try {
        await JobsModel.findByIdAndDelete({_id: jobID});
        res.send("Job has been deleted");
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = { jobsRouter };