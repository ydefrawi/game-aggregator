import {useEffect} from 'react'
import {useAtom} from 'jotai'
import {searchAtom} from '../NavBar/NavBar'

const SearchResults = () => {
    const [searchData, setSearchData] = useAtom(searchAtom)

    return (
        <div  
        class="collapse" 
        id="searchResults">
        {console.log("Search data in SearchResults", searchData)}
            
            <div>Hello Hello</div>
            {searchData?.map((item,i) => {
                return(
                      <div key={i}>
                    {console.log(item.name)}
                    <a href={"/games/"+item.id} className="gameLink"> {item.name}</a>
                </div>  
                )
            })}    
        </div>
    )
}

export default SearchResults
