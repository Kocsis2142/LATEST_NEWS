import './App.css';
import { useState } from 'react'
import HeaderMenu from './components/HeaderMenu';
import NewsPreview from './components/NewsPreview';
import SearchPreview from './components/SearchPreview';

const App = () => {

  const [chosenCategory, setChosenCategory] = useState('general')
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState("")
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setTriggerRefresh(true)
    }
  }

  return (
    <div className="App" onScroll={handleScroll}>
      <HeaderMenu setChosenCategory={setChosenCategory} setPage={setPage} searchInput={searchInput} setSearchInput={setSearchInput}/>
      {
        searchInput.length <= 3
          ? <NewsPreview chosenCategory={chosenCategory} page={page} setPage={setPage} triggerRefresh={triggerRefresh} setTriggerRefresh={setTriggerRefresh} setIsLoading={setIsLoading} isLoading={isLoading}/>
          : <SearchPreview page={page} searchInput={searchInput} setIsLoading={setIsLoading} isLoading={isLoading}/>
      }
    </div>
  );
}

export default App;
