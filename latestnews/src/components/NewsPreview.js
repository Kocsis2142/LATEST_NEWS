import '../components-style/NewsPreview.css'
import { useState, useEffect } from "react";
import { fetchNews, fetchMoreNews } from '../util/fetchNews'
import NewsCard from './NewsCard';

const NewsPreview = ({chosenCategory, page, setPage, triggerRefresh, setTriggerRefresh, setIsLoading, isLoading}) => {

    const [actualNews, setActualNews] = useState([])
    const [delayer, setDelayer] = useState(false)

      useEffect(() => { 
        fetchNews(chosenCategory.toLowerCase(), setActualNews, page, 20, setIsLoading)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [chosenCategory]) 

      useEffect(() => { 
        if (triggerRefresh) getMoreNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [triggerRefresh]) 

      useEffect(() => { 
          if (page > 1) { 
            changeDelayValue(true)
            setTimeout(() => {
              changeDelayValue(false)
            }, 1000)
          }
          if (page > 1) fetchMoreNews(chosenCategory.toLowerCase(), setActualNews, actualNews, page, 20, setIsLoading)
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [page]) 

      const getMoreNews = () => {
          if (!delayer) {
            setPage(page+1)
            setTriggerRefresh(false)
          }
      }

      const changeDelayValue = (bool) => {
        setDelayer(bool)
      }

    return (
      <div className="NewsPreview">
          <ul>
            {actualNews.map((actualNew, i) => <li key={i}><NewsCard actualNew={actualNew}/></li>)}
          </ul>
          {isLoading ? 
            <div className="loaderCard">
              <div className="loader"></div>
            </div> : 
            <div className="loaderCard">
            </div>}
      </div>
    );
  }
  
  export default NewsPreview;