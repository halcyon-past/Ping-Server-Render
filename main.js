const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const pingURL = "https://fml-lip2.onrender.com/ping";

app.get("/", (req, res) => {
  res.send("Server is running!!");
});

setInterval(() => {
  axios
    .get(pingURL)
    .then((response) => {
      console.log(`Pinged ${pingURL} - Status Code: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Error pinging ${pingURL}: ${error.message}`);
    });
}, 300000);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
