import { useState } from "react";
import GifList from "./gifs/GifList";
import PreviousSearches from "./gifs/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from './shared/components/SearchBar';
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

const searches = ['Goku', 'DC', 'One Piece']

const GifsApp = () => {
    const [previousSearch, setSearch] = useState(searches);

    const [gifs, setGifs] = useState<Gif[]>([]);


    const handleTermClicked = (term: string) => {
        console.log({ term });
        handleSearch(term)
    };

    const handleSearch = async (query: string) => {
        const nQuery = query.toLocaleLowerCase();

        console.log({ nQuery });
        if (!searches.includes(nQuery)) {
            searches.unshift(nQuery)
            searches.length > 5 && searches.pop()
            setSearch([...searches])
            console.log(previousSearch)
        }
        const gifs = await getGifsByQuery(query);
        setGifs(gifs)



        console.log({ gifs })
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

            <GifList gif={gifs} />


        </>
    )
}

export default GifsApp


