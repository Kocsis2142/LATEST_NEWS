const mongoose = require('mongoose')
const NewsSchema = require('../models/newsSchema')
const newsCategoryList = require('../util/newsCategoryList')

const news = (req, res) => {
    try {
        if (newsCategoryList.includes(req.query.category) && 
            req.query.page <= 100 && 
            req.query.numberOfNews <= 100) {
                let category = req.query.category
                let numberOfNews = req.query.numberOfNews
                let page = req.query.page * numberOfNews
                let NewsModel = mongoose.model(category, NewsSchema)
                    NewsModel.find(req.query.searchOptions ? {content: {"$regex": req.query.searchOptions, "$options": "i"}} : {}, 
                        (err, data) => {
                            data.reverse()
                            let actualNews = []
                            for (i = page-numberOfNews; i < page; i++) {
                                actualNews.push(data[i])
                            }
                                let filteredNews = actualNews.filter(actualNew => actualNew)

                                res.send({newsPack: filteredNews, maxNews: data.length})
                    })
        } else {
                                res.send('Right "category" query & "page" number & "numberOfNews" is obligatory!')
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    news
}