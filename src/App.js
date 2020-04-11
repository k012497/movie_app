import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MovieDetails from "./routes/MovieDetails";
import About from "./routes/About";
import Home from "./routes/Home";


function App(){
    return <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/movie_details" exact={true} component={MovieDetails} />
    </HashRouter>;
}


export default App;