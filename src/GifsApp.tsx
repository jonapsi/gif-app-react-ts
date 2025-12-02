import { useState } from "react";
import GifList from "./gifs/GifList";
import PreviousSearches from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from './shared/components/SearchBar';

const searches = ['Goku', 'DC', 'One Piece']

const GifsApp = () => {
    const [previousSearch, setSearch] = useState(searches);


    const handleTermClicked = (term: string) => {
        console.log({ term })
    };

    const handleSearch = (query: string) => {
        const nQuery = query.toLocaleLowerCase();

        console.log({ nQuery });
        if (!searches.includes(nQuery)) {
            searches.unshift(nQuery)
            searches.length > 5 && searches.pop()
            setSearch([...searches])
            console.log(previousSearch)
        }



    }

    return (
        <>
            <CustomHeader tittle="Buscador de Gifs" description="Los mejores Gifs" />

            <SearchBar
                placeholder="Busca tu Gif"
                onQuery={handleSearch}
            />

            <PreviousSearches
                searches={previousSearch}
                onLabelClicked={handleTermClicked} />

            <GifList gif={mockGifs} />


        </>
    )
}

export default GifsApp


