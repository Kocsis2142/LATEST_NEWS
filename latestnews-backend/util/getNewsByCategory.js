const axios = require('axios')
const mongoose = require('mongoose')
const NewsSchema = require('../models/newsSchema')

const getNewsByCategory = async (category) => {
  let filteredData = []
  let NewsModel = mongoose.model(category, NewsSchema)
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=100&country=us&apiKey=${process.env.NEWS_API_KEY}`)
      NewsModel.find({}, (err, newsData) => {
          filteredData = response.data.articles.filter((array_el) => {
          return newsData.filter((anotherOne_el) => {
              return anotherOne_el.title == array_el.title
          }).length == 0
        })
        if (filteredData.length !== 0) {
          NewsModel.create(filteredData)
          .then(() => {
            console.log(`${category} news saved!`)
            if (newsData.length > 500) {
              for (let i=newsData.length; i > 500; i--) {
              NewsModel.deleteOne({}).then(() => {
                console.log("Data deleted")
                })
              }
            }
          })
        }
      })
    } catch (error) {
      console.error(error)
    }
}

module.exports = getNewsByCategory
