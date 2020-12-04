import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridBackground = styled.div`
    position: relative;
    background-image: ${(props) => {
        if (props.pokemonType === 'grass') {
            return 'linear-gradient(to bottom right, #bff55f, #4ea626)';
        } else if (props.pokemonType === 'fire') {
            return 'linear-gradient(to bottom right, #e86f5d, #c73838)';
        } else if (props.pokemonType === 'water') {
            return 'linear-gradient(to bottom right, #58cedb, #3576a1)';
        } else if (props.pokemonType === 'electric') {
            return 'linear-gradient(to bottom right, #f5e676, #b8a516)';
        } else if (props.pokemonType === 'bug') {
            return 'linear-gradient(to bottom right, #6eba91, #1d7546)';
        } else if (props.pokemonType === 'poison') {
            return 'linear-gradient(to bottom right, #9b79bd, #5d308a)';
        } else if (props.pokemonType === 'ground') {
            return 'linear-gradient(to bottom right, #b39572, #785b38)';
        } else if (props.pokemonType === 'fairy') {
            return 'linear-gradient(to bottom right, #de81b1, #c22978)';
        } else if (props.pokemonType === 'fighting') {
            return 'linear-gradient(to bottom right, #ffa578, #c96e40)';
        } else if (props.pokemonType === 'psychic') {
            return 'linear-gradient(to bottom right, #d19bb8, #d9529a)';
        } else if (props.pokemonType === 'rock') {
            return 'linear-gradient(to bottom right, #856e67, #70493d)';
        } else if (props.pokemonType === 'ghost') {
            return 'linear-gradient(to bottom right, #736aa1, #4b4373)';
        } else if (props.pokemonType === 'ice') {
            return 'linear-gradient(to bottom right, #cce4ed, #2e96bf)';
        } else if (props.pokemonType === 'dragon') {
            return 'linear-gradient(to bottom right, #88e3de, #3eb3ad)';
        } else {
            return 'linear-gradient(to bottom right, #f5f5f5, #9e9d9d)';
        }
    }};
    width: 150px;
    height: 150px;
    @media screen and (max-width:768px) {
        width: 200px;
        height: 200px;
    }
    border-radius: 15px;
    margin: 15px;
    box-shadow: 5px 5px #d0d2d6;
`;

GridBackground.defaultProps = {
    pokemonType: undefined,
};

GridBackground.propTypes = {
    pokemonType: PropTypes.string,
};

export default GridBackground;