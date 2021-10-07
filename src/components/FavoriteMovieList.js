import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favActions';

const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props

    const handleRemoveFav = (id)=> {
         removeFavorite(id)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {   
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={()=>handleRemoveFav(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return({
        favorites: state.favorites.favorites,
        movies: state.movies.movies,
    })
}
const mapActionsToProps = {
    removeFavorite
}


export default connect(mapStateToProps, mapActionsToProps)(FavoriteMovieList);