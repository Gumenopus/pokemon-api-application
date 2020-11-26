import { FormEvent, useState } from 'react';
import { api } from '../../api/api';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
    name: string;
    height: number;
}

const useStyles = makeStyles({
    paperPokemonContainer: {
        paddingTop: "20px",
        paddingBottom: "20px",

        textAlign: 'center',
    }
});

const getPokemonInformations = () => {

    return (
        <Grid item xs={3}>
            <Paper elevation={1} variant={'elevation'}>
                This is my paper text!
            </Paper>
        </Grid>
    );
}

const Pokemons: React.FC = () => {

    const classes = useStyles();

    const [pokemon, setPokemon] = useState('');

    async function getSpecificPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        try {
            const apiResponse = api.get(`/pokemon/${pokemon}`);
        } catch (err) {
            console.log("An error occurred in API " + err);
        }
    }
    return (
        <Grid container spacing={3} className={classes.paperPokemonContainer}>
            {getPokemonInformations()}
            {getPokemonInformations()}
            {getPokemonInformations()}
            {getPokemonInformations()}
            {getPokemonInformations()}
            {getPokemonInformations()}
            {getPokemonInformations()}
            {getPokemonInformations()}
        </Grid>
    );
}

export default Pokemons;