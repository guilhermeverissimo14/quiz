import {Routes, Route} from 'react-router-dom';
import Home from "../pages/home";
import Game from "../pages/game";
import Score from "../pages/score";

export default function AppRoutes(){

    return(
     <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game" exact element={<Game />} />
        <Route path="/score" exact element={<Score />} />
     </Routes>
    );
}