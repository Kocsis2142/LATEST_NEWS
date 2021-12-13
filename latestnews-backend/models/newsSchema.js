let mongoose = require("mongoose");
let Schema = mongoose.Schema;

    const newsSchema = 
               new Schema({
                    author: String,
                    title: String,
                    description: String,
                    url: String,
                    urlToImage: String,
                    publishedAt: String,
                    content: String  
                })

module.exports = newsSchema