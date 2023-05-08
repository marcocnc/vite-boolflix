import { reactive } from 'vue';

export const store = reactive ({
   
    // API URL
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie?api_key=3dcd17509fe8c713db00f7cbb5012046&language=it-IT',apiUrlPopularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=3dcd17509fe8c713db00f7cbb5012046&language=it-IT',
    apiUrlPopularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=3dcd17509fe8c713db00f7cbb5012046&language=it-IT',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=3dcd17509fe8c713db00f7cbb5012046&language=it-IT',

    
    searchInput: '',
    
    // EMPTY ARRAYS
    userMovie: [],
    userSeries: [],
    popularMovies : []

})