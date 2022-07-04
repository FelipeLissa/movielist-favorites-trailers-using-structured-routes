import axios from 'axios'

// https://api.themoviedb.org/3/
// /movie/now_playing?api_key=2c89f84a5cf34979dcf5918de3a5157c&language=pt-BR

const api = axios.create ({
    baseURL: 'https://api.themoviedb.org/3/'

})

export default api;