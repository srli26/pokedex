import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import TableHead from '../components/TableHead';
import axios from 'axios';

const PokemonDetails = () => {
    // Capture the pokemonId from the URL
    const { pokemonId } = useParams();

    const [pokemonIcon, setPokemonIcon] = useState(undefined);
    const [pokemon, setPokemon] = useState({});
    const [pokemonStats, setPokemonStats] = useState(undefined);
    const [pokemonType, setPokemonType] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        window.setTimeout(() => {
            // Specify Pokemon endpoint
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then((response) => {
                    // Handle the successful response
                    const { data } = response;
                    setPokemonIcon(data.sprites);
                    setPokemon(data);
                    setPokemonStats(data.stats);
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
                    console.log('Detail page API call completed.');
                });
        }, 1000);
    }, [pokemonId]);

    return (
        <div className="container">
            {loading && (
                <Loading page="list" />
            )}
            {!loading && error && (
                <div className="text-center">
                    <p className="lead">{error}</p>
                    <Link to="/" className="btn btn-danger">Go Back</Link>
                </div>
            )}
            {!loading && !error && (
                <div className="text-center">
                    {pokemonIcon ? (
                        <img src={pokemonIcon.front_default} alt="pokemon icon" width="120px"></img>
                    ) : (
                        <h3>NO IMAGE</h3>
                    )}
                    <TableHead pokemonType={pokemonType.name}>
                        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                    </TableHead>
                    {pokemonStats ? (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Stats</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemonStats.map((stat, i) => (
                                    <tr key={i}>
                                        <td>{stat.stat.name.toUpperCase()}</td>
                                        <td>{stat.base_stat}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <>
                            <hr /><br />
                            <h5>No data available.</h5>
                        </>
                    )}
                    <hr /><br />
                    <Link to="/" className="btn btn-danger">Go Back</Link>
                </div>
            )}
        </div>
    );
}

export default PokemonDetails;