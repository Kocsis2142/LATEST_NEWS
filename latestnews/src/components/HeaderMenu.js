import "../components-style/HeaderMenu.css"
import { useState } from 'react'
import newsCategoryList from "../util/newsCategoryList"
import capitalize from "../util/capitalize"
import logo from '../images/logo-ln-trans.png'

const HeaderMenu = ({setChosenCategory, setPage, searchInput, setSearchInput}) => {

    const [searchBarIsVisible, setSearchBarIsVisible] = useState(false)
    const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false)

    const categoryChooseHandler = (event) => {
        setPage(1)
        setSearchInput("")
        setChosenCategory(event.target.innerText)
    }

    const setCategoryToGeneral = (event) => {
        setPage(1)
        setSearchInput("")
        setChosenCategory(event.target.alt)
    }

    const searchInputHandler = (event) => {
        setPage(1)
        setSearchInput(event.target.value)
    }

    const setSearchVisible = () => {
        searchBarIsVisible ? setSearchBarIsVisible(false) : setSearchBarIsVisible(true)
    }

    const mobileMenuVisibilityHandler = () => {
        mobileMenuIsVisible ? setMobileMenuIsVisible(false) : setMobileMenuIsVisible(true)
    }

        return (
            <div className="HeaderMenu-Outline">
                <div className="HeaderMenu">
                        <div>
                            <ul>
                                <li className="hamburgerMenuBtn" onClick={mobileMenuVisibilityHandler}>☰</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="largeScreen">
                                <li className="lsLogo" onClick={setCategoryToGeneral}><img src={logo} alt="general"/></li>
                                {newsCategoryList.map((category, i) => 
                                    <li key={i} onClick={categoryChooseHandler}>{capitalize(category)}</li>)}
                            </ul>
                            {mobileMenuIsVisible && 
                            <ul className="smallScreen">
                                <li onClick={categoryChooseHandler}>General</li>
                                {newsCategoryList.map((category, i) => 
                                    <li key={i} onClick={categoryChooseHandler}>{capitalize(category)}</li>)}
                            </ul>}
                        </div>
                        <div>
                            {searchBarIsVisible && <input className="SearchBar" value={searchInput} placeholder="Search..." onChange={searchInputHandler}/>}
                            <p className="SearchIcon" onClick={setSearchVisible}>🔎︎</p>
                        </div>
                </div>
            </div>
        );
  }
  
  export default HeaderMenu