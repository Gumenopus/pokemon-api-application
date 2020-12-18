import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    containerPokemonAttack: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerPokemonAbility: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    pokemonAttackName: {
      font: '20px Roboto, sans-serif',
    },
    pokemonAttackDamage: {
      font: '20px Roboto, sans-serif',
      fontWeight: 'bolder',
      marginLeft: theme.spacing(4),
    },
    pokemonAttackText: {
      font: '15px Roboto, sans-serif',
      color: '#8C8C8C',
      paddingRight: theme.spacing(2),
    },
    pokemonAbilityName: {
      font: '20px Roboto, sans-serif',
    },
    pokemonAbilityText: {
      font: '15px Roboto, sans-serif',
      color: '#8C8C8C',
      paddingRight: theme.spacing(2),
    },
  }),
);

export default useStyles;
