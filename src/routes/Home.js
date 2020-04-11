import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    // axios는 속도가 빠르지 않으니 자스에게 미리 알려주자
    getMoives = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // 뭘 기다려야하는지 명시
        this.setState({movies, isLoading: false}) // key값 그대로 쓸 경우 movies:movies  -> movies
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getMoives();
    }

    render() {
        console.log("render");
        const {isLoading, movies} = this.state;
        return <section className="container">
            {
                isLoading
                    ? <div className="loader">
                      <span className="loader_text">Loading . . .</span>
                    </div>
                    : <div className="movies">
                      {movies.map(movie => {
                        console.log(movie);
                        return <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}/>
                    })}
                    </div>
            }</section>; // end of return
    } // end of render
} // end of Home

export default Home;
