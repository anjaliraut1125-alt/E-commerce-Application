
const express = require("express");
require("dotenv").config();

require("./config/db");
const useRoute = require("./routes/authRoutes");
const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", useRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
