const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline with GitHub Actions and Docker!");
});

app.get("/health", (req,res)=>{
  res.json({status:"OK"});
})

module.exports = app;