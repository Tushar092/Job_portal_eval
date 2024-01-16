const express = require("express");
const connection = require("./db");
const { jobsRouter } = require("./routes/Jobs.routes");

const app = express();
app.use(express.json());

app.use("/jobs", jobsRouter);

// app.get("/", (req, res) => {

// });

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Connected to Database");
    } catch (error) {
        console.log(error.message);
    }
    console.log("Server is running at port 8080");
});