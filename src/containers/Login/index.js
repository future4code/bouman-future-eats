import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Banner = styled.div`
  width: 50%;
  height: 25%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
`

const Image = styled.img`
  background: black;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

function Login(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <Root>

            <Banner>
                <Image src={require('../../logo-future-eats.png')} />
            </Banner>
            <Typography gutterBottom variant="h5" component="h2">
                Fazer Login
                </Typography>

            <FormContainer noValidate autoComplete="off">

                <TextField
                    name="name"
                    type="text"
                    label="Nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <TextField
                    name="email"
                    type="email"
                    label="E-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <button> Entrar </button>

            </FormContainer>



        </Root>
    )
}

export default withStyles(styles)(Login);