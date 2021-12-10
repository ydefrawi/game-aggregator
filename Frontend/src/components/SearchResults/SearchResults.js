import {useEffect} from 'react'
import {useAtom} from 'jotai'
import {searchAtom} from '../NavBar/NavBar'

const SearchResults = () => {
    const [searchData, setSearchData] = useAtom(searchAtom)

    return (
        
        <div className="dropdown-menu search-results" aria-labelledby="searchDropdown">

        {/* Collapsable Div, button in NavBar.js */}
        {console.log("Search data in SearchResults", searchData)}
            
            {searchData?.map((item,i) => {
                return(
                      <div key={i} className="dropdown-item">
                    {console.log(item.name)}
                    {item.name}
                </div>  
                )
            })}    
        </div>
    )
}

export default SearchResults
