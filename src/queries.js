import gql from "graphql-tag";


export const HOME_PAGE = gql`
    {
        movies(limit:50, rating: 7){
            id
            title
            rating
            medium_cover_image
            genres
        }
    }
`;



export const MOVIE_DETAILS = gql`
    query getMovieDetails($movieId: Int!){
        movie(id: $movieId){
            title
            rating
            medium_cover_image
            genres
            description_intro
          }
    }
`;