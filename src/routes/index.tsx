import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Pokemons from '../pages/pokemons';

export const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Pokemons}/>
        </Switch>
    );
}