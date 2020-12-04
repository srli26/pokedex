import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loading from './Loading';
import GridBackground from './GridBackground';
import gridIcon from '../images/grid-icon.png';

const GridContent = styled.div`
    position: absolute;
    top: 10%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 15px;
    z-index: 1;
`;

const Circle = styled.img`
    position: absolute;
    display: block;
    margin-left: 25px;
    height: 100px;
    width: 100px;
    @media screen and (max-width:768px) {
        margin-left: 50px;
    }
    opacity: 0.1;
    z-index: -1;
`;

const Grid = (props) => {

    const { pokemonId } = props;
    const [pokemonIcon, setPokemonIcon] = useState(undefined);
    const [pokemon, setPokemon] = useState({});
    const [pokemonType, setPokemonType] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            // Specify Pokemon endpoint
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then((response) => {
                    // Handle the successful response
                    const { data } = response;
                    setPokemonIcon(data.sprites);
                    setPokemon(data);
                    setPokemonType(data.types[0].type);
                    setLoading(false);
                })
                .catch((error) => {
                    // Handle any errors
                    console.log(error.response);
                    const { status, data } = error.response;
                    // Set an error message in state
                    setError(`${status} ${data}`);
                    setLoading(false);
                }).then(() => {
                    console.log('Grid API call completed.');
                });
        }, 1000);
    }, [pokemonId])

    return (
        <GridBackground pokemonType={pokemonType.name}>
            <GridContent>
                {loading && (
                    <Loading />
                )}
                {!loading && error && (
                    <div className="text-center">
                        <p className="lead">{error}</p>
                    </div>
                )}
                {!loading && !error && (
                    <>
                        <Circle src={gridIcon} />
                        {pokemonIcon ? (
                            <img src={pokemonIcon.front_default} alt="pokemon icon"></img>
                        ) : (
                            <span>NO IMAGE</span>
                        )}
                        <hr />
                        {pokemon ? (
                            <span>{pokemonId + '. ' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                        ) : (
                            <span>Unknown</span>
                        )}
                    </>
                )}
            </GridContent>
        </GridBackground>
    );
}

Grid.defaultProps = {
    pokemonId: undefined,
};

Grid.propTypes = {
    pokemonId: PropTypes.number,
};

export default Grid;