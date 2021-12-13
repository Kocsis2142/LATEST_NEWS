import axios from 'axios'
import newsCategoryList from "../util/newsCategoryList"

export const fetchNews = async (category, setter, page, numberOfNews, setIsLoading) => {
  setIsLoading(true)
    try {
        const response = await axios.get(`http://localhost:3080/api/news?category=${category}&page=${page}&numberOfNews=${numberOfNews}`)
        setter(response.data.newsPack)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
    }
}

export const fetchMoreNews = async (category, setter, actuals, page, numberOfNews, setIsLoading) => {
  setIsLoading(true)
  try {
      const response = await axios.get(`http://localhost:3080/api/news?category=${category}&page=${page}&numberOfNews=${numberOfNews}`)
      if (actuals.length < response.data.maxNews) setter([...actuals, ...response.data.newsPack])
      setIsLoading(false)
    } catch (error) {
      console.error(error)
  }
}

export const fetchDemandedNews = async (setter, page, numberOfNews, searchOptions, setIsLoading) => {
  setIsLoading(true)
  let arrayOfNews = []
    for (let i = 0; i < newsCategoryList.length; i++) {
      try {
        const response = await axios.get(`http://localhost:3080/api/news?category=${newsCategoryList[i]}&page=${page}&numberOfNews=${numberOfNews}&searchOptions=${searchOptions}`)
        arrayOfNews.push(response)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
  
  Promise.all(arrayOfNews).then(values => {
    
      let finalArray = []
      values.map(value => finalArray.push(...value.data.newsPack))
        
    setter(finalArray)
  });
}
