import { mockGifs } from "./mock-data/gifs.mock"

const GifsApp = () => {
    return (
        <>
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Encuentra tu Gif</p>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Buscar Gif" />
                <button>Buscar</button>
            </div>
            <div className="previous-searches">
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Batman</li>
                    <li>Dark Souls</li>
                </ul>
            </div>
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>{gif.width}x{gif.height}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default GifsApp
