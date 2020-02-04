import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ActionButton from '../../components/ActionButton';

const Root = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Banner = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  margin-top: 78px;
  margin-bottom: 30px;
`

const FormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`
    margin: 20px;
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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Root>

            <Banner>
                <img src={require('../../img/logo-future-eats-invert.png')} />
            </Banner>
            <Typography variant="h6">
                Entrar
            </Typography>

            <FormContainer noValidate autoComplete="off">

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

                <TextField
                    name="password"
                    type="password"
                    label="Senha"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                    pattern={props.pattern}
                />

                <ActionButton />

            </FormContainer>

            <TextContainer onClick="">
                <Typography variant="h6">
                    Não possui cadastro? Clique aqui.
                </Typography>
            </TextContainer>

        </Root>
    )
}

export default withStyles(styles)(Login);