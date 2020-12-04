import './App.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Pokemon from './pages/Pokemons';
import PokemonDetails from './pages/PokemonDetails';
import Header from './components/Header';

function App() {
  const match = useRouteMatch();

  return (
    <div className="app">
      <div className="mb-3">
        <Header />
      </div>
      <Switch>
        <Route exact path={`${match.url}pokemon/:pokemonId`}>
          <PokemonDetails />
        </Route>
        <Route exact path={match.url}>
          <Pokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
