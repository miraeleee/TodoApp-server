const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRoute = require("./routes/todo");
app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


