import express from "express";
import bodyParser from "body-parser";

const port = 4242;

let requests = ["a", "b"];

const app = express();

app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.json({
    name: "waves-shared-session-server",
    version: 0.1,
    requests,
  });
});

app.listen(port, () => {
  console.log("Server should be running at http://localhost:" + port);
});
