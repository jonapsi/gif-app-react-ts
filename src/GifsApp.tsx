import { useState } from "react";
import GifList from "./gifs/GifList";
import PreviousSearches from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from './shared/components/SearchBar';

const test = ['Goku', 'Bleach', 'Dark Souls']

const GifsApp = () => {
    const [previousSearch, setSearch] = useState(test);

    const handleTermClicked = (term: string) => {
        console.log({ term })
    };

    const handleSearch = (query: string) => {
        console.log({ query })
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
