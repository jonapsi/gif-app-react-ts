import GifList from "./gifs/GifList";
import PreviousSearches from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from './shared/components/SearchBar';

const test = ['Goku', 'Bleach', 'Dark Souls']

const GifsApp = () => {
    return (
        <>
            <CustomHeader tittle="Buscador de Gifs" description="Los mejores Gifs" />

            <SearchBar placeholder="Busca tu Gif" />

            <PreviousSearches searches={test} />

            <GifList gif={mockGifs} />


        </>
    )
}

export default GifsApp
