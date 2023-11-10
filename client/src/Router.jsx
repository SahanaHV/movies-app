import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovies";
import MovieDtails from "./pages/MoviesDetails";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/add-movie">
                <AddMovie />
            </Route>
            <Route exact path="/:movieId">
                <MovieDtails />
            </Route>
        </Switch>
    )
}

export default Router;