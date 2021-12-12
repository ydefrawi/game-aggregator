import {useEffect} from 'react'
import {useAtom} from 'jotai'
import {searchAtom} from '../NavBar/NavBar'
import ThinGameCard from '../ThinGameCard/ThinGameCard'

const SearchResults = () => {
    const [searchData, setSearchData] = useAtom(searchAtom)

    return (
        
        <div className="dropdown-menu search-results" aria-labelledby="searchDropdown">

        {/* Collapsable Div, button in NavBar.js */}
        {console.log("Search data in SearchResults", searchData)}
            {searchData?.map((item,i) => (
                <ThinGameCard 
                key={i} 
                name={item.name}
                image={item.short_screenshots[0]?.image}
                id={item.id}
                />
                )
            )}    
        </div>
    )
}

export default SearchResults
