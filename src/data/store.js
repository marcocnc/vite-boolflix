import { reactive } from 'vue';

export const store = reactive ({
    // apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3dcd17509fe8c713db00f7cbb5012046=it-IT',

    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3dcd17509fe8c713db00f7cbb5012046&language=it-IT',

    apiUrlPopularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=3dcd17509fe8c713db00f7cbb5012046',

    popularMovies : [],

    searchInput: '',
    
    userMovie: []
})