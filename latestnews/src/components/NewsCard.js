import logo from '../images/logo-ln.jpg'
import { useState } from 'react';

const NewsCard = ({actualNew}) => {

  const [cardPreView, setCardPreView] = useState(false)

  if (!cardPreView) return (
      <div className="NewsCard" style={{backgroundImage:`url(${actualNew.urlToImage ? actualNew.urlToImage : logo})`}} onMouseOver={()=>setCardPreView(true)}>
        <div>
         <h1 href={actualNew.url} target="_blank">{actualNew.title}</h1>
        </div>
      </div>
    ) 
  else return (
    <div className="NewsCardOnPrev" style={{backgroundImage:`url(${actualNew.urlToImage ? actualNew.urlToImage : logo})`}} onMouseLeave={()=>setCardPreView(false)}>
        <div>
         <a href={actualNew.url} target="_blank" rel="noopener noreferrer">{actualNew.title}</a>
         <a href={actualNew.url} target="_blank" rel="noopener noreferrer"><p>Click to continue reading.</p></a>
        </div>
        <div>
          <p>{actualNew?.content?.split("…")[0]}... [ Continues on site. ]</p>
        </div>
        <div>
         <h5>{actualNew.description}</h5>
         <h6>{actualNew.author}</h6>
        </div>
    </div>
    )

  }

  export default NewsCard;