import '../components-style/NewsPreview.css'
import { useState, useEffect } from "react";
import { fetchDemandedNews } from '../util/fetchNews'
import NewsCard from './NewsCard';

const SearchPreview = ({page, searchInput, setIsLoading, isLoading}) => {

    const [actualNews, setActualNews] = useState([])
      useEffect(() => {
        fetchDemandedNews(setActualNews, page, 20, searchInput, setIsLoading)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [searchInput])

    return (
      <div className="NewsPreview">
          <ul>
            {actualNews.map((actualNew, i) => <li key={i}><NewsCard actualNew={actualNew}/></li>)}
          </ul>
          {isLoading ? <div className="loaderCard">
            <div className="loader"></div>
          </div> : <div className="loaderCard"></div>}
      </div>
    );
  }
  
  export default SearchPreview;