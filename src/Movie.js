import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from "prop-types";
import styled from "styled-components";


const Card = styled.div `
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    width: 200px;
    height: 300px;
    background-image: ${props => `url(${props.background})`};
    background-size:cover;
    background-position:center center;
    position:relative;
    margin-bottom: 40px;
`;

const Title = styled.span `
    background-color: white;
    width: auto;
    padding : 10px;
    bottom: 25px;
    position:absolute;
    
    margin:auto;
`;

const Movie = ({id,title,rating,poster}) =>(
    <Link to={ `/details/${id}`}>
    <Card background={poster}>
        <Title>
            {title} / {rating}
        </Title>
    </Card>
    </Link>
);

Movie.propTypes = {
    id:propTypes.number.isRequired,
    title:propTypes.string.isRequired,
    rating:propTypes.number.isRequired,
    poster:propTypes.string.isRequired
}

export default Movie;