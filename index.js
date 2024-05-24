const express = require("express");
const app = express();
const port = 3200;

app.get("/", (req, res) => res.send("chao ca nha yeu??? 1123"));

app.listen(port, () => console.log(`my port hello coi ,${port}`));
