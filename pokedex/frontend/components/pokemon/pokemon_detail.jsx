import React from 'react';

class PokemonDetail extends React.Component {
  constructor (props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.requestPokemon(this.id);
  }

  componentDidUpdate(prevProps) {
    this.id = this.props.match.params.id;
    if (this.id !== prevProps.match.params.id) {
      this.props.requestPokemon(this.id);
    }
  }

  render () {
    let poke = this.props.pokemon[this.id];
    let moveStr = "";
    if (poke.moves) {
      moveStr = poke.moves.join(', ');
      return (
        <div>
          This is pokemon number {this.id}
          <ul>
            <li><img src={poke.image_url}></img></li>
            <li>Name:{poke.name}</li>
            <li>Attack:{poke.attack}</li>
            <li>Defense:{poke.defense}</li>
            <li>Moves:{moveStr}</li>
            <li>Type:{poke.poke_type}</li>
          </ul>
        </div>
      );
    }
    return ("nothing to see here");

  }
}

export default PokemonDetail;

// pokemon.
//   <li key={el.id}>
//     <Link to={"/pokemon/" + el.id}>
//       <img style={imageStyling} src={el.image_url}></img>
//       {el.name}
//     </Link>
//   </li>));
