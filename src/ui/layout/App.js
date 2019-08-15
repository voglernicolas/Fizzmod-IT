import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(data:image/jpeg;base64,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)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignInSide() {
  const classes = useStyles();


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>


        <div className={classes.paper}>



          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Agregar Alumno
          </Typography>

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="Nombre"
              autoComplete="Nombre"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Apellido"
              label="Apellido"
              id="apellido"
              autoComplete="Apellido"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Agregar
            </Button>

            <Box mt={5}>
            </Box>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}
