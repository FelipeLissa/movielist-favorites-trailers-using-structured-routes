import { useEffect, useState} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'

//  https://api.themoviedb.org/3/movie/now_playing?api_key=2c89f84a5cf34979dcf5918de3a5157c&language=pt-BR


function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "2c89f84a5cf34979dcf5918de3a5157c",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilmes();
    }, [])

    if(loading) {
        return(
            <div className='loading'>
                <h2>carregando filmes..</h2>
            </div>
        )
    }


    return (
        
        <div className='container'>
            <div className='introducao-projeto'>
                <h1>Essa é uma api simples consumindo uma <a href='https://api.themoviedb.org'>API externa</a> através da Biblioteca Axios.
                 <br/>
                 <img src='android-chrome-192x192.png'></img>
                 <br/>
                 Api Criada por Felipe Lissa -<a target='blank' href='https://portfolio-felipelissa.vercel.app/'>Portfólio</a>
                </h1>
            </div>
            <div className='lista-filmes'>
                {filmes.map((filme) =>{
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}

export default Home