import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '../components/Grid';
import Loading from '../components/Loading';

const Pokemon = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        window.setTimeout(() => {
            // Call the PokeAPI
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then((response) => {
                    // Handle the successful response
                    const { data } = response;
                    setPokemons(data.results);
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
                    console.log('Landing page API call completed.');
                });
        }, 1000);
    }, []);

    return (
        <div className="container">
            {loading && (
                <Loading page="list" />
            )}
            {!loading && !error && pokemons.length === 0 && (
                <p className="lead text-center">No data available</p>
            )}
            {!loading && error && (
                <p className="lead text-center">{error}</p>
            )}
            {!loading && !error && pokemons.length > 0 && (
                <div className="row">
                    {pokemons.map((pokemon, i) => (
                        <div className="col-12 col-sm-6 col-md-3 col-lg-2" key={pokemon.name}>
                            <Link to={`pokemon/${i + 1}`}>
                                <Grid pokemonId={i + 1} />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Pokemon;