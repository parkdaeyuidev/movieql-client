import React from 'react';
import {Query} from "react-apollo";
import {MOVIE_DETAILS} from "./queries";
import styled from "styled-components";

const Detail = ({
        match : {
            params: { movieId }
        }

    }) => <Query query={MOVIE_DETAILS} variables={{movieId}}>{({loading,error,data})=>{
        if(loading) return "loading";
        if(error) return "error";
        return(
            <div>
                <p>{data.movie.title}</p>
                <p>{data.movie.rating}</p>
                <p>{data.movie.genres}</p>
                <p>{data.movie.description_intro}</p>
                <p><img src={data.movie.medium_cover_image}/></p>
            </div>
        )
    }
    }</Query>; 
        


export default Detail;