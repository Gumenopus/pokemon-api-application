import { FormEvent, useState } from 'react';
import { api } from '../../api/api';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
    name: string;
    height: number;
}

const useStyles = makeStyles({
    paperPokemon: {
        marginTop: "50px",
        marginLeft: "50px",
        marginRight: "50px",

        width: "350px",

        textAlign: 'center',

        paddingTop: "20px",
        paddingBottom: "20px",
    }
});

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
        <Paper elevation={1} variant={'elevation'} className={classes.paperPokemon}>
            This is my paper text!
        </Paper>
    );
}

export default Pokemons;