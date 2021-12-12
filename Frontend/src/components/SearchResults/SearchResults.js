import {useEffect} from 'react'
import {useAtom} from 'jotai'
import {searchAtom} from '../NavBar/NavBar'
import SearchResult from '../SearchResult/SearchResult'


const SearchResults = () => {
    const [searchData, setSearchData] = useAtom(searchAtom)

    return (
        
        <div className="dropdown-menu search-results" aria-labelledby="searchDropdown">

        {/* Collapsable Div, button in NavBar.js */}
        {console.log("Search data in SearchResults", searchData)}
            {searchData?.map((item,i) => (
                <SearchResult 
                key={i} 
                name={item.name}/>
                )
            )}    
        </div>
    )
}

export default SearchResults
