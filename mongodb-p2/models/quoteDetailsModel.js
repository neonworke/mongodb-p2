const mongoose = require("mongoose");

const quoteDetailsSchema = new mongoose.Schema (
    {
        quote: String,
        author: String
    },
    {
        collection: "quoteDetailsCollection",
    }
);

const quoteDetailsModel = mongoose.model("studentDetails",quoteDetailsSchema);
module.exports = quoteDetailsModel;