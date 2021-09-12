const express = require("express");
const quoteDetailsModel = require("../models/quoteDetailsModel");
const router = express.Router();

router.post("/add", async function (req, res) {
    console.log("req.body", req.body);
    try {
    const databaseCreationResponse = await quoteDetailsModel.create(req.body);
    //console.log("databaseCreationResponse", databaseCreationResponse);
    res.send({ result: "Success" });
    } catch(error) {
        console.log("error occured", error);
    }
});

router.get("/getAll", async function (req, res) {
    try{
        const detailsOfQuote = await quoteDetailsModel.find({}, {__v:0, _id:0});
        //console.log("data from database", detailsOfQuote);
        res.send({ result: detailsOfQuote });
    } catch {
        console.log("error occurred", error);
    }
    
});

module.exports = router;