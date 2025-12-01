import { type Gif } from "../mock-data/gifs.mock"


interface Props {
    gif: Gif[]
}


const GifList = ({ gif }: Props) => {
    return (
        <div className="gifs-container">
            {
                gif.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width}x{gif.height}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default GifList
