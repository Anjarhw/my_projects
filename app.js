const express = require("express");
const app = express();
const PORT = process.env.PORT || 3200; // Set port to 3200

app.get("/", (req, res) => {
    res.send("Hello, World! This is a simple Node.js web app.");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
