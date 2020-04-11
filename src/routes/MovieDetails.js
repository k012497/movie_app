import React from "react";

// export default class MovieDetails extends React.Component {
//     componentDidMount(){
//         const { location, history } = this.props;
//         if(!location.state){
//             // redirection
//             history.push("/");
//         }
//         console.log(this.props);
//         console.log(location);
//     }

//     render(){
//         const { location } = this.props;
//         if(location.state){
//             return <div className="movie_details">
//                 <h1>{location.state.title}({location.state.year})</h1>
//                 <img src={location.state.poster}/>
//             </div>;
//         } else {
//             return null;
//         }
//     }
// }

export default function MovieDetails(props) {
    const { location, history } = props;
    if(!location.state){
        history.push("/"); // redirection
        return null;
    } else {
        return <div className="movie_details">
                <h1>{location.state.title}({location.state.year})</h1>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <ul className="movie_genres">{location.state.genres.map(genre=><li className="genre">{genre}</li>)}</ul>
                <p className="movie_summary">{location.state.summary}</p>
        </div>;
    }
}

// export default MovieDetails;