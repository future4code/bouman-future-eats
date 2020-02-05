import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ActionButton } from '../../components/ActionButton';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import { login } from '../../actions/users'

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
    const handleSubmit = ev => {
        ev.preventDefault()
        props.login(email, password)
    }

    return (
        <Root>

            <Banner>
                <img src={require('../../img/logo-future-eats-invert.png')} />
            </Banner>
            <Typography variant="h6">
                Entrar
            </Typography>

            <FormContainer
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="email@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required                   
                />

                <TextField
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                />

                <ActionButton text="Entrar" type="submit" />

            </FormContainer>

            <TextContainer onClick={props.goToSignUp}>
                <Typography variant="h6">
                    Não possui cadastro? Clique aqui.
                </Typography>
            </TextContainer>

        </Root>
    )
}

const mapDispatchToProps = dispatch => ({
    goToSignUp: () => dispatch(push(routes.signUp)),
    login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(Login)